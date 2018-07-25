import React, { Component } from 'react';
import { BounceLoader } from 'halogenium';

class Loader extends Component {
  render() {
    return (
      <BounceLoader color="#1e90ff" size="8rem" />
    );
  }
}

export default Loader;