import React from 'react';
import { TagCloud } from "react-tagcloud";



export default class Tagcloud extends React.Component {
    state = {
        tag: undefined
    }
    onClick = (tag) => {
        this.setState(() => ({tag}))
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