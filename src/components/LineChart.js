import React from 'react';
import styled from 'styled-components'
import Chart from "react-google-charts";
import { SectionTitle } from '../components/layout'

const ChartParent = styled.div`
    padding: 10px 0;
    width: 100%
`


const LineChart = ({data, range}) => {
    const options = {
        title: "",
        curveType: "function",
        legend: { position: "bottom" },
        backgroundColor: "#EFEAEA",
        chartArea:{bottom:100, top:50, width: "90%"}
      };
    if(data){
        return <div>
                <SectionTitle>Voting patterns between {range[0]} to {range[1]} </SectionTitle>
                <ChartParent>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                        />
                </ChartParent>
            </div>
    } else {
        return <div>Loading...</div>
    }

 }

export default LineChart;
