import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const VideoPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section mainContainer">
      <div className="container">
        <div className="columns">
          <div className="content column">
            <h2>{title}</h2>
            <PageContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

VideoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const VideoPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <VideoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

VideoPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default VideoPage;

export const VideoPageQuery = graphql`
  query VideoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
