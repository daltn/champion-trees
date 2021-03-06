import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

class BlogRoll extends Component {
  state = {
    hover: '',
  };

  hoverToggle = postId => {
    postId === this.state.hover
      ? this.setState({
          hover: '',
        })
      : this.setState({
          hover: postId,
        });
  };

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <div className="columns is-multiline" id="postContainer">
          {posts &&
            posts.map(({ node: post }) => (
              <Fragment key={post.id}>
                <div id="tree" className="column is-4">
                  <section>
                    <p>
                      <span className="is-block">{post.frontmatter.date}</span>
                      <Link
                        onMouseEnter={() => this.hoverToggle(post.id)}
                        onMouseLeave={() => this.hoverToggle(post.id)}
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
                  </section>
                  <div className="imageContainer">
                    <Img
                      imgStyle={{ paddingTop: `0px`, width: `45vw` }}
                      className={
                        this.state.hover === post.id ? 'idxImgHover' : 'idxImg'
                      }
                      fluid={
                        post.frontmatter.image1.image.childImageSharp.fluid
                      }
                      alt={post.frontmatter.image1.alt}
                    />
                  </div>
                </div>
              </Fragment>
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
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { in: ["blog-post"] } } }
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
                date(formatString: "YYYY-MM-DD")
                photographed
                image1 {
                  alt
                  image {
                    childImageSharp {
                      fluid(maxWidth: 1200, quality: 80) {
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
