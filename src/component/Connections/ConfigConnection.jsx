import React, { useState } from 'react';
import axios from 'axios';
import '../../designs/ConfigConnection.css';
// this component is used to configure the datasource. It takes in the url, username, password and databasename as input and sends a POST request to the backend.

const ConfigConnection = () => {
    const [url, setUrl] = useState('');
  const [config, setConfig] = useState({
    url: '',
    username: '',
    password: '',
    databasename: '',
  });

  const handleInputChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value }); // this line basically says, "set the state of config to be the current state of config, but with the value of the input field that was changed"
  };

  const handleConnection = async () => {
    const concatenatedString = `${config.url}/${config.databasename}`;
    setUrl(concatenatedString);
    console.log(url);
    // e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/connection/configure', config);
      console.log('Datasource configured successfully');
    } catch (error) {
      console.error('Error configuring datasource:', error.message);
    }
  };

  const handleSaveDetails = async () => {
    // Add logic to save details differently, e.g., with a different API endpoint
    try {
      await axios.post('http://localhost:8080/api/connection/save', {
        url: url,
        username: config.username,
        password: config.password,
      });
      console.log('Details saved successfully');
    } catch (error) {
      console.error('Error saving details:', error.message);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label className="label">Name:</label>
        <input
          className="input"
          type="text"
          name="databasename"
          value={config.databasename}
          onChange={handleInputChange}
        />

        <label className="label">URL:</label>
        <input
          className="input"
          type="text"
          name="url"
          value={config.url}
          onChange={handleInputChange}
        />

        <label className="label">Username:</label>
        <input
          className="input"
          type="text"
          name="username"
          value={config.username}
          onChange={handleInputChange}
        />

        <label className="label">Password:</label>
        <input
          className="input"
          type="password"
          name="password"
          value={config.password}
          onChange={handleInputChange}
        />

        <button className="button" onClick={handleConnection}>
          Configure Datasource
        </button>
        <button className="button" onClick={handleSaveDetails}>
          Save Details
        </button>
      </form>
    </div>
  );
};

export default ConfigConnection;
