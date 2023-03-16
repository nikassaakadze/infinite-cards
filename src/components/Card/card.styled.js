import styled from "styled-components";

export const UserCard = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: white
`
export const CardBody = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 3px 10px 0 10px;
`
export const CardName = styled.h3`
  padding: 0;
  margin: 0
`
export const CardTitle = styled.h6`
  padding: 0;
  margin: 0
`

export const CardHero = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px 10px 0 0;
`