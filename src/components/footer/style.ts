import styled from "@emotion/styled"
import { Link } from "gatsby"

interface linkPropsData {
  fontWeight: string
}

export const FooterContainer = styled("footer")`
  display: grid;
  width: 100vw;
  border-top: 0.1px solid #eeeeee99;
  height: 15vh;
  font-size: 0.8rem;
  word-spacing: 2px;
  overflow: hidden;
  align-content: center;
`
export const LeftFooterContainer = styled("div")`
  width: 50vw;
  grid-column: 1/2;
  height: 15vh;
  display: grid;
  overflow: hidden;
  align-content: center;
  justify-content: flex-start;
  padding-left: 10vw;
  p {
    font-size: 0.8rem;
  }
  p:last-child {
    color: #9d9d9d;
  }
`
export const RightFooterContainer = styled("div")`
  width: 50vw;
  height: 15vh;
  grid-column: 2/3;
  overflow: hidden;
  display: grid;
  justify-content: flex-start;
  align-content: center;
  padding-right: 5%;
  p {
    margin-bottom: 1px;
  }
  span:first-child {
    padding-left: 0px;
    border-left: 0px solid black;
    margin-right: 5px;
    color: #9d9d9d;
  }
  span {
    padding-left: 5px;
    margin-right: 5px;
    border-left: 1px solid #9d9d9d;
    color: #9d9d9d;
  }
`

export const NavLink = styled(Link)`
  color: #7a8a9c;
  font-size: 18px;
  font-weight: 500;
  align-self: center;
  text-decoration: none;
  margin-left: 20px;
  &.current-page {
    color: #3c3c3c;
    font-weight: 700;
  }
  :last-of-child {
    margin-right: 50vw;
  }
`
