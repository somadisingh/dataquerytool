import React, { useState, useEffect } from 'react';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewQueryBuilder = () => {
//   const [query, setQuery] = useState({
//     combinator: 'and',
//     rules: [
//       { field: '', operator: '=', value: '' },
//     ],
//   });
  //const [formattedQuery, setFormattedQuery] = useState(formatQuery(query, 'sql'));
  const [tableName, setTableName] = useState();
  const [columnName, setColumnName] = useState();
  const [result, setResult] = useState([]);
  const [nresult, setNResult] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [tableNames, setTableNames] = useState([]);
  const [columnNames, setColumnNames] = useState([]);
  const [fields, setFields] = useState([]); 
  const [selectedColumns, setSelectedColumns] = useState([]);
  //const [databaseName, setDatabaseName] = useState('');
  //const [queryDescription, setQueryDescription] = useState('');
  const [finalQuery, setFinalQuery] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);


  useEffect(() => {
    // Fetch the saved query table on loading the page
    runCustomQuery('select * from save_query');

  }, []);

  const runCustomQuery = async (sql) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/customquery/execute', { sql });
      const result = response.data;
      setResult(result);
      //console.log(result);
        // If the query is not 'show tables' or 'describe'or 'select database()' update the result state
      if (!sql.toLowerCase().includes('show tables') && !sql.toLowerCase().includes('describe') && !sql.toLowerCase().includes('database()')) setResult(result);

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

  const displayResults = async (sql) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/customquery/execute', { sql });
      const nresult = response.data;
      setNResult(nresult);
      console.log(nresult);
        // If the query is not 'show tables' or 'describe'or 'select database()' update the result state
      if (!sql.toLowerCase().includes('show tables') && !sql.toLowerCase().includes('describe') && !sql.toLowerCase().includes('database()')) setNResult(nresult);

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

//   const handleQueryChange = (q) => {
//     setQuery(q);
//     setFormattedQuery(formatQuery(q, 'sql'));
//   };

  const handleRadioChange = (selectedRow) => {
    setSelectedRow(selectedRow);
    console.log(selectedRow);
    const presetQuery = selectedRow.query;
    if (presetQuery) {
        //setQuery(presetQuery);
        //setFormattedQuery(formatQuery(presetQuery, 'sql'));
        console.log(presetQuery);
        let value = presetQuery.substring(presetQuery.indexOf('from') + 5, presetQuery.indexOf('where') - 1);
        console.log(value);
        setFinalQuery(presetQuery);
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

//   const handleExecuteQuery = () => {
//     let formattedQuery1 = formattedQuery.substring(1, formattedQuery.length - 1);
//     const selectedColumnString = selectedColumns.join(', ');
//     formattedQuery1 = `select ${selectedColumnString} from ${tableName} where ${formattedQuery1}`;
//     console.log(formattedQuery1);
//     runCustomQuery(formattedQuery1);
//     setFinalQuery(formattedQuery1);
//     // console.log(finalQuery);
//     // empty the selectedColumns state
//     setSelectedColumns([]);

//   };

  const handleRunButtonClick = () => {
    if (selectedRow !== null) {
        const selectedQuery = result[0].query;
        // console.log(selectedQuery);
        // need to update the columns also alongwith the query
        //setFinalQuery(selectedQuery);
        displayResults(finalQuery);
    }};

    // useEffect(() => { // the reason to use this hook is to avoid the error of finalQuery being empty
    //     if (finalQuery !== '') {
    //         console.log(finalQuery);
    //         displayResults(finalQuery);
    //     }
    // }
    // , [finalQuery]);

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

      {/* <label htmlFor="columnName">Select Columns:</label>
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
      </div> */}


      {/* <QueryBuilder fields={fields} query={query} onQueryChange={handleQueryChange} /> */}

      {/*<button onClick={handleExecuteQuery}>Execute Query</button>*/}

        {/* input field to take query description */}

      {loading && <p>Loading...</p>}

      {result.length > 0 && (
        <div>
          <h4>Result</h4>
          <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Select</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {result.map((row, index) => (
                <tr key={index} style={{ border: '1px solid #ddd' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <input
                      type="radio"
                      name="selectedRow"
                      // checked={selectedRow === index}
                      onChange={() => handleRadioChange(row)}
                    />
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedRow !== null && (
        <button onClick={handleRunButtonClick}>Run</button>
      )}

{nresult.length > 0 && (
        <div>
          <h4>Result</h4>
          <table>
            <thead>
              <tr>
                {Object.keys(nresult[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nresult.map((row, index) => (
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