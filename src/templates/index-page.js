import React from 'react';
import Layout from '../components/Layout';

export const IndexPageTemplate = () => (
  <div>
    <section className="section mainContainer">
      <div className="container" />
      <h1>
        Working to visually preserve the legacy of significant trees and forest
        in the United States.
      </h1>
      <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}>
        <iframe
          src="https://player.vimeo.com/video/409899424"
          style={{
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
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
