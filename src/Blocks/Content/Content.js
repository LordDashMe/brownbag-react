import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <h1>Hell World! LordDashMe</h1>
        <div className="App-content-inner">
          <table className="App-content-inner-table">
            <tr>
              <th width="200">Functions</th>
              <th width="400">Details</th>
            </tr>
            <tr>
              <td>test(...)</td>
              <td>Lorem ipsum testing paragraph only.</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Content;