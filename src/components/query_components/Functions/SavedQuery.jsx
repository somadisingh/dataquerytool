import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSVLink } from "react-csv";
import Papa from 'papaparse';
import DownloadCSVButton from '../Buttons/DownloadCsv'; 
import '../designs/SavedQuery.css';

const SavedQuery = () => {

  const [result, setResult] = useState([]);
  const [nresult, setNResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [finalQuery, setFinalQuery] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [csvData, setCsvData] = useState([]);
  const [isEditingQuery, setIsEditingQuery] = useState(false);
  const [editedQuery, setEditedQuery] = useState('');


  useEffect(() => {
    runCustomQuery('select * from save_query');

  }, []);

  const runCustomQuery = async (sql) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/customquery/execute', { sql });
      const result = response.data;
      setResult(result);
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

  const displayResults = async (sql) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/customquery/execute', { sql });
      const nresult = response.data;
      if (nresult.length === 0) {
        toast.warn("No results found!", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else {
        setNResult(nresult);
      }
      //console.log(nresult);
      
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

  // const handleRadioChange = (selectedRow) => {
  //   const shouldEditQuery = window.confirm("Do you want to edit the query?");
  //   setSelectedRow(selectedRow);
  //   const presetQuery = selectedRow.query;
  
  //   if (shouldEditQuery) {
  //     if (presetQuery) {
  //       const queryArray = presetQuery.split(" ");
  //       let replaceIndex = -1;
  
  //       // Find the position of single quotes in the array
  //       queryArray.forEach((word, index) => {
  //         if (word.includes("'")) {
  //           replaceIndex = index;
  //         }
  //       });
  
  //       // Prompt user to replace the value between single quotes
  //       if (replaceIndex !== -1) {
  //         const replacement = prompt(`Enter placeholder value for ${presetQuery}:`, queryArray[replaceIndex]);
  
  //         // Replace the value and update the state
  //         if (replacement !== null) {
  //           queryArray[replaceIndex] = `'${replacement}'`;
  //           const updatedQuery = queryArray.join(" ");
  //           setFinalQuery(updatedQuery);
  //           console.log(updatedQuery);
  //           // displayResults(updatedQuery); // Optionally, you may want to run the updated query immediately
  //         }
  //       }
  //     }
  //   } else {
  //     if (presetQuery) {
  //       setFinalQuery(presetQuery);
  //     }
  //   }
  // };
  
  // const handleRadioChange = (selectedRow) => {
  //   const shouldEditQuery = window.confirm("Do you want to edit the query?");
  //   setSelectedRow(selectedRow);
  //   const presetQuery = selectedRow.query;
  
  //   if (shouldEditQuery) {
  //     if (presetQuery) {
  //       const regex = /'([^']*)'/; // Regex to match text between single quotes
  //       const match = presetQuery.match(regex);
  
  //       if (match && match.length > 1) {
  //         const currentValue = match[1];
  //         const replacement = prompt(`Replace the value between single quotes for ${presetQuery}:`, currentValue);
  
  //         if (replacement !== null) {
  //           const updatedQuery = presetQuery.replace(regex, `'${replacement}'`);
  //           setFinalQuery(updatedQuery);
  //           console.log(updatedQuery);
  //           // displayResults(updatedQuery); // Optionally, you may want to run the updated query immediately
  //         }
  //       }
  //     }
  //   } else {
  //     if (presetQuery) {
  //       setFinalQuery(presetQuery);
  //     }
  //   }
  // };

  const handleRadioChange = (selectedRow) => {
    const shouldEditQuery = window.confirm("Do you want to edit the query?");
    setSelectedRow(selectedRow);
    const presetQuery = selectedRow.query;
  
    if (shouldEditQuery) {
      if (presetQuery) {
        const regex = /'([^']*)'/g; // Updated regex with global flag for global matching
        let match;
        let updatedQuery = presetQuery;
  
        while ((match = regex.exec(presetQuery)) !== null) {
          const currentValue = match[1];
          const replacement = prompt(`Replace the value between single quotes for ${presetQuery}:`, currentValue);
  
          if (replacement !== null) {
            updatedQuery = updatedQuery.replace(`'${currentValue}'`, `'${replacement}'`);
          }
        }
  
        setFinalQuery(updatedQuery);
        console.log(updatedQuery);
        // displayResults(updatedQuery); // Optionally, you may want to run the updated query immediately
      }
    } else {
      if (presetQuery) {
        setFinalQuery(presetQuery);
      }
    }
  };
  
  

  const handleModifyQuery = () => {
    setFinalQuery(editedQuery);
    setIsEditingQuery(false);
  };

  const handleRunButtonClick = () => {
    if (selectedRow !== null) {
        displayResults(finalQuery);
        setFinalQuery(''); // Reset the final query
        setIsEditingQuery(false); // Reset the editing flag
        setEditedQuery(''); // Reset the edited query
        // setSelectedRow(null); // Deselect the radio button
    }};

    useEffect(() => {
      setCsvData(nresult);
    }, [nresult]);


  return (
    <div className="saved-query-container">
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

      {loading && <p>Loading...</p>}

      {isEditingQuery && (
        <div>
          <label>Edit Query:</label>
          <textarea
            value={editedQuery}
            onChange={(e) => setEditedQuery(e.target.value)}
          />
          <button onClick={handleModifyQuery}>Modify Query</button>
        </div>
      )}

      {result.length > 0 && (
        <div>
          <h4>Saved Queries</h4>
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
            <DownloadCSVButton csvData={csvData} />
          </div>
        )}

      {nresult.length > 0 && (
        <div>
          <h4>Result</h4>
          <div style={{ overflowY: nresult.length > 10 ? 'auto' : 'visible', maxHeight: nresult.length > 10 ? '500px' : 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                  {Object.keys(nresult[0]).map((key) => (
                    <th key={key} style={{ border: '1px solid #dddddd', padding: '8px', textAlign: 'left' }}>
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {nresult.map((row, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #dddddd' }}>
                    {Object.values(row).map((value, index) => (
                      <td key={index} style={{ border: '1px solid #dddddd', padding: '8px' }}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}


    </div>
  );
};

export default SavedQuery;