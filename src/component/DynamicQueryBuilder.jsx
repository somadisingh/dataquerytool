import React, { useState, useEffect } from 'react';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';
import axios from 'axios';

const fields = [
  { name: 'carriername', label: 'Carrier Name' },
  { name: 'origin', label: 'Origin' },
  { name: 'destination', label: 'Destination' },
  { name: 'mode', label: 'Mode' },
  { name: 'routeId', label: 'Route Id' },
  { name: 'rateId', label: 'Rate Id' },
  { name: 'mode', label: 'Mode' },
];

const columnNames = ['carriername', 'origin', 'destination', 'mode', 'routeid', 'rateid', '*'];

const NewQueryBuilder = () => {
  const [query, setQuery] = useState({
    combinator: 'and',
    rules: [
      { field: 'carriername', operator: '=', value: 'DHL' },
    ],
  });
  const [formattedQuery, setFormattedQuery] = useState(formatQuery(query, 'sql'));
  const [tableName, setTableName] = useState('carrier');
  const [columnName, setColumnName] = useState('carriername');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableNames, setTableNames] = useState([]);

  const runCustomQuery = async (sql) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/customquery/execute', { sql });
      const result = response.data;
      console.log(result);
      setResult(result);

      // If the query is 'show tables', update the tableNames state
      if (sql.toLowerCase().includes('show tables')) {
        setTableNames(result);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleQueryChange = (q) => {
    setQuery(q);
    setFormattedQuery(formatQuery(q, 'sql'));
  };

  const handleTableChange = (t) => {
    const selectedTable = t.target.value;
    setTableName(selectedTable);
  };

  const handleColumnChange = (c) => {
    const selectedColumn = c.target.value;
    setColumnName(selectedColumn);
  };

  const handleExecuteQuery = () => {
    let formattedQuery1 = formattedQuery.substring(1, formattedQuery.length - 1);
    formattedQuery1 = `select ${columnName} from ${tableName} where ${formattedQuery1}`;
    console.log(formattedQuery1);
    runCustomQuery(formattedQuery1);
  };

  useEffect(() => {
    // Initial query execution on component mount (you can modify this behavior if needed)
    handleExecuteQuery();
  }, [formattedQuery, tableName, columnName]);

  useEffect(() => {
    // Fetch table names on component mount
    runCustomQuery('show tables');
  }, []);

  return (
    <div>
      <label htmlFor="tableName">Select Table:</label>
      <select id="tableName" value={tableName} onChange={handleTableChange}>
        {tableNames
          .filter(tableObject => !tableObject.Tables_in_reactql.includes('_'))
          .map((tableObject, index) => (
            <option key={index} value={tableObject.Tables_in_reactql}>
              {tableObject.Tables_in_reactql}
            </option>
          ))}
      </select>

      <label htmlFor="columnName">Select Column:</label>
      <select id="columnName" value={columnName} onChange={handleColumnChange}>
        {columnNames.map((columnName) => (
          <option key={columnName} value={columnName}>
            {columnName}
          </option>
        ))}
      </select>

      <QueryBuilder fields={fields} query={query} onQueryChange={handleQueryChange} />

      <button onClick={handleExecuteQuery}>Execute Query</button>

      {loading && <p>Loading...</p>}

      {result.length > 0 && (
        <div>
          <h4>Result</h4>
          <table>
            <thead>
              <tr>
                {Object.keys(result[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NewQueryBuilder;
