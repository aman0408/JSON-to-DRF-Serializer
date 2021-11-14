import { Component } from "react";
import './Style.css';

class Button extends Component {
    render() {
        return ( 
            <button style={{...this.props.style}}
                onClick={this.props.onClick}
                disabled={this.props.disabled}
            >
                {this.props.title}
            </button>
        )
    }
}

export default Button;