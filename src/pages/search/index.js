import React from 'react';
import Layout from '../../components/Layout';
import Search from '../../components/Search';

const Index = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h2 className="title is-size-3 has-text-weight-bold">Search</h2>
            <Search />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
