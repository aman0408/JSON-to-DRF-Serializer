function createKeyToTypesObject(arr) {

    let key_types = {}

    for (const i in arr) {
        for (const key in arr[i]) {

            if (key in key_types) {
                key_types[key].count += 1;
                if (typeof (arr[i][key]) === key_types[key].type) {
                    if (arr[i][key] === null)
                        key_types[key].nullable = true;
                } else if (arr[i][key] === null) {
                    key_types[key].nullable = true;
                } else {
                    return {
                        isPossible: false,
                        data: "JSON cannot be converted to DRF as " + "\'" + key + "\'" + " field is of varying types."
                    }
                }
            } else {
                key_types[key] = {
                    type: typeof (arr[i][key]),
                    count: 1,
                    nullable: false
                };
            }

        }
    }
    return addRequiredKey(arr, key_types);
}

function addRequiredKey(arr, key_types) {
    let count = arr.length;

    for (const key in key_types) {
        if (key_types[key].count === count) {
            key_types[key].required = true;
        } else {
            key_types[key].required = false;
        }
    }

    return {
        isPossible: true,
        data: key_types
    };
}

function formatDRFField(key, field_type, required, nullable, tab = true) {

    let string = "";
    let tab_separator = tab ? "\t" : "  ";
    let equals = " ="

    if (field_type.includes("Boolean")) {
        if (!required) {
            string += tab_separator + key + equals + field_type + "(required=False)\n";
        } else
            string += tab_separator + key + equals + field_type + "()\n";
    } else {
        string += tab_separator + key + equals + field_type;

        if (nullable && !required) {
            string += "(required=False, allow_null=True)\n";
        } else if (nullable && required) {
            string += "(allow_null=True)\n";
        } else {
            string += "()\n";
        }
    }

    return string;
}

function parseJSONToDRF(arr) {
    let response = createKeyToTypesObject(arr);

    let isPossible = response.isPossible;

    if (!isPossible)
        return response.data;
    
    const key_types = response.data;

    let string = "from rest_framework import serializers\n\nclass ExampleSerializer(serializers.Serializer):\n";

    for (const key in key_types) {

        let required = key_types[key].required;
        let nullable = key_types[key].nullable;
        let field_type = typeof ("abc");

        if (key_types[key].type === typeof (true)) {

            if (nullable) {
                field_type = " serializers.NullBooleanField"
            } else {
                field_type = " serializers.BooleanField"
            }
        }
        if (key_types[key].type === typeof (1)) {

            field_type = " serializers.IntegerField"
        }
        if (key_types[key].type === typeof (1.1)) {

            field_type = " serializers.FloatField"
        }
        if (key_types[key].type === typeof ("abc")) {

            field_type = " serializers.CharField"
        }
        if (key_types[key].type === typeof ({
            a: 1
        })) {

            field_type = " serializers.JSONField"
        }
        if (key_types[key].type === typeof ([12, 1])) {

            field_type = " serializers.ListField"
        }
        string += formatDRFField(key, field_type, required, nullable);
    }

    return string

}

export default parseJSONToDRF;