import * as React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"

export const SessionRollItem = ({
  title,
  colour,
  slug
}) => {
  return (
  <li>
    <div
      style={({
        width: '300px',
        height: '100px',
        backgroundColor: colour 
      })}>
      <Link to={`${slug}`}>
        <h1>{title}</h1>
      </Link>
    </div>
  </li>
  )
}

const SessionRoll = ({session, ...props}) => {
  return (
    <>
    {session.map(sessionItem => (
          <SessionRollItem
            slug={sessionItem.node.fields.slug}
            key={sessionItem.node.id}
            {...sessionItem.node.frontmatter}
          />
        ))}
    </>
  )
}

export default SessionRoll