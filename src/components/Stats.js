import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col} from 'antd'

import Progress from './Charts/progress'
import LineChart from './Charts/LineChart'
import TagCloud from './Charts/TagCloud'
import Heatmap from './Charts/Heatmap'


export default class Stats extends React.Component{
    state = {
        chartWidth : 500,
        selectedWord:''
    }
    wordSelect = (word) => {
        console.log(word)
        this.setState(() => ({selectedWord: word}))
    }
    refCallback = element => {
        if (element) {
            let width = ReactDOM.findDOMNode(element).clientWidth
            console.log(width)
            this.setState(() => ({chartWidth:width}))
            console.log(this.state.chartWidth)
        }
      };
    render(){
      const imageSample = 'data:image/png;base64,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'
      const progresses = [
        {
            image: imageSample,
            percent:70
        },
        {
            image: imageSample,
            percent:30
        },
        {
            image: imageSample,
            percent:25
        },
        {
            image: imageSample,
            percent:90
        }
      ]
      const heatmapData = [
        {
          name: "سری ۱",
          data: [
            {
            x: '۱',
            y: 22
          }, {
            x: '۲',
            y: 29
          }, {
            x: '۳',
            y: 13
          }, {
            x: '۴',
            y: 32
          },{
            x: '۵',
            y: 32
          },{
            x: '۶',
            y: 25
          },{
            x: '۷',
            y: 2
          }]
        },
        {
          name: "سری ۲",
          data: [{
            x: '۱',
            y: 43
          }, {
            x: '۲',
            y: 43
          }, {
            x: '۳',
            y: 43
          }, {
            x: '۴',
            y: 43
          },
          {
            x: '۵',
            y: 15
          },
          {
            x: '۶',
            y: 32
          },
          {
            x: '۷',
            y: 17
          }]
        },  
        {
            name: "سری ۳",
            data: [{
              x: '۱',
              y: 26
            }, {
              x: '۲',
              y: 42
            }, {
              x: '۳',
              y: 12
            }, {
              x: '۴',
              y: 32
            },
            {
              x: '۵',
              y: 32
            },
            {
              x: '۶',
              y: 3
            },
            {
              x: '۷',
              y: 20
            }]
        },
        {
            name: "سری ۴",
            data: [{
              x: '۱',
              y: 20
            }, {
              x: '۲',
              y: 32
            }, {
              x: '۳',
              y: 15
            }, {
              x: '۴',
              y: 32
            },
            {
              x: '۵',
              y: 2
            },
            {
              x: '۶',
              y: 27
            },
            {
              x: '۷',
              y: 32
            }
            ]
        },
      ]
      const tagCloudData = [
        { value: "ایرانسل", count: 30 },
        { value: "همراه اول", count: 10 },
        { value: "رایتل", count: 78 },
        { value: "شاتل", count: 50 },
        { value: "هدیه", count: 0 },
        { value: "مکالمه", count: 90 },
        { value: "شارژ", count: 70 },
        { value: "اینرنت", count: 5 },
        { value: "دانلود", count: 50 },
        { value: "پیشنهاد", count: 5 },
        { value: "ماهانه", count: 18 },
      ];
      const lineChartData =  {
        series: [
          {
            name: "نمودار خطی",
            data: [28, 29, 33]
          },
        ],
        xaxis:{
          categories: ['فروردین','اردیبهشت','خرداد'],
          text: 'ماه'
        },
        yaxis: {
          title: {
            text: 'دما'
          },
          min: 5,
          max: 40
        },
      }
    
      return(
            <Row
              style={{background:'#F0F3F7'}}
            >
                <Col 
               
                    ref={this.refCallback}
                >
                  <br></br>
                  <Row type="flex" align="middle" justify="center" style={{height:'400px'}}>
                  <Col 
                    
                    span={8}
                    style={{background:'white',height:'100%',padding:'5% 2% 0 2%'}}

                  >
                    <Progress progresses = {progresses} />
                  </Col>
                  <Col span={1}></Col>
                  <Col 
                    span={8}
                    style={{background:'white',height:'100%',padding:'0 5% 0 0%'}}

                  >
                    <LineChart
                      xaxis={lineChartData.xaxis}
                      yaxis={lineChartData.yaxis} 
                      width={this.state.chartWidth}
                      series={lineChartData.series} 
                      height={387}
                    />
                  </Col>
                  </Row>
                  <br></br>
                  <Row type="flex" align="middle" justify="center" style={{height:'400px'}}>
                   
                    <Col 
                      span={8}
                      style={{background:'white',height:'100%',padding:'5% 8% 0 2%'}}

                    >
                        <TagCloud 
                          data={tagCloudData}
                          onWordSelect = {(word) => this.wordSelect(word)}
                        />
                    </Col>
                    <Col span={1}></Col>

                     <Col 
                        span={8}
                        style={{background:'white',height:'100%',padding:'0 5% 0 0%'}}      
                    >
                    <LineChart
                      xaxis={lineChartData.xaxis}
                      yaxis={lineChartData.yaxis} 
                      width={this.state.chartWidth}
                      series={lineChartData.series} 
                      height={387}
                      dashed={true}
                    />
                      
                    </Col>

                  </Row>
                  <br></br>
                  <Row type="flex" align="middle" justify="center" style={{height:'500px'}}>
                    <Col 
                      span={17}
                      style={{background:'white',height:'100%',padding:'3% 15% 0 0%'}}   
                    >
                      <Heatmap series={heatmapData} width={800} height={387}/>
                    </Col>
                  </Row>
                
                </Col>
            </Row>
        )
    }
}