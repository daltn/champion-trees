import React from 'react';
import Layout from '../../components/Layout';
import Search from '../../components/Search';

const Index = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Search</h2>
            <Search />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
