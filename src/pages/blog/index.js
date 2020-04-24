import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div>
            <div className="content">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Archive
              </h2>
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
