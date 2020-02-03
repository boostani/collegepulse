import React, { useState } from 'react';
import styled from 'styled-components'
import { Title, SubTitle } from './components/layout'
import Embed from './components/Embed'
import Share from './components/Share'
import Summary from './components/summary'
import dataFactory from './lib/dataFactory'
import LineChart from './components/LineChart'
import VotingDetails from './components/VotingDetails';

const AppParent = styled.div`
  background-color: #10A472;
  min-height: 100vh;
`
const ShareingParent = styled.div`
  float: right;
  padding-top: 50px;
`
const Content = styled.div`
  padding: 20px 80px;
`
const Header = styled.header`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 40px 80px 0;
`


function App() {
  const [metrics, setMetrics] = useState();

    

  if(!metrics){
    fetch('https://api.myjson.com/bins/bxobk')
            .then(result=> {
                return result.json()
            }).then(data=>{
                setMetrics(new dataFactory(data[0]));
            })

    return <div>Loading...</div>

  } else {
    return (
      <AppParent>
        <Header>
          <div>
          <Title className="title">How college students vote for democratic presidential candidates?</Title>
          <ShareingParent>
            <Embed />
            <Share />
          </ShareingParent>

          </div>
          <SubTitle>This survay has been sponsored by Center for deseise control</SubTitle> 
        </Header>
        <Content>
          <Summary metrics={metrics} />
          <LineChart data={metrics.fullData} range={metrics.dateRange}/>
          <VotingDetails ranking={metrics.ranking}/>
        </Content>
      </AppParent>
  )}
}

export default App;
