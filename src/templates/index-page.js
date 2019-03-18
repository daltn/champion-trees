import React from 'react';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';
import gigan from '../img/gigantea.jpg';

export const IndexPageTemplate = () => (
  <div>
    <section className="section">
      <div className="container">
        <BlogRoll />
      </div>
    </section>
    <img src={gigan} alt="index-tree" id="index" />
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
