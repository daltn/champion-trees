import React from 'react';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = () => (
  <div>
    <section className="section mainContainer">
      <div className="container">
        <BlogRoll />
      </div>
    </section>
  </div>
);

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
