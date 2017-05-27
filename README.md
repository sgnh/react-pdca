# react-pdca [![Build Status](https://circleci.com/gh/sgnh/react-pdca.svg?style=shield)](https://circleci.com/gh/sgnh/react-pdca/tree/master)
![PDCA](https://github.com/sgnh/react-pdca/raw/master/docs/pdca.png "PDCA")

## Installation
```
npm install --save react-pdca
```

## Example
```javascript
import React, { Component } from 'react';
import PDCA from 'react-pdca';

class PDCAContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      planDisabled: false,
      doDisabled: false,
      checkDisabled: false,
      actDisabled: false,
    }
  }
  
  render() {
    return (
      <PDCA
        height="300px"
        width="300px"

        planDisabled={this.state.planDisabled}
        doDisabled={this.state.doDisabled}
        checkDisabled={this.state.checkDisabled}
        actDisabled={this.state.actDisabled}
        
        onPlanClick={() => this.setState({ planDisabled: false, doDisabled: true, checkDisabled: true, actDisabled: true })}
        onDoClick={() => this.setState({ planDisabled: false, doDisabled: false, checkDisabled: true, actDisabled: true })}
        onCheckClick={() => this.setState({ planDisabled: false, doDisabled: false, checkDisabled: false, actDisabled: true })}
        onActClick={() => this.setState({ planDisabled: false, doDisabled: false, checkDisabled: false, actDisabled: false })}
      />
    )
  }
}

export default PDCAContainer;
```
