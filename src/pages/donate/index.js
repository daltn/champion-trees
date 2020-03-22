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
              <br />
              Sustainable Markets Foundation
              <br /> C/O Gathering Growth
              <br /> 45 West 36th Street, 6th Floor
              <br />
              New York, NY 10018-7635
            </p>
            <p>
              If you’d like to wire money, you can find information to do so{' '}
              <Link to="/donate/wire" title="Logo">
                here.
              </Link>
            </p>
            <p>
              To donate via Paypal:
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
                  src={donateButton}
                  border="0"
                  name="submit"
                  title="PayPal button"
                  alt="Donate button"
                />
              </form>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Donate;
