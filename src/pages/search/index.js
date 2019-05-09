import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Search from '../../components/Search';

export default class SearchIndexPage extends Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <Search />
          </div>
        </section>
      </Layout>
    );
  }
}
