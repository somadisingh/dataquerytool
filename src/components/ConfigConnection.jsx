import React, { useState } from 'react';
import axios from 'axios';

const DatasourceConfigForm = () => {
  const [config, setConfig] = useState({
    url: '',
    username: '',
    password: '',
    databasename: '',
  });

  const handleInputChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/connection/configure', config);
      console.log('Datasource configured successfully');
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error('Error configuring datasource:', error.message);
      // console.log(config);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="databasename" value={config.databasename} onChange={handleInputChange} />

      <label>URL:</label>
      <input type="text" name="url" value={config.url} onChange={handleInputChange} />

      <label>Username:</label>
      <input type="text" name="username" value={config.username} onChange={handleInputChange} />

      <label>Password:</label>
      <input type="password" name="password" value={config.password} onChange={handleInputChange} />

      <button type="submit">Configure Datasource</button>
    </form>
  );
};

export default DatasourceConfigForm;
