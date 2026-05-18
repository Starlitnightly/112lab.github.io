import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PeopleLink from "../components/people-link";
import HelmetWrapper from "../components/helmetWrapper";

const PeoplePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const People_teacher = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "teacher",
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);

  const People_phd = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "phd",
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);

  const People_md = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "md",
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);
  
  const People_bd = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "bd",
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);

  const People_pi = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "pi",
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);

  const prevPeople = edges
    .filter(
      (edge) =>
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.position === "alumni",
    )
    .map((edge) => <PeopleLink key={edge.node.id} data={edge.node} />);

  console.log(edges);

  return (
    <Layout>
      <HelmetWrapper title="People" />
      <h1>PI</h1>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {People_pi}
      </div>
      <h1>Team</h1>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {People_teacher}
      </div>
      <h1>PHD student</h1>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {People_phd}
      </div>
      <h1>Master student</h1>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {People_md}
      </div>
      <h1>Undergraduate</h1>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {People_bd}
      </div>
      <h1>Previous lab members</h1>
      <div className="grids small" style={{ marginBottom: "32px" }}>
        {prevPeople}
      </div>
    </Layout>
  );
};

export default PeoplePage;
export const pageQuery = graphql`
  query peoplePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { path: { regex: "/people/" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            metaDescription
            position
            endYear
          }
        }
      }
    }
  }
`;
