import { Component } from "react";


export class Filter extends Component{

  
    onChange = (e) => {
        this.props.onChange(e.target.value)
    }
    

    render() {

        return (
            <label>
          Find contact
          <input type='text' name='filter' onChange={this.onChange} />
        </label>
        )
    }
}