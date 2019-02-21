import React from 'react';
import { TagCloud } from "react-tagcloud";



export default class Tagcloud extends React.Component {

    state = {
        counter : 1
    }
    shouldComponentUpdate(nextProps, nextState){
        return false
     }
    onClick = (tag) => {
        this.props.onWordSelect(tag.value)
    } 
    
    customRenderer = (tag, size, color) => {
        console.log(tag,size,color, this.state.counter)
        let counter = this.state.counter ++
        this.setState(() => ({counter}))
        if(counter%4 === 0){
            return <span key={tag.value} style={{color,fontSize:`${size}px`}}>{tag.value}<br></br></span>;
        }
        return <span key={tag.value} style={{color,fontSize:`${size}px`}}>{tag.value}</span>;

    };
    render(){
        const options = {
            luminosity: 'light',
            hue: 'blue'
          };
        return(
            <TagCloud 
                minSize={12}
                colorOptions={options}
                maxSize={55}
                tags={this.props.data}    
                onClick={this.onClick}
                renderer={this.customRenderer}
            />
        )
    }
    
}