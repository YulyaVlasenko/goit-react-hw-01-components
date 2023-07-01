import styled from 'styled-components';

export const DataOfUser = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  width: 500px;
  text-align: center;
  border: 1px solid grey;
`

export const Stats = styled.ul`
  display: flex;
  background-color: beige;
`

export const StatsItem = styled.li`
  flex-basis: calc(100%/3);
  border-top: 1px solid grey;

  &:not(:last-child) {
    border-right: 1px solid grey;
  }
`

export const Label = styled.span`
  display: block;
`


