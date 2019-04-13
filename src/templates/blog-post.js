import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
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
  image1,
  image2,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-4 ">
            <Img fluid={image2.image.childImageSharp.fluid} alt={image2.alt} />
            <div className="has-text-weight-bold">
              National Champion: {title}
            </div>
            <p>
              Common Name: {common_name} <br />
              Location: {location} <br />
              Year crowned: {crowned} <br />
              Year photographed: {photographed} <br />
              - <br />
              Circumference: {circumference} <br />
              Height: {height} <br />
              Avg Crown Spread: {crown_spread} <br />
              Total AF Points: {total_af_points} <br />
            </p>
          </div>
          <div className="column is-8 ">
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
  image1: PropTypes.object,
  image2: PropTypes.object,
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
        image1={post.frontmatter.image1}
        image2={post.frontmatter.image2}
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
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
