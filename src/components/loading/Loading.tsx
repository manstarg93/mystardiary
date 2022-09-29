import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Dot = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
`