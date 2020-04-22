import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import ContactCard from '../components/ContactCard';

export const InfoPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section mainContainer">
      <div className="container">
        <div className="columns">
          <div className="content column is-6">
            <h2>{title}</h2>
            <PageContent content={content} />
          </div>
        </div>
        <ContactCard />
      </div>
    </section>
  );
};

InfoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const InfoPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <InfoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

InfoPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default InfoPage;

export const InfoPageQuery = graphql`
  query InfoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
