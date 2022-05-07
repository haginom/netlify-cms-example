import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="avenir">
      <Header />
        <main>{children}</main>
    </div>
  )
}


export default Layout
