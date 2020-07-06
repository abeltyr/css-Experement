import styled from "@emotion/styled"
interface imageProsData {
  image: string
}
export const MainContainer = styled("div")`
  box-sizing: content-box;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${(props: imageProsData) => props.image});
  background-size: 75vw 75vh;
  background-repeat: no-repeat;
  background-position: 12.5vw;
  .midText {
    /* color: #f58058; */
    font-size: 2rem;
    font-weight: 400;
    z-index: 1;
  }
  .lowerText {
    /* color: #f58058; */
    padding-left: 5vw;
    padding-right: 5vw;
    margin-top: 2vh;
    margin-bottom: 8vh;
    font-size: 1.2rem;
    font-weight: 300;
    z-index: 1;
  }
`
export const BackgroundContainer = styled("div")`
  width: 100vw;
  height: 80vh;
  margin-top: -80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #fff;
    /* margin-top: -5vh;
    font-size: 18rem; */
    margin-top: -10vh;
    font-size: 14rem;
    text-shadow: 1px 1px 20px #eeeeee;
    font-weight: bold;
    z-index: 0;
  }
`
export const BlockContainer = styled("div")`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: 12.5vw;
  padding-right: 12.5vw;
  padding-bottom: 10vh;
  grid-row-gap: 5vh;
  grid-column-gap: 5vh;
  .card {
    background: #f7f7f7;
    height: 35vh;
    width: 35vw;
    overflow: hidden;
    display: grid;
    justify-content: center;
    text-align: center;
    .displayImage {
      margin-top: 5vh;
      width: 30vw;
      height: 20vh;
      margin-bottom: 2.5vh;
    }
    p {
      width: 30vw;
      color: #d8d8d8dd;
      font-size: 2.5rem;
      font-weight: 800;
    }
  }
  .card:last-child {
    background: transparent;
    overflow: hidden;
    width: 75vw;
    grid-column: 1/3;
    .displayImage {
      width: 75vw;
      height: 35vh;
    }
    p {
      display: none;
      width: 0px;
    }
  }
`
