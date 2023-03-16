import styled from "styled-components";

export const Headline = styled.h2`
  margin: 15px 0 10px 0;
  color: #2E4053
`
export const Avatar = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
border-radius: 50%;
`
export const UserHeader = styled.div`
  display: flex ;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`
export const Info = styled.h3`
  display: flex ;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`

export const Description = styled.div`
  background: #2E4053;
  padding: 15px ;
  border-radius: 15px;
  margin-top: 30px;
  display: flex;  
  justify-content: center;
  gap: 2rem;
  @media only screen and (max-width: 500px) {
    flex-direction: column
  }
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  color: white;
`
export const ListItem = styled.li`
  font-size: 15px;
`