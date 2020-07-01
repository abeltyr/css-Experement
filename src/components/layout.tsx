/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import useSiteMetaData from "../hooks/metaData"
import Header from "./header"
import { Global, css } from "@emotion/core"
import "./layout.css"

const Layout = ({ children }) => {
  const { title } = useSiteMetaData()
  let textColor = "#222"

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0px;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            margin: 0;
            color: #555;
            font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 18px;
            line-height: 1.4;
            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: ${textColor};
              line-height: 1.1;
              + * {
                margin-top: 0.5rem;
              }
              strong {
                color: ${textColor};
              }
              li {
                margin-top: 0.25rem;
              }
            }
          }
        `}
      />
      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main
          css={css`
            margin: 2rem auto 4rem;
            max-width: 90vw;
            width: 550px;
          `}
        >
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
