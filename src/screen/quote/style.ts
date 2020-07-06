import styled from "@emotion/styled"
interface imageProsData {
  image: string
}
export const MainContainer = styled("div")`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #392d40;
  display: grid;
  grid-template-columns: repeat(2 1fr);
  grid-template-rows: repeat(1 1fr);
`
export const LeftContainer = styled("div")`
  grid-column: 1/2;
  grid-row: 1/2;
  float: left;
  width: 50vw;
  overflow: hidden;
  margin: 0px;
  padding-top: 25vh;
  padding-bottom: 25vh;
  background-image: url(${(props: imageProsData) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -10vw;
  text-align: center;

  .brightText {
    padding-right: 15%;
    padding-left: 15%;
    font-size: 4.5rem;
    font-weight: 1000;
    color: #ff006d;
    text-shadow: 1px -5px 25px #ff006d;
    line-height: 4.5rem;
    text-align: center;
  }
  .lowerText {
    text-align: left;
    margin-top: 10vh;
    margin-right: 8vw;
    margin-left: 8vw;
    color: #fff;
    font-size: 1rem;
    hyphens: auto;
  }

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    .brightText {
      font-size: 4rem;
      line-height: 4.5rem;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100vw;
    .brightText {
      font-size: 2.5rem;
      line-height: 3.5rem;
    }
    .lowerText {
      margin-right: 5vw;
      margin-left: 5vw;
      font-size: 0.8rem;
    }
  }
`

export const RightContainer = styled("div")`
  grid-column: 2/3;
  grid-row: 1/2;
  float: right;
  width: 50vw;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  color: #fff;
  .ImageClass {
    width: 60%;
    height: 60vh;
    margin-top: 20vh;
    margin-left: 20%;
  }
`
