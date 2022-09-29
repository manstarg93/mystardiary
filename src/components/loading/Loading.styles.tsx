import { Dot, LoadingWrapper } from "./Loading";


export default function Loading() {
  return (
    <LoadingWrapper>
      <h3>Loading</h3>
      <Dot />
      <Dot />
      <Dot />
    </LoadingWrapper>
  )
}