import React from "react"
import PropTypes from "prop-types"
import { FooterContainer, LeftFooterContainer, RightFooterContainer, NavLink } from "./style"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Footer = ({ siteTitle }) => {
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
    <FooterContainer>
      <LeftFooterContainer>
        <p>
          Creator Full Name
        </p>
        <p>
          UI / UX / Visual Design
        </p>
      </LeftFooterContainer>
      <RightFooterContainer>
        <p>
          SOCIAL
        </p>
        <div>
          <span>
            Email
          </span>
          <span>
            Dribble
          </span>
          <span>
            Instagram
          </span>
          <span>
            Linkedin
          </span>
        </div>
      </RightFooterContainer>
    </FooterContainer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `as`,
}

export default Footer

