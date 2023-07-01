import styled from "styled-components";

export const Statistic = styled.section`
 width: 500px;
 margin: 0 auto;
 padding-top: 20px;
 text-align: center;
 border: 1px solid grey;
 border-top: none;
`

export const StatsData = styled.ul`
 display: flex;
 margin-top: 20px;
`

export const Stat = styled.li`
 flex-basis: calc(100%/5);
 border-top: 1px solid grey;


  &:not(:last-child) {
    border-right: 1px solid grey;
  }
  `