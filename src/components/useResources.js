import axios from 'axios';
import { useState, useEffect } from 'react';

const useResources = resource => {
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

  return resources;
}

export default useResources;
