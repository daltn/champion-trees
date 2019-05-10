import React, { Component, Fragment } from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Index } from 'elasticlunr';

// Search component
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
    };
  }

  render() {
    return (
      <Fragment>
        <div className="content column is-2">
          <h2>Search</h2>
        </div>
        <div className="contentcolumn is-6">
          <input
            className="search"
            type="text"
            value={this.state.query}
            onChange={this.search}
          />
          <ul>
            {this.state.results
              .filter(page => page.common_name !== undefined)
              .map(page => (
                <li className="searchResult" key={page.id}>
                  {console.log({ page })}
                  <Link className="has-text-weight-bold" to={'/' + page.slug}>
                    {page.title}
                  </Link>
                  <p>
                    Common Name:
                    <br />
                    {page.common_name}
                    <br />
                    Location:
                    <br />
                    {page.location}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </Fragment>
    );
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    });
  };
}

export default () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => <Search searchIndex={data.siteSearchIndex.index} />}
  />
);
