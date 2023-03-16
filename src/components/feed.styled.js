import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1200px;
  margin: auto;
  padding:20px;
  gap: 2rem;
  background: #D6DBDF;
  border-radius: 15px;
`
export const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const View = styled.div`
  max-width: 1200px;
  margin: auto;
  padding:20px;
`
export const LoaderIndic = styled.img`
  hright: 80px;
  width: 80px;
`