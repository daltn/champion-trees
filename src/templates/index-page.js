import React from 'react';
import Layout from '../components/Layout';
import ContactCard from '../components/ContactCard.js';

export const IndexPageTemplate = () => (
  <div>
    <section className="section mainContainer" id="idx">
      <div className="container" style={{ marginLeft: `300px` }} />
      <h1 className="idx-title">
        Working to visually preserve the legacy of significant trees and forests
        in the United States.
      </h1>
      <div
        style={{
          padding: `56.25% 0 0 0`,
          position: `relative`,
        }}
      >
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
      <ContactCard />
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
