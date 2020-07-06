import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query blogQuery {
      site {
        siteMetadata {
          blogs {
            title
            author
            slug
            description
            image
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.blogs.map(post => ({
    title: post.title,
    author: post.author,
    slug: post.slug,
    description: post.description,
    image: post.image,
  }))
}

export default usePosts
