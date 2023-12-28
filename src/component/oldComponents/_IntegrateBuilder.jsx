// MyqQueryBuilder.js
import React, { useState } from 'react';
import MyQueryBuilder from './MyQueryBuilder';
import CustomQuery from './CustomQuery';

const MyqQueryBuilder = () => {
  const fields = [
    { name: 'carriername', label: 'Carrier Name' },
    { name: 'origin', label: 'Origin' },
    { name: 'destination', label: 'Destination' },
    { name: 'mode', label: 'Mode' },
    { name: 'routeId', label: 'Route Id' },
    { name: 'rateId', label: 'Rate Id' },
    { name: 'mode', label: 'Mode' },
  ];

  const initialQuery = {
    combinator: 'and',
    rules: [{ field: 'carriername', operator: '=', value: 'DHL' }],
  };

  const [formattedQuery, setFormattedQuery] = useState('');

  const handleQueryChange = (q, formattedQ) => {
    setFormattedQuery(formattedQ);
  };

  const [tableName, setTableName] = useState('carrier');

  const handleTableChange = (event) => {
    const selectedTable = event.target.value;
    setTableName(selectedTable);
  };

  const runCustomQuery = async (sql) => {
    try {
      // ... (your existing custom query logic)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <label htmlFor="tableName">Select Table:</label>
      <select id="tableName" value={tableName} onChange={handleTableChange}>
        {tableNames.map((tableName) => (
          <option key={tableName} value={tableName}>
            {tableName}
          </option>
        ))}
      </select>

      <MyQueryBuilder
        fields={fields}
        initialQuery={initialQuery}
        onQueryChange={handleQueryChange}
      />

      <h4>Selected Table: {tableName}</h4>

      <CustomQuery formattedQuery={formattedQuery} runCustomQuery={runCustomQuery} />
    </div>
  );
};

export default MyqQueryBuilder;
