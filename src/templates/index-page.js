import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import ContactCard from '../components/ContactCard.js';
import Content, { HTMLContent } from '../components/Content';

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section className="section mainContainer" id="idx">
        <h1 className="idx-title">{title}</h1>
        <PageContent content={content} />
        <ContactCard />
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const IndexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
