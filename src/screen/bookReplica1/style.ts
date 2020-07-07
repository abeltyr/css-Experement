import styled from "@emotion/styled"
interface imageProsData {
  image: string
}

export const MainContainer = styled("div")`
  overflow: hidden;
  width: 100vw;
  height: 50vh;
  border-bottom: 1px solid #eeeeee99;
  @media screen and (max-width: 800px) {
    height: 100vh;
    border-bottom: 0px;
  }
`

export const LeftContainer = styled("div")`
  overflow: hidden;
  width: 50vw;
  float: left;
  height: 50vh;
  padding-left: 7.5vw;

  .logoContainer {
    position: absolute;
  }

  .logo {
    margin-top: 20px;
    width: 100px;
  }

  .midText {
    width: 85%;
    height: 50vh;
    color: #252d3b;
    padding-top: 13vh;
    p:first-of-type {
      font-size: 38px;
      font-weight: 400;
      line-height: 50px;
    }
    p:last-of-type {
      font-weight: 300;
      font-size: 24px;
      margin-top: 2.5vh;
    }
  }

  .lowerText {
    margin-top: 5vh;
    justify-content: flex-end;
    justify-items: flex-end;
  }

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${(props: imageProsData) => props.image || ""});
    background-size: cover;
    background-position: 50%;
    .midText {
      width: 75%;
      padding-top: 15vh;
      p:first-of-type {
        font-size: 48px;
      }
      p:last-of-type {
        font-size: 34px;
      }
    }
    .lowerText {
      margin-top: 5vh;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 100vh;
    display: block;
    background-image: url(${(props: imageProsData) => props.image || ""});
    background-size: cover;
    background-position: 50%;
    .midText {
      width: 90%;
      padding-top: 20vh;
      p:first-of-type {
        font-size: 38px;
      }
      p:last-of-type {
        font-size: 24px;
      }
    }
    .lowerText {
      margin-top: 5vh;
    }
  }

  @media screen and (max-height: 500px) {
    width: 100vw;
    height: 100vh;
    display: block;
    .midText {
      width: 90%;
      padding-top: 25vh;
    }
  }
`

export const RightContainer = styled("div")`
  overflow: hidden;
  width: 50vw;
  float: right;
  height: 50vh;
  background-image: url(${(props: imageProsData) => props.image || ""});
  background-size: cover;
  background-position: 50%;
`
