import React from "react"
import { MainContainer, LeftContainer, RightContainer } from "./style"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const About = () => {


  const data = useStaticQuery(graphql`
    query {
      image : file(relativePath: { eq: "1.jpg" }) {
       sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backgroundImage : file(relativePath: { eq: "design.png" }) {
       sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <MainContainer>
      <LeftContainer image={data.backgroundImage && data.backgroundImage.sharp.fluid.src}>
        <p className="brightText">
          Approach.
        </p>
        <p className="brightText">
          Strategy.
        </p>
        <p className="brightText">
          Creative.
        </p>
        <p className="lowerText">
          Creativity is a phenomenon where by something new and somehow valuable is formed. The created item may be intangible (such as an idea, a scientific theory, a musical composition, or a joke) or a physical
        </p>
      </LeftContainer>
      <RightContainer>
        <Img className="ImageClass" fluid={data.image && data.image.sharp.fluid} alt="photo" />
      </RightContainer>
    </MainContainer>
  )
}


export default About;
