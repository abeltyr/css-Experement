import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Button from "../../components/button"
import { MainContainer, BackgroundContainer } from "./style"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const About = () => {


  const data = useStaticQuery(graphql`
    query {
      backgroundImage : file(relativePath: { eq: "background.png" }) {
       sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo : file(relativePath: { eq: "logo.png" }) {
       sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundContainer image={data.backgroundImage && data.backgroundImage.sharp.fluid.src} >

      <MainContainer>
        <div className="logoContainer">
          <Img fluid={data.logo && data.logo.sharp.fluid} className="logo" />
        </div>
        <div className="midText">
          <p>
            A Workspace for the World's Biggest Companies
          </p>
          <p>
            A global network collaborative Workspace where individuals and small companies can grow
          </p>
        </div>
        <div className="lowerText">
          <Button
            text="Join us"
            backgroundColor="#FCCE7F"
            textColor="#562703"
            curve="6px"
            loading={false}
            icon=""
            onClick={() => { }} />

        </div>

      </MainContainer>
    </BackgroundContainer>
  )
}


export default About;
