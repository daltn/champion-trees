import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline" id="postContainer">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-half" key={post.id}>
              <article>
                <p>
                  <span className="is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                  <Link className="title is-size-5" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </p>
                <p>
                  Common Name:
                  <br />
                  {post.frontmatter.common_name}
                  <br />
                </p>
                <p>{post.frontmatter.photographed}</p>
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
          sort: { order: ASC, fields: [frontmatter___photographed] }
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
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
