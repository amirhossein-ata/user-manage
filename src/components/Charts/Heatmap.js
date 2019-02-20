import React from 'react'
import Heatmap from 'react-heatmap-grid'

export default class HeatmapComponent extends React.Component{
    render(){
        const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
        const yLabels = ['Sun', 'Mon', 'Tue'];
        const data = new Array(yLabels.length)
        .fill(0)
        .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));
        
        return(
            <Heatmap
                xLabels={xLabels}
                yLabels={yLabels}
                data={data}
            />

        )
    }
}