import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/blog-index.jpg')`,
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    backgroundColor: '#333300',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  Archive
                </h1>
              </div>
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
