import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="idxContainer">
        <div className="columns is-multiline" id="postContainer">
          {posts &&
            posts.map(({ node: post }) => (
              <div className="is-parent column is-half" key={post.id}>
                <article>
                  <p>
                    <span className="is-block">{post.frontmatter.date}</span>
                    <Link
                      style={{ color: '#2b2523' }}
                      className="has-text-weight-bold"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <p>
                    Common Name:
                    <br />
                    {post.frontmatter.common_name}
                    <br />
                  </p>
                </article>
                <Img
                  fluid={post.frontmatter.image1.image.childImageSharp.fluid}
                  alt={post.frontmatter.image1.alt}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                common_name
                date(formatString: "MM-DD-YYYY")
                photographed
                image1 {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 900, quality: 92) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
