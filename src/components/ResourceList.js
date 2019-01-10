import axios from 'axios';
import React from 'react';

class ResourceList extends React.Component {
  state = { resources: [] };

  fetchResource() {
    return axios.get(
      `http://jsonplaceholder.typicode.com/${this.props.resource}`,
    );
  }

  async componentDidMount() {
    const response = await this.fetchResource();

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await this.fetchResource();

      this.setState({ resources: response.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
