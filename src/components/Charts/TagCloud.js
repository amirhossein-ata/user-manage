import React from 'react';
import { TagCloud } from "react-tagcloud";



export default class Tagcloud extends React.Component {
    state = {
        tag: undefined
    }
    shouldComponentUpdate(nextProps, nextState){
        return false
     }
    onClick = (tag) => {
        this.props.onWordSelect(tag.value)
    } 

    render(){
        const options = {
            luminosity: 'light',
            hue: 'blue'
          };
        return(
            <TagCloud minSize={12}
                colorOptions={options}
                maxSize={55}
                tags={this.props.data}    
                onClick={this.onClick}
            />
        )
    }
    
}