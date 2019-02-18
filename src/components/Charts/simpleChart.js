import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/exh283uh/';

  render() {
    const {color = "#333CFF", width = 500, height= 300} = this.props

    return (
      <LineChart width={width} height={height} data={this.props.data}>
        <Tooltip/>
       <Legend />
        
        <Line type="monotone" dataKey="pv" stroke={color} strokeWidth={2} />
      </LineChart>
    );
  }
}
