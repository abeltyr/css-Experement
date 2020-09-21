import styled from "@emotion/styled"

interface MainCardData {
  primaryBackgroundColor: string
  primaryTextColor: string
  cardBorderRadius: number
}

interface GeneralCardData {
  cardBorderRadius: number
}

export const MainCard = styled("div")`
  width: 800px;
  height: 300px;
  margin: 10px;
  box-shadow: 0px 1px 20px #21212133;
  border-radius: ${(props: MainCardData) =>
    props.cardBorderRadius ? `${props.cardBorderRadius}px` : "9px"};
  background-color: ${(props: MainCardData) =>
    props.primaryBackgroundColor || "#F2F5F7"};
  color: ${(props: MainCardData) => props.primaryTextColor || "#000"};

  @media screen and (max-width: 1500px) {
    width: 650px;
  }
  @media screen and (max-width: 1400px) {
    width: 600px;
  }
  @media screen and (max-width: 1024px) {
    width: 95vw;
    height: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 550px) {
    width: 95vw;
    height: 500px;
  }
`
export const LeftCard = styled("div")`
  width: 33.3%;
  height: 100%;
  overflow: hidden;
  float: left;
  border-top-left-radius: ${(props: GeneralCardData) =>
    props.cardBorderRadius ? `${props.cardBorderRadius}px` : "9px"};
  border-top-right-radius: 0px;
  border-bottom-left-radius: ${(props: GeneralCardData) =>
    props.cardBorderRadius ? `${props.cardBorderRadius}px` : "9px"};
  border-bottom-right-radius: 0px;
  background: #212121;
  .LeftImage {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 35%;
    border-top-left-radius: ${(props: GeneralCardData) =>
      props.cardBorderRadius ? `${props.cardBorderRadius}px` : "9px"};
    border-top-right-radius: ${(props: GeneralCardData) =>
      props.cardBorderRadius ? `${props.cardBorderRadius}px` : "9px"};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`

export const RightCard = styled("div")`
  width: 66.7%;
  height: 100%;
  overflow: hidden;
  float: right;
  border-top-right-radius: ${(props: GeneralCardData) =>
    props.cardBorderRadius ? `${props.cardBorderRadius}px` : "9px"};
  border-top-left-radius: 0px;
  border-bottom-right-radius: ${(props: GeneralCardData) =>
    props.cardBorderRadius ? `${props.cardBorderRadius}px` : "9px"};
  border-bottom-left-radius: 0px;
  background: #212121;
  .LightText {
    color: hsl(201, 23%, 34%);
    font-size: 18px;
    font-weight: 400;
  }
  .DarkText {
    font-weight: 700;
    color: hsl(202, 57%, 15%);
    font-size: 24px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: 65%;
    border-bottom-left-radius: ${(props: GeneralCardData) =>
      props.cardBorderRadius ? `${props.cardBorderRadius}px` : "9px"};
    border-bottom-right-radius: ${(props: GeneralCardData) =>
      props.cardBorderRadius ? `${props.cardBorderRadius}px` : "9px"};
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    .DarkText {
      font-size: 20px;
    }
    .LightText {
      font-size: 14px;
    }
  }
`

export const TopCard = styled("div")`
  height: 50%;
  overflow: hidden;
  background: #fff;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  p {
    margin-bottom: 16.5px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 40%;
    padding-top: 20px;
    p {
      margin-bottom: 7.5px;
    }
  }
`
export const BottomCard = styled("div")`
  height: 50%;
  overflow: hidden;
  background: #f2f5f7;
  padding-left: 25px;
  padding-right: 25px;

  div:first-of-type {
    width: 100%;
    height: 50%;
    display: grid;
    /* grid-template-columns: 55% 45%; */
    overflow: hidden;
    .Left {
      overflow: hidden;
      float: left;
      height: 100%;
      grid-column: 1/3;
      grid-row: 1/10;
      .LeftTop {
        display: flex;
        width: 100%;
        height: 100%;
        padding-top: 25px;
        p {
          margin-bottom: 5px;
        }
        span {
          margin-left: 10px;
        }
      }
    }
    .Right {
      grid-column: 3/5;
      grid-row: 1/10;
      display: flex;
      overflow: hidden;
      float: right;
      height: 100%;
      align-items: flex-start;
      padding-top: 25px;
      justify-content: flex-end;
    }
    @media screen and (max-width: 450px) {
      .Left {
        grid-column: 1/5;
        grid-row: 1/2;
        justify-content: center;
        .LeftTop {
          padding-top: 15px;
        }
      }
      .Right {
        grid-column: 1/5;
        grid-row: 2/10;
        align-items: flex-start;
        padding-top: 0px;
        justify-content: center;
      }
    }
  }
  p:last-child {
    width: 100%;
    margin-top: 10px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 70%;
    p:last-child {
      text-align: center;
      width: 100%;
      margin-top: 10px;
    }
    .Review {
      text-align: center;
    }
  }
`
