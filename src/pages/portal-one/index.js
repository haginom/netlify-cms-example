import React from 'react'
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from '../../components/layout';
import SessionRoll from '../../components/sessions';

function IndexPage({data}) {
  return(
    <>
    <Layout>
      <h2>Welcome to the portal where you will find all of the resources and the assets you will need to deliver our programme.</h2>
      <SessionRoll session={data.allMarkdownRemark.edges} />
    </Layout>
    </>
  )

}

export default IndexPage;

export const query = graphql`
  query sessionsQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "portal-one-page"}}}) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            title
            colour
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;