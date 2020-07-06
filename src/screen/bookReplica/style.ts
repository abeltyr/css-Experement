import styled from "@emotion/styled"
interface imageProsData {
  image: string
}
export const BackgroundContainer = styled("div")`
  background-image: url(${(props: imageProsData) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 40%;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 100vh;
  }
`

export const MainContainer = styled("div")`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  font-family: freight sans-serif;
  /* display: grid; */
  /* grid-template-rows: 10vh 1fr 1fr; */

  padding-left: 7.5vw;
  padding-right: 7.5vw;
  padding-top: 5vh;

  background: linear-gradient(
    to bottom right,
    #568db6 10vw,
    50vw,
    #568db699 100vw
  );
  .logo {
    width: 150px;
  }
  .midText {
    margin-top: 5vh;
    width: 75%;
    color: #fff;
    p:first-of-type {
      font-size: 48px;
      font-weight: 1000;
      line-height: 50px;
    }
    p:last-of-type {
      font-weight: 100;
      font-size: 24px;
      margin-top: 2.5vh;
    }
  }
  .lowerText {
    margin-top: 5vh;
  }

  @media screen and (max-width: 500px) {
    .midText {
      width: 90%;
    }
    .logo {
      width: 100px;
    }
  }

  @media screen and (min-width: 1300px) {
    .midText {
      width: 50%;
    }
  }
  @media screen and (max-height: 700px) {
    .midText {
      margin-top: 5vh;
      p:first-of-type {
        font-size: 30px;
        font-weight: 1000;
        line-height: 35px;
      }
      p:last-of-type {
        font-weight: 100;
        font-size: 16px;
        margin-top: 1.5vh;
      }
    }
  }
`
