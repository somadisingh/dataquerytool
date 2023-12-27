import React, { useState, useEffect } from 'react';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SaveQueryButton from './QuerySaver';
import { CSVLink } from "react-csv";
import Papa from 'papaparse';

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

  const runCustomQuery = async (sql) => {
    /*
    This function is used to run a custom query. It takes in a sql string as a parameter and sends a POST request to the backend.
    The backend will then execute the query and return the result. The result is then set to the result state variable.
    It has several conditions to check for certain keywords in the query. If the query contains 'show tables', it will set the tableNames state variable to the result.
    If the query contains 'describe', it will set the columnNames state variable to the result. If the query contains 'database()', it will set the databaseName state variable to the result.
    Finally if the query contains 'select', it will set the result state variable to the result.
     */
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/customquery/execute', { sql });
      const result = response.data;
      if (!sql.toLowerCase().includes('show tables') && !sql.toLowerCase().includes('describe') && !sql.toLowerCase().includes('database()')) setResult(result);
      if (sql.toLowerCase().includes('show tables')) setTableNames(result);  
      if (sql.toLowerCase().includes('describe')) {
        setColumnNames(result.map((column) => column.Field));
        const fields = result.map((column) => ({ name: column.Field, label: column.Field }));
        setFields(fields);
      }
      if (sql.toLowerCase().includes('database()')) {
          setDatabaseName(result[0]['database()']);
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
    /*
    This function is used to handle the query change. It takes in a query object as a parameter and sets the query state variable to the query object.
    It also formats the query object and sets the formattedQuery state variable to the formatted query. This function is part of react-querybuilder.
     */
    setQuery(q);
    setFormattedQuery(formatQuery(q, 'sql'));
  };

  const handleTableChange = async (t) => {
    /*
    This function is used to handle the table change. It takes in a table object as a parameter and sets the tableName state variable to the table object.
    It also runs a custom query to describe the table and set the columnNames state variable to the result. It also sets the fields state variable to the result.
     */
    const selectedTable = t.target.value;
    setTableName(selectedTable);
    try {
        setLoading(true);
        const response = await runCustomQuery(`describe ${selectedTable}`);
        const columns = response.data.map((column) => column.Field);
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
    /*
    This function works in tandem with radio buttons to select columns. It takes in a column object as a parameter and sets the selectedColumns state variable to the column object.
    It also checks if the selectedColumns state variable includes the column object. If it does, it will filter the selectedColumns state variable to remove the column object.
    If it does not, it will add the column object to the selectedColumns state variable.
     */
    const selectedColumn = c.target.value;
    if (selectedColumns.includes(selectedColumn)) {
        setSelectedColumns(selectedColumns.filter((col) => col !== selectedColumn));
      } else {
        setSelectedColumns([...selectedColumns, selectedColumn]);
      }
  };

  const handleExecuteQuery = () => {
    /*
    This function edits the formattedQuery string to remove the brackets and then adds the selected columns and table name to the formattedQuery string.
    It then sets the finalTable state variable to the table name and the finalQuery state variable to the formattedQuery1 string. It then runs the custom query.
     */
    let formattedQuery1 = formattedQuery.substring(1, formattedQuery.length - 1);
    const selectedColumnString = selectedColumns.join(', ');
    formattedQuery1 = `select ${selectedColumnString} from ${tableName} where ${formattedQuery1}`;
    setFinalTable(tableName);
    console.log(formattedQuery1);
    runCustomQuery(formattedQuery1);
    setFinalQuery(formattedQuery1);
    setSelectedColumns([]);
  };

  useEffect(() => {
    // store result when its value changes
    setCsvData(result);
  }, [result]);

  const handleDownloadCSV = () => {
    /*
    This function is used to download the result of the query as a CSV file. It uses the PapaParse library to convert the result into a CSV file.
     */
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
    // in order to avoid a constant ping to the backend, we only want to run the query when the formattedQuery, tableName, or columnName changes
    if (!loading && formattedQuery === '' && tableName === '' && columnName === '') {
        runCustomQuery('show tables');
      }
  }, [loading, formattedQuery, tableName, columnName]);

  useEffect(() => {
    runCustomQuery('select database()');
  }, []);

  useEffect(() => {
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
