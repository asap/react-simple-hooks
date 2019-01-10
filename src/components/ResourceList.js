import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${resource}`,
    );

    setResources(response.data);
  };

  useEffect(
    () => {
      fetchResource(resource);
    },
    [resource],
  );

  return <div>{resources.length}</div>;
};

export default ResourceList;
