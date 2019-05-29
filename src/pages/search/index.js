import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Search from '../../components/Search';

export default class SearchIndexPage extends Component {
  render() {
    return (
      <Layout>
        <section className="section mainContainer">
          <div className="container">
            <div className="columns">
              <Search />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
