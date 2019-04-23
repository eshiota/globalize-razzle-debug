import React from 'react';
import './Home.css';

const Globalize = require("globalize");

class Home extends React.Component {
  render() {
    const numberFormatter = Globalize.numberFormatter({ minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
      <div className="Home">
        <div className="Home-header">
          <h2>Globalize example</h2>
        </div>
        <p className="Home-intro">
          This is coming from Globalize: {numberFormatter(1234.345)}
        </p>
      </div>
    );
  }
}

export default Home;
