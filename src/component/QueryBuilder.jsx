import React, { useState, useEffect } from 'react';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SaveQueryButton from './QuerySaver';
import { CSVLink } from "react-csv";
import Papa from 'papaparse';

// const fields = [
//   { name: 'carriername', label: 'Carrier Name' },
//   { name: 'origin', label: 'Origin' },
//   { name: 'destination', label: 'Destination' },
//   { name: 'mode', label: 'Mode' },
//   { name: 'routeId', label: 'Route Id' },
//   { name: 'rateId', label: 'Rate Id' },
//   { name: 'mode', label: 'Mode' },
// ];

const NewQueryBuilder = () => {
  const [query, setQuery] = useState({
    combinator: 'and',
    rules: [
      { field: '', operator: '=', value: '' },
    ],
  });
  const [formattedQuery, setFormattedQuery] = useState(formatQuery(query, 'sql'));
  const [tableName, setTableName] = useState();
  const [columnName, setColumnName] = useState();
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableNames, setTableNames] = useState([]);
  const [columnNames, setColumnNames] = useState([]);
  const [fields, setFields] = useState([]); 
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [databaseName, setDatabaseName] = useState('');
  const [queryDescription, setQueryDescription] = useState('');
  const [finalQuery, setFinalQuery] = useState('');
  const [finaltable, setFinalTable] = useState('');
  const [csvData, setCsvData] = useState([]);

  // const notify = () => toast("Query Executed Successfully!");

  const runCustomQuery = async (sql) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/customquery/execute', { sql });
      const result = response.data;
      //console.log(result);
        // If the query is not 'show tables' or 'describe'or 'select database()' update the result state
      if (!sql.toLowerCase().includes('show tables') && !sql.toLowerCase().includes('describe') && !sql.toLowerCase().includes('database()')) setResult(result);

      // If the query is 'show tables', update the tableNames state
      if (sql.toLowerCase().includes('show tables')) setTableNames(result);  

      // If the query is 'describe', update the columnNames state
      if (sql.toLowerCase().includes('describe')) {
        console.log(result);
        setColumnNames(result.map((column) => column.Field));
        const fields = result.map((column) => ({ name: column.Field, label: column.Field }));
        setFields(fields);
      }

        // If the query is 'select database()', update the databasename state
        if (sql.toLowerCase().includes('database()')) {
            setDatabaseName(result[0]['database()']);
            //console.log(databasename);
        }


      if (sql.toLowerCase().includes('select') && !sql.toLowerCase().includes('database()')) {
        if (result.length > 0) {
          toast.success("Query Executed Successfully!", {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
            toast.warn("No results found!", {
                position: toast.POSITION.TOP_CENTER
            });
            }
    }
    } catch (err) {
      console.log(err);
        // toast("Query Execution Failed!");
        if (err.response && err.response.status === 500) {
            toast.error("Please check your query and try again!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    } finally {
      setLoading(false);
    }
  };

  const handleQueryChange = (q) => {
    setQuery(q);
    setFormattedQuery(formatQuery(q, 'sql'));
  };

  const handleTableChange = async (t) => {
    const selectedTable = t.target.value;
    setTableName(selectedTable);
    //console.log(selectedTable);
    // Fetch column names for the selected table
    // console.log("hello"+runCustomQuery(`describe ${selectedTable}`));
    //runCustomQuery(`describe ${selectedTable}`)
    try {
        setLoading(true);
        // console.log("hello "+selectedTable);
        const response = await runCustomQuery(`describe ${selectedTable}`);
        // console.lo//g(response);
        const columns = response.data.map((column) => column.Field);
        //console.log("are you there?");
        setColumnNames(columns);
        const fields = result.map((column) => ({ name: column.Field, label: column.Field }));
        setFields(fields);
    } catch (err) {
        console.error(err);
    } finally {
        setLoading(false);
    }
  };

  const handleColumnChange = (c) => {
    const selectedColumn = c.target.value;
    // setColumnName(selectedColumn);
    if (selectedColumns.includes(selectedColumn)) {
        setSelectedColumns(selectedColumns.filter((col) => col !== selectedColumn));
      } else {
        setSelectedColumns([...selectedColumns, selectedColumn]);
      }
      console.log(selectedColumns);
  };

  const handleExecuteQuery = () => {
    let formattedQuery1 = formattedQuery.substring(1, formattedQuery.length - 1);
    const selectedColumnString = selectedColumns.join(', ');
    formattedQuery1 = `select ${selectedColumnString} from ${tableName} where ${formattedQuery1}`;
    setFinalTable(tableName);
    console.log(finaltable);
    console.log(formattedQuery1);
    runCustomQuery(formattedQuery1);
    setFinalQuery(formattedQuery1);
    // console.log(finalQuery);
    // empty the selectedColumns state
    setSelectedColumns([]);
  };

  useEffect(() => {
    setCsvData(result);
  }, [result]);

  const handleDownloadCSV = () => {
    const csvContent = Papa.unparse(csvData);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download','result.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    // Initial query execution on component mount
    // in order to avoid a constant ping to the backend, we only want to run the query when the formattedQuery, tableName, or columnName changes
    if (!loading && formattedQuery === '' && tableName === '' && columnName === '') {
        runCustomQuery('show tables');
        // console.log(runCustomQuery('select database()'));
      }
  }, [loading, formattedQuery, tableName, columnName]);

  useEffect(() => {
    // Fetch database name on component mount
    runCustomQuery('select database()');

  }, []);

  useEffect(() => {
    // Fetch table names on component mount
    runCustomQuery('show tables');

  }, []);

  return (
    <div>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            draggable
            theme="colored"
         />
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

      <label htmlFor="columnName">Select Columns:</label>
      <div>
        {columnNames.map((columnName) => (
          <div key={columnName}>
            <input
              type="checkbox"
              id={columnName}
              value={columnName}
              checked={selectedColumns.includes(columnName)}
              onChange={handleColumnChange}
            />
            <label htmlFor={columnName}>{columnName}</label>
          </div>
        ))}
      </div>


      <QueryBuilder fields={fields} query={query} onQueryChange={handleQueryChange} />

      <button onClick={handleExecuteQuery}>Execute Query</button>

      <SaveQueryButton
        formattedQuery={finalQuery}
        queryDescription={queryDescription}
        databasename={databaseName}
        table_name={finaltable}
      />

      <input type="text" value={queryDescription} onChange={(e) => setQueryDescription(e.target.value)} placeholder="Query Description" />

        {/* input field to take query description */}

      {loading && <p>Loading...</p>}
      {result.length > 0 && (
                <div>
                  <button onClick={handleDownloadCSV}>Download CSV</button>
                  <table>
                    {/* ... Your existing code for displaying the table ... */}
                  </table>
                </div>
              )}
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
