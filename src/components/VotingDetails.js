import React, { useState } from 'react';
import styled from 'styled-components'
import { SectionTitle } from '../components/layout'
  
const InsightParent = styled.div`
    padding: 30px 40px;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    margin-bottom: 60px;
`
const CandidateDropdown = styled.select`
    font-size: 1.2em;
    padding: 16px 8px;
    margin-bottom: 22px;
`
const Summary = styled.div`
    font-size: 1.2em;
`
const Metric = styled.span`
    font-size: 1.4em;
    font-weight: 500;
`

const VotingDetails = ({ranking}) => {
    const [selected, setSelected] = useState(ranking[0])
    const selectCandidate = (e) => {
       setSelected(ranking[e.target.value])
    }

    if(ranking){
        return <div>
                <SectionTitle>Select for detailed insight about each candidate </SectionTitle>
                <InsightParent>
                    <CandidateDropdown onChange={selectCandidate}>
                        { ranking.map((item, index)=>{
                            return <option 
                                    key={index}
                                    value={index}
                                    >
                                        {item.candidate}
                                    </option>
                        })}
                    </CandidateDropdown>
                    <Summary>
                        {selected.firstName} is 
                            <Metric> #{selected.rank} </Metric> 
                            amongst <Metric> {ranking.length} </Metric> 
                            with <Metric> {selected.percentage}% </Metric> of the total votes. {selected.firstName} has <Metric> {selected.female} </Metric>  votes from female and <Metric> {selected.male} </Metric> from male students.
                    </Summary>
                </InsightParent>
            </div>
    } else {
        return <div>Loading...</div>
    }

 }

export default VotingDetails;
