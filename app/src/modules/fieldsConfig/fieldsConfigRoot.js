import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import fields from './fields';

class ConfigRoot extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route exact path={`${match.url}/`} component={fields} />
      </Switch>
    );
  }
}

export default ConfigRoot;
