import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PublicationLink from "../components/publication-link";
import HelmetWrapper from "../components/helmetWrapper";

const PublicationPage = ({
  data: {
    allPublicationsYaml: { edges: publicationEdges },
    allPreprintsYaml: { edges: preprintEdges }
  },
}) => {
  const Publications = publicationEdges
    .filter(edge => !!edge.node.title)
    .map(edge => (
      <PublicationLink 
        key={edge.node.id} 
        publication={edge.node} 
      />
    ));

  const Preprints = preprintEdges
    .map(({ node }) => (
      <PublicationLink 
        key={node.url} 
        publication={node} 
      />
    ));

  return (
    <Layout>
      <HelmetWrapper title="Publications" />
      <h1>Publications</h1>
      <div className="primary-content">
        Please see{" "}
        <a href="https://scholar.google.com/citations?user=fpYzuVwAAAAJ">
          Hongwu Du's Google scholar
        </a>{" "}
        for up-to-date publications or list of publications or below. If you do
        not have access to any publication, please email.
      </div>
      <div className="primary-content">{Publications}</div>
      <h1>Preprint</h1>
      <div className="primary-content">{Preprints}</div>
    </Layout>
  );
};


export default PublicationPage;
export const pageQuery = graphql`
  query publicationPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allPublicationsYaml(sort: { order: DESC, fields: [year] }) {
      edges {
        node {
          id
          title
          authors
          journal
          year
          url
          pdf
          github
        }
      }
    }
    allPreprintsYaml {
      edges {
        node {
          title
          authors
          preprint
          year
          url
          github
        }
      }
    }
  }
`;
