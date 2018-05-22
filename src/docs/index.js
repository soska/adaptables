import React from 'react';
import { render } from 'react-dom';
import Adaptable from '../../lib';
import './styles.css';

let data = [];

if (process.env.NODE_ENV !== 'production') {
  data = require('./data').default;
}

const apiEndpoint = 'https://api.github.com/search/repositories?q=react';

class DemoApp extends React.Component {
  state = {
    data: data,
    loading: false,
  };

  componentWillMount() {
    if (!this.state.data.length) {
      this.getData();
    }
  }

  getData() {
    this.setState({ loading: true });
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch(apiEndpoint, { headers })
      .then(response => response.json())
      .then(json => this.setState({ data: json.items || [], loading: false }))
      .catch(err => {
        console.log('ERR', err);
      });
  }

  getTableCells() {
    return {
      Id: item => <span className="id-cell">{item.id}</span>,
      Name: item => (
        <div>
          <a href={item.html_url}>{item.name}</a>
        </div>
      ),
      Description: item => item.description,
      Homepage: {
        className: 'homepage',
        header: 'Project homepage',
        render: item =>
          item.homepage ? (
            <a href={item.homepage}>{item.homepage}</a>
          ) : (
            <span className={'na-cell'}>N/A</span>
          ),
      },
    };
  }

  getCompactCellsLayout() {
    return [
      [{ key: 'Name', grow: 1 }, { key: 'Id', align: 'right' }],
      [{ key: 'Description' }],
      [{ key: 'Homepage' }],
    ];
  }

  renderLoader = ({ label }) => {
    return (
      <div className={'my-custom-loader'}>
        <div className={'my-custom-loader__inner'}>
          <span className={'my-custom-loader__ball'} />
          <span>{label}</span>
        </div>
      </div>
    );
  };

  handleRowClick = (item, newWindow) => {
    if (newWindow) {
      window.open(item.html_url);
    } else {
      if (confirm('Open repository and leave this demo?')) {
        window.location = item.html_url;
      }
    }
  };

  render() {
    return (
      <div className="demo">
        <div className="demo-header">
          <h1>Responsive Tables</h1>
        </div>
        <p className="demo-info">
          This is a demo built with{' '}
          <a href="https://github.com/soska/adaptables">Adaptables</a>. Source
          code for this demo{' '}
          <a href="https://github.com/soska/adaptables/blob/master/src/docs/index.jsx">
            is here
          </a>.
        </p>
        <Adaptable
          data={this.state.data}
          cells={this.getTableCells()}
          loading={this.state.loading}
          compactTableCellsLayout={this.getCompactCellsLayout()}
          onRowClick={this.handleRowClick}
          renderLoader={this.renderLoader}
        />
        <p className="demo-footer">Sample data is provided by Github's API.</p>
      </div>
    );
  }
}

render(<DemoApp />, document.getElementById('app'));
