import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';
import { useState } from 'react';

const fields = [
  { name: 'carrierName', label: 'Carrier Name' },
  { name: 'origin', label: 'Origin' },
  { name: 'destination', label: 'Destination' },
  { name: 'mode', label: 'Mode' },
  {name: 'routeId', label: 'Route Id'},
  {name: 'rateId', label: 'Rate Id'},
  {name: 'mode', label: 'Mode'},
];

const tableNames = ['rates', 'routes', 'carriers', 'vessels', 'ports', 'locations'];

const initialQuery = { //what the initial display output on the front end will look like
  combinator: 'and',
  rules: [
    { field: 'carrierName', operator: '=', value: 'COSCO' },
  ],
};

const MyqQueryBuilder = () => {
  const [query, setQuery] = useState(initialQuery); //query represents the initial state of the query and is initialized with the initialQuery object
  const [formattedQuery, setFormattedQuery] = useState(formatQuery(query, 'sql')); // this code is for query to be displayed in sql format
  const [tableName, setTableName] = useState('rates'); // this is the initial state of the table name and is initialized with the rates table
  const handleQueryChange = (q) => { 
    setQuery(q);
    setFormattedQuery(formatQuery(q, 'sql'));
    // handleQueryChange is a function that takes in a query and updates the state of the query and formattedQuery using the setQuery and setFormattedQuery functions
  };
  const handleTableChange = (t) => {
    const selectedTable = t.target.value;
    setTableName(selectedTable);
  }
  console.log(tableName);
  console.log(formattedQuery);
  // remove braces from formattedQuery both from beginning and end
  let formattedQuery1 = formattedQuery.substring(1);
  formattedQuery1 = formattedQuery1.substring(0, formattedQuery1.length - 1);
  // add the table name to the formattedQuery1 string in the format "select * from <table_name> where <formattedQuery1>"
  formattedQuery1 = `select * from ${tableName} where ${formattedQuery1}`;
  console.log(formattedQuery1);

  /* add a small drop down selector to select the table name and then append the table name to the formattedQuery1 string in the format "select * from <table_name> where <formattedQuery1>"
  // this will be the final query that will be sent to the backend
  // the table name will be selected from a drop down menu and will be appended to the formattedQuery1 string
  // the final query will be sent to the backend and the results will be displayed on the front end*/




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

      <QueryBuilder fields={fields} query={query} onQueryChange={handleQueryChange} />
      <h4>Selected Table: {tableName}</h4>
      <h4>Query</h4>
      <pre>
        <code>{formattedQuery1}</code>
      </pre>
    </div>
  );
};

export default MyqQueryBuilder;