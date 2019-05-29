import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  common_name,
  title_type,
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
        <div className="columns is-multiline">
          <div className="column is-6">
            <a
              href={image1.image.childImageSharp.fluid.src}
              target="blank"
              rel="noopener noreferrer"
            >
              <Img
                fluid={image1.image.childImageSharp.fluid}
                alt={image1.alt}
              />
            </a>

            <div className="has-text-weight-bold">
              {title_type}
              {` `}
              {title}
            </div>
            <p>
              Common Name: {common_name} <br />
              Location: {location} <br />
              Year Crowned: {crowned} <br />
              Year Photographed: {photographed} <br />
              - <br />
              Circumference: {circumference} <br />
              Height: {height} <br />
              Avg Crown Spread: {crown_spread} <br />
              Total AF Points: {total_af_points} <br />
            </p>
          </div>
          <div className="column is-6">
            <a
              href={image2.image.childImageSharp.fluid.src}
              target="blank"
              rel="noopener noreferrer"
            >
              <Img
                fluid={image2.image.childImageSharp.fluid}
                alt={image2.alt}
              />
            </a>
            <PostContent content={content} />
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
  title_type: PropTypes.string,
  location: PropTypes.string,
  crowned: PropTypes.string,
  photographed: PropTypes.string,
  circumference: PropTypes.string,
  height: PropTypes.string,
  crown_spread: PropTypes.string,
  total_af_points: PropTypes.string,
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
        title_type={post.frontmatter.title_type}
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
        title_type
        title
        common_name
        location
        crowned
        photographed
        circumference
        height
        crown_spread
        total_af_points
        image1 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image2 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
