import React from "react"
import PropTypes from "prop-types"
import { HeaderContainer, LeftHeaderContainer, RightHeaderContainer, NavLink } from "./style"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Header = ({ siteTitle }) => {
  const { logo } = useStaticQuery(graphql`
  query {
    logo : file(relativePath: { eq: "logo.png" }) {
     sharp: childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <Img className="logo" fluid={logo && logo.sharp.fluid} alt="HEADER LOGO" />
      </LeftHeaderContainer>
      <RightHeaderContainer>
        <NavLink to="/" activeClassName="current-page">
          HOME
        </NavLink>
        <NavLink to="/quote" activeClassName="current-page">
          QUOTE
        </NavLink>
        <NavLink to="/landing" activeClassName="current-page">
          LANDING
        </NavLink>
        <NavLink to="/book" activeClassName="current-page">
          BOOK
        </NavLink>
      </RightHeaderContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `as`,
}

export default Header

