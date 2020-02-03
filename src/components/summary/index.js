import React from 'react'
import styled from 'styled-components'
import SummaryItem from './SummaryItem'
import { Warning } from 'styled-icons/material/Warning'

const SummaryParent = styled.div`
    color: #fff;

`
const Stats = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 20px 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
`
const WarningIcon = styled(Warning)`
    color: yellow;
    width: 22px;
`

export default ({metrics}) => {
    return (<SummaryParent>
              <Stats>
                <SummaryItem metric={metrics.surveySessions} description={`surveys counducted between ${metrics.dateRange[0]} to ${metrics.dateRange[1]}`} />
                <SummaryItem metric={metrics.surveySize()} description="students were surveyed" />
                <SummaryItem metric={metrics.lastResult} description="Is currently leading the poll" />
               </Stats>
               {!metrics.confidenceLevel(200) && 
                    <div><WarningIcon /> Our study is not statistically conclusive yet. <a href="/">Get notified when we have better data</a></div>
                }
            </SummaryParent>)
}