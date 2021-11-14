import { Component } from "react";
import parseJSONToDRF from "../../util/parseJSONToDRF";
import Button from "../Button/Button";
import TextArea from "../Input/Input";

class JSONSide extends Component {

    placeHolder = `{\n\t"name": "John Doe"\n}`;
    initialInput = {
        value: "",
        error: ""
    };
    maxInputCount = 5;

    constructor(props) {
        super(props);
        this.state =  {
            inputs: [{
                value: "",
                error: ""
            }]
        };
    }

    onJSONInputChange = (e, key) => {
        let JSONInputs = this.state.inputs;
        let val = e.target.value;
        let newInput = {
            value: val,
            error: ""
        };
        val.replace("\n", "");
        val.replace("\t", "");
        this.setState({
            inputs: JSONInputs
        });
        try {
            JSON.parse(val);
        } catch {
            newInput.error = "Invalid JSON";
        }
        JSONInputs[key] = newInput;
        this.setState({
            inputs: JSONInputs
        })
    }

    addJSONInput = () => {
        let inputs = this.state.inputs;
        if (inputs.length >= this.maxInputCount) return;
        inputs.push(this.initialInput);
        this.setState({
            inputs: inputs
        })
    }

    serialize = () => {
        const data = this.perpareData();
        if (data === undefined) {
            return;
        }
        const val = parseJSONToDRF(data);
        this.props.onSerializeCallback(val);
    }

    perpareData = () => {
        let data = [];
        for(let i=0; i<this.state.inputs.length; ++i) {
            try {
                let val = JSON.parse(this.state.inputs[i].value);
                data.push(val);
            } catch {
                return undefined
            }
        }
        return data;
    }

    render() {
        return (
            <>
            {
                this.state.inputs.map((input, idx) => (
                    <TextArea 
                        value={input.value}
                        placeHolder={this.placeHolder}
                        error={input.error}
                        key={idx}
                        index={idx}
                        title={`Sample JSON #${idx + 1}`}
                        onChange={this.onJSONInputChange}
                        maxLines={20}
                    />
                ))
            }
            <Button 
                style={{marginTop: 10}}
                onClick={this.addJSONInput}
                title={" + Add Another JSON"}
                disabled={this.state.inputs.length >= this.maxInputCount }
            />
            <Button
                style={{marginTop: 10, float: "right"}}
                title={"To Serializer"}
                onClick={this.serialize}
            />
            </>
        )
    }
}

export default JSONSide;