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
            Citywide tours like no other
          </p>
          <p>
            Hop-on, hop-off tours of the world's most beautiful cities
          </p>
          <div className="lowerText">
            <Button text="BOOK A TOUR"
              backgroundColor="#F5678E" textColor="#FEF5F7" curve="8px"
              loading={false}
              icon=""
              fullIcon=""
              fontSize="16px"
              fontWeight="800"
              iconColor=""
              paddingBottom="1em"
              paddingTop="1em"
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
