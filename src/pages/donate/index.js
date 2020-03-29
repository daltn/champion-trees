import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';
import donateButton from '../../img/donate.svg';

const Donate = () => (
  <Layout>
    <section className="section mainContainer">
      <div className="container">
        <div className="columns">
          <div className="content column is-8">
            <h1>Donate Today</h1>
            <p>
              All donations are tax deductible through Gathering Growth’s fiscal
              sponsor Sustainable Markets Foundation.
            </p>
            <div className="flex-col">
              <p style={{ margin: `0 15px 0 0` }}>To donate via Paypal</p>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="8UNNM9P2SGX3G"
                />
                <input
                  type="image"
                  className="donateButton"
                  style={{ marginTop: `30px;` }}
                  src={donateButton}
                  border="0"
                  name="submit"
                  title="PayPal button"
                  alt="Donate button"
                />
              </form>
            </div>

            <p>
              To donate by check please make checks payable to Sustainable
              Markets Foundation with Gathering Growth in the memo.
            </p>
            <p>Checks can be mailed to:</p>
            <p style={{ fontSize: `0.9rem` }}>
              Sustainable Markets Foundation
              <br /> C/O Gathering Growth
              <br /> 45 West 36th Street, 6th Floor
              <br />
              New York, NY 10018-7635
            </p>
            <p>
              To donate via wire transfer, please click{' '}
              <Link
                style={{ textDecoration: 'underline' }}
                to="/donate/wire"
                title="Logo"
              >
                here
              </Link>{' '}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Donate;
