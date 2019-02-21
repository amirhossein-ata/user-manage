import React, { PureComponent } from 'react';
import Chart from "react-apexcharts";
export default class LineChart extends React.Component {
    
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      options: {
        chart: {
          shadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#6699DC'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth',
          dashArray: this.props.dashed ? [5] : []
        },
        title: {
          text: 'نمودار خطی',
          align: 'center'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          
          size: 6
        },
        xaxis: {
          categories: ['فروردین','اردیبهشت','خرداد'],
          title: {
            text: 'ماه'
          }
        },
        yaxis: {
          title: {
            text: 'دما'
          },
          min: 5,
          max: 40
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
      series: [
        {
          name: "بالا - ۲۰۱۳",
          data: [28, 29, 33]
        },
      ],
    }
  }
  render(){
    return (
      <div id="chart">
          <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width={this.props.width}
              height={this.props.height}
          />
      </div>
    );
  }
  
}
