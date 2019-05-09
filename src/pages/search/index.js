import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Search from '../../components/Search';

export default class SearchIndexPage extends Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2>Search</h2>
            </div>
            <Search />
          </div>
        </section>
      </Layout>
    );
  }
}
