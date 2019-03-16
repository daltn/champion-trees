import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-one-third" key={post.id}>
              <article>
                <p>
                  <span className="subtitle is-size-6 is-block">
                    {post.frontmatter.date}
                  </span>
                  <Link
                    className="title has-text-primary is-size-5"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                </p>
                <p>
                  Common Name:
                  <br />
                  {post.frontmatter.description}
                  <br />
                  <br />
                </p>
              </article>
            </div>
          ))}
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
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 80)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                date(formatString: "MM-DD-YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
