import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';

const Donate = () => (
  <Layout>
    <section className="section mainContainer">
      <div className="container">
        <div className="columns">
          <div className="content column is-6">
            <h1>Donation</h1>
            <p>
              All donations are tax deductible through Gathering Growth’s fiscal
              sponsor Sustainable Markets Foundation.
            </p>
            <p>
              To pay by check, please make checks payable to Sustainable Markets
              Foundation with Gathering Growth in the memo.
            </p>
            <p>
              Checks can be mailed to:
              <br />
              Sustainable Markets Foundation C/O
              <br />
              Gathering Growth 45 West 36th Street, 6th Floor
              <br />
              New York, NY 10018-7635
            </p>
            <p>
              If you’d like to wire money, you can find information to do so{' '}
              <Link to="/donate/wire" title="Logo">
                here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Donate;
