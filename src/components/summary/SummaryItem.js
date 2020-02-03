import React from 'react'
import styled from 'styled-components'

const ItemParent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TopMetric = styled.div`
    font-size: 70px;
    padding: 20px;
    font-weight: 400;
    color: #EFEAEA;
`
const Description = styled.div`
    font-size: 24;
    margin-bottom: 30px;
    max-width: 220px;
    text-align: center;
`

export default ({metric, description}) => {
    return <ItemParent>
                <TopMetric>{ metric }</TopMetric>
                <Description>{ description }</Description>
            </ItemParent>
}