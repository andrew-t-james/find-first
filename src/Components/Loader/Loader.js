import React, { Component } from 'react';
import { ScaleLoader } from 'halogenium';

class Loader extends Component {
  render() {
    return (
      <ScaleLoader color="#1e90ff" height="4rem"  />
    );
  }
}

export default Loader;