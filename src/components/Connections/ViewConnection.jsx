import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SavedConnectionsTable = ({ savedConnections, onConnect }) => {
  return (
    <div>
      <h2>Saved Connections</h2>
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {savedConnections.map((connection) => (
            <tr key={connection.url}>
              <td>{connection.url}</td>
              <td>
                <input
                  type="radio"
                  name="selectedConnection"
                  onChange={() => onConnect(connection)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ViewConnections = () => {
  const [savedConnections, setSavedConnections] = useState([]);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [newUrl, setNewUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [databasename, setDatabasename] = useState('');

  // Fetch saved connections on component mount
  useEffect(() => {
    runCustomQuery('select * from connection_details');
  }, []);

  useEffect(() => {
    // This useEffect will be triggered when selectedConnection changes
    if (selectedConnection) {
      console.log('Selected Connection:', selectedConnection);
      setNewUrl(selectedConnection.url.substring(0, 22));
      setUsername(selectedConnection.username);
      setPassword(selectedConnection.password);
      setDatabasename(selectedConnection.url.substring(28));
    }
  }, [selectedConnection]);

  const runCustomQuery = async (sql) => {
    try {
      const response = await axios.post('http://localhost:8080/api/customquery/execute', { sql });
      const result = response.data;
      setSavedConnections(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleConnect = async () => {
    if (selectedConnection) {
      console.log(`Connecting to ${selectedConnection.url}`);
      console.log('Payload:', {
        url: newUrl,
        username: username,
        password: password,
        databasename: databasename,
      });

      try {
        // Now you can use newUrl, username, password, and databasename in your API call
        await axios.post('http://localhost:8080/api/connection/configure', {
          url: newUrl,
          username: username,
          password: password,
          databasename: databasename,
        });
        console.log('Datasource configured successfully');
      } catch (error) {
        console.error('Error configuring datasource:', error.message);
      }
    } else {
      console.warn('No connection selected.');
    }
  };

  return (
    <div>
      <SavedConnectionsTable savedConnections={savedConnections} onConnect={setSelectedConnection} />
      <div>
        <button onClick={handleConnect} disabled={!selectedConnection}>
          Connect
        </button>
      </div>
    </div>
  );
};

export default ViewConnections;
