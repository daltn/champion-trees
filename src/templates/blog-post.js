import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  common_name,
  tags,
  title,
  helmet,
  location,
  crowned,
  photographed,
  circumference,
  height,
  crown_spread,
  total_af_points,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-6 ">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              National Champion:
              <br />
              {title}
            </h1>
            <p>
              <strong>Common Name:</strong> {common_name}
              {location}
              {crowned}
              {photographed}
              {circumference}
              {height}
              {crown_spread}
              {total_af_points}
            </p>
          </div>
          <div className="column is-6 ">
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  common_name: PropTypes.string,
  location: PropTypes.string,
  crowned: PropTypes.string,
  photographed: PropTypes.string,
  circumference: PropTypes.string,
  height: PropTypes.string,
  crown_spread: PropTypes.string,
  total_af_points: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.common_name}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        common_name={post.frontmatter.common_name}
        location={post.frontmatter.location}
        crowned={post.frontmatter.crowned}
        photographed={post.frontmatter.photographed}
        circumference={post.frontmatter.circumference}
        height={post.frontmatter.height}
        crown_spread={post.frontmatter.crown_spread}
        total_af_points={post.frontmatter.total_af_points}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        common_name
        tags
        location
        crowned
        photographed
        circumference
        height
        crown_spread
        total_af_points
        image1 {
          alt
        }
        image2 {
          alt
        }
      }
    }
  }
`;
