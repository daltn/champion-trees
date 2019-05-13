import React from 'react';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = () => (
  <div>
    <section className="section">
      <div className="container">
        <BlogRoll />
        {console.log('👽 dev by https://pulse-code.com/')}
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
