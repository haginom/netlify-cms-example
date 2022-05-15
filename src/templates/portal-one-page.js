import React from 'react'
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const TableItem = ({resource, tablename}) => {
  console.log(resource, "resource")
  return (
    <>
    <h1>{tablename}</h1>
    </>
  )
}

const PortalPageTemplate = ({title, table}) => {
  return (
    <>
    <h1>{title}</h1>
    {table.map(tableItems => (
          <TableItem
            resource={tableItems.resource}
            tablename={tableItems.tablename}
          />
        ))}
    </>

  )
 
}

PortalPageTemplate.propTypes = {
  title: PropTypes.string,
  
}

const PortalPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <PortalPageTemplate
        title={frontmatter.title}
        table={frontmatter.table}

      />
    </Layout>
  );
};

// PortalPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

export default PortalPage;

export const portalData = graphql`
query SessionPageByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
    frontmatter {
      title
      table {
        resource {
          file
          filename
          filetype
        }
        tablename
      }
    }
  }
}
`