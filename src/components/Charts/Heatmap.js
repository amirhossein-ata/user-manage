import React from 'react'
import Chart from "react-apexcharts";
import '../../styles/stats.css'

export default class HeatMap extends React.Component{
  
    render(){

    const options = {
        chart: {
            type: 'heatmap',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#008FFB"],
       
        series: this.props.series,
          
        title: {
            text: 'نمودار هیتمپ',
            align: 'center'
        },
        grid: {
                padding: {
                    left: 50
                }
        }
    }
        return(
            <div id="chart">
                <Chart 
                    options={options} 
                    type="heatmap" 
                    series={options.series}
                    width={this.props.width}
                    height={this.props.height}

                />
            </div>
        )
    }
}
