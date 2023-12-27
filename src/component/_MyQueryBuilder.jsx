import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';
import { useState } from 'react';
import axios from 'axios';

const fields = [ // this is hardcoded, so fetch column names from the table user selects (tbd)
  { name: 'carriername', label: 'Carrier Name' },
  { name: 'origin', label: 'Origin' },
  { name: 'destination', label: 'Destination' },
  { name: 'mode', label: 'Mode' },
  {name: 'routeId', label: 'Route Id'},
  {name: 'rateId', label: 'Rate Id'},
  {name: 'mode', label: 'Mode'},
];

const runCustomQuery = async(sql) => {
  try {
    const response = await axios.post('http://localhost:8080/api/customquery/execute', { sql });
        const result = response.data;
        // display the result on the front end
        console.log(result);
  }
  catch (err) {
    console.log(err);
  }
};

const tableNames = []; // need to fetch table names from db (tbd)
const columnNames = ['carriername', 'origin', 'destination', 'mode', 'routeid', 'rateid','*']; // need to fetch column names from db (tbd)

const initialQuery = { //what the initial display output on the front end will look like
  combinator: 'and',
  rules: [
    { field: 'carriername', operator: '=', value: 'DHL' },
  ],
};

const MyQueryBuilder = () => {
  const [query, setQuery] = useState(initialQuery); //query represents the initial state of the query and is initialized with the initialQuery object
  const [formattedQuery, setFormattedQuery] = useState(formatQuery(query, 'sql')); // this code is for query to be displayed in sql format
  const [tableName, setTableName] = useState('carrier'); // this is the initial state of the table name and is initialized with the rates table
  const [columnName, setColumnName] = useState('*'); // this is the initial state of the column name and is initialized with the carriername column
  const handleQueryChange = (q) => { 
    setQuery(q);
    setFormattedQuery(formatQuery(q, 'sql'));
    // handleQueryChange is a function that takes in a query and updates the state of the query and formattedQuery using the setQuery and setFormattedQuery functions
  };
  const handleTableChange = (t) => {
    const selectedTable = t.target.value;
    setTableName(selectedTable);
  }
  const handleColumnChange = (c) => {
    const selectedColumn = c.target.value;
    setColumnName(selectedColumn);
  }
  //console.log(formattedQuery);
  let formattedQuery1 = formattedQuery.substring(1, formattedQuery.length - 1);
  //console.log(formattedQuery1);
  formattedQuery1 = `select ${columnName} from ${tableName} where ${formattedQuery1}`;
  console.log(formattedQuery1);
  runCustomQuery(formattedQuery1);


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
      <label htmlFor="columnName">Select Column:</label>
      <select id="columnName" value={columnName} onChange={handleColumnChange}>
        {columnNames.map((columnName) => (
          <option key={columnName} value={columnName}>
            {columnName}
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

export default MyQueryBuilder;