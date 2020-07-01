import { graphql, useStaticQuery } from "gatsby"

const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetaData
