import React from "react"
import Button from "../../components/button"
import { MainContainer, LeftContainer, RightContainer } from "./style"
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
    <MainContainer>
      <LeftContainer image={data.backgroundImage && data.backgroundImage.sharp.fluid.src} >
        <div className="logoContainer">
          <Img fluid={data.logo && data.logo.sharp.fluid} className="logo" />
        </div>
        <div className="midText">
          <p>
            Oasis Sky Lounge
          </p>
          <p>
            Toronto's most luxurious rooftop lounge
          </p>
          <div className="lowerText">
            <Button text="MAKE A Reservation"
              backgroundColor="#EED5B0" textColor="#5E4219" curve="6px"
              loading={false}
              icon=""
              fullIcon="&"
              fontSize=""
              fontWeight=""
              iconColor=""
              iconBackgroundColor="#CEAA75"
              onClick={() => { }} />
          </div>
        </div>
      </LeftContainer>
      <RightContainer image={data.backgroundImage && data.backgroundImage.sharp.fluid.src} />
    </MainContainer>
  )
}


export default About;
