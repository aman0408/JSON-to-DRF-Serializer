import { Component } from 'react';
import './Style.css'

class TextArea extends Component {

    render() {
        const height = this.props.value ? 
            Math.min(this.props.value.split("\n").length, this.props.maxLines) + 1 : 
            Math.min(this.props.placeHolder.split("\n").length, this.props.maxLines) + 1;
        let classes = []
        if (this.props.error)
            classes.push("has-error")
        return (
            <div>
                <h3>{this.props.title}</h3>
                <textarea className={classes.join(" ")}
                    style={{height: height * 20 + "px" }}
                    placeholder={this.props.placeHolder}
                    readOnly={this.props.readOnly}
                    onChange={(e) => {this.props.onChange(e, this.props.index);} } 
                    onKeyDown={ (e) => {
                        if(e.key === "Tab") {
                            e.preventDefault();
                            const {selectionStart, selectionEnd} = e.target;
                            e.target.value = e.target.value.substring(0, selectionStart) + "\t" + e.target.value.substring(selectionEnd)
                            this.props.onChange(e, this.props.index);
                        }
                    }}
                    value={this.props.value} 
                />
                <small className="error">{this.props.error}</small>
            </div>
        ) 
    }

}

export default TextArea