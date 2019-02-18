import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class DashedChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nptzh7ez/';

  render() {
    const {color = "#333CFF", width = 500, height= 300, data} = this.props
    return (
      <LineChart
        width= {width}
        height={height}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
    
       {this.props.dashed ? (
            <Line type="monotone" dataKey="uv" stroke={color} strokeDasharray="5 5" />    

        ):(
            <Line type="monotone" dataKey="uv" stroke={color} />

        )}
      </LineChart>
    );
  }
}
