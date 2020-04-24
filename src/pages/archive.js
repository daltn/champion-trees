import React from 'react';
import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

const ArchivePage = () => {
  return (
    <Layout>
      <div>
        <section className="section mainContainer">
          <div className="container">
            <BlogRoll />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ArchivePage;
