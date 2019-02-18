import React from 'react'
import LineChart from './LineChart'
import SimpleChart from './simpleChart'
class Chart extends React.Component{

    render(){
        const {type = 'line',color = "#333CFF", width, height, data} = this.props
        const charts = {
            'line': <LineChart  data = {data} color = {color} width = {width} height = {height}/>,
            'dashed': <LineChart data = {data} dashed={true} width = {width} height = {height}/>,
            'simple': <SimpleChart data = {data} width = {width} height = {height}/>
        }
      
        return(
            charts[type]
        )
    }
}

export default Chart