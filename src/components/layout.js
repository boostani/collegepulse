import styled from "styled-components"

export const RoundButton = styled.div`
    padding: 8px;
    border-radius: 50%;
    border: 1px solid #DBD8D8;
    width: 40px;
    height: 40px;
    display: inline-block;
    margin-left: 20px;
    cursor: default;
    :hover{
        box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
    }
`
export const SectionTitle = styled.h4`
    font-weight: 600;
    font-size: 1.76em;
    margin-top: 40px;
    color: #fff;
`

export const Title = styled.h1`
    color: #EFEAEA;
    max-width: 70%;
    text-align: left;
    font-family: 'DM Serif Display', serif;
    font-size: 2em;
    float: left;
`

export const SubTitle = styled.h4`
    font-size: 1.2em;
    font-weight: 500;
  
`