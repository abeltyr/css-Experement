exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query {
      site {
        siteMetadata {
          blogs {
            slug
          }
        }
      }
    }
  `)
    if (result.errors) reporter.panic("failed to create posts", result.errors)
    const posts = result.data.site.siteMetadata.blogs
    posts.forEach(post => {
        actions.createPage({
            path: `/blogs/${post.slug}/`,
            component: require.resolve("./src/templates/posts.tsx"),
            context: {
                slug: `/${post.slug}/`,
            },
        })
    })
}
