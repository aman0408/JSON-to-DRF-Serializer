import { Component } from "react";
import TextArea from "../Input/Input";


class DRFSide extends Component {

    placeHolder = `from rest_framework import serializers\n\nclass NameSerializer(serializers.Serializer):\n\tname = serializers.CharField(required=True)`;

    render() {
        return (
            <TextArea
                value={this.props.value}
                readOnly={true}
                title={"DRF Serializer"}
                placeHolder={this.placeHolder}
                maxLines={80}
            />
        )
    }
}


export default DRFSide;