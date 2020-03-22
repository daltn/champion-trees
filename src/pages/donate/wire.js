import React from 'react';
import Layout from '../../components/Layout';

const Wire = () => (
  <Layout>
    <section className="section mainContainer">
      <div className="container">
        <div className="columns">
          <div className="content column is-8">
            <h1>Wire Info</h1>
            <table>
              <tbody>
                <tr>
                  <td>Name of Bank (Required):</td>
                  <td>HSBC USA, NA</td>
                </tr>
                <tr>
                  <td>Bank Address (Required):</td>
                  <td>
                    26 Broadway <br />
                    New York, NY 10004
                  </td>
                </tr>
                <tr>
                  <td>Account name (Required):</td>
                  <td>Sustainable Markets Foundation</td>
                </tr>
                <tr>
                  <td>Account number (Required):</td>
                  <td>705752267</td>
                </tr>
                <tr>
                  <td>Account Address:</td>
                  <td>
                    45 West 36th Street, 6th Floor <br />
                    New York, NY 10018-7635
                  </td>
                </tr>
                <tr>
                  <td>Bank ABA/Routing Number (USA only):</td>
                  <td>021001088</td>
                </tr>
                <tr>
                  <td>
                    BIC/Swift Code (Required for international wires only)
                  </td>
                  <td>MRMDUS33</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Wire;
