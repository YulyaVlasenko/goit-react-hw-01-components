import styled from "styled-components";

export const FriendItem = styled.li`
 display: flex;
 gap: 20px;
 margin-top: 20px;
 padding-left: 20px;
 align-items: center;
 border: 1px solid gray;
 &:hover,
 &:focus {
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)};
 `

export const Status = styled.span`
display: block;
width: 15px;
height: 15px;
border-radius: 50%;
 background-color: ${({isgreen}) => (isgreen ? 'green' : 'red')}`