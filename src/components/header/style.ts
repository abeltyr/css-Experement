import styled from "@emotion/styled"
import { Link } from "gatsby"

interface linkPropsData {
  fontWeight: string
}

export const HeaderContainer = styled("header")`
  display: grid;
  width: 100vw;
  height: 6vh;
  align-content: center;
  overflow: hidden;
  background: transparent;
`
export const LeftHeaderContainer = styled("div")`
  width: 20vw;
  height: 6vh;
  display: grid;
  overflow: hidden;
  align-content: center;
  justify-content: center;
  background: transparent;
  position: absolute;
  .logo {
    width: 45px;
  }

  @media screen and (max-width: 800px) {
    .logo {
      width: 40px;
    }
  }
`
export const RightHeaderContainer = styled("div")`
  width: 100vw;
  height: 6vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  background: transparent;
  padding-right: 5%;
  /* justify-content: center; */
  @media screen and (max-width: 700px) {
    display: none;
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
