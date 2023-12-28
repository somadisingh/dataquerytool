import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSVLink } from "react-csv";
import Papa from 'papaparse';

const SavedQuery = () => {

  const [result, setResult] = useState([]);
  const [nresult, setNResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [finalQuery, setFinalQuery] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [csvData, setCsvData] = useState([]);


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
      setNResult(nresult);
      console.log(nresult);
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

  const handleRadioChange = (selectedRow) => {
    setSelectedRow(selectedRow);
    console.log(selectedRow);
    const presetQuery = selectedRow.query;
    if (presetQuery) {
        console.log(presetQuery);
        let value = presetQuery.substring(presetQuery.indexOf('from') + 5, presetQuery.indexOf('where') - 1);
        console.log(value);
        setFinalQuery(presetQuery);
    }
  };

  const handleRunButtonClick = () => {
    if (selectedRow !== null) {
        //const selectedQuery = result[0].query;
        displayResults(finalQuery);
    }};

    useEffect(() => {
      setCsvData(nresult);
    }, [nresult]);

    const handleDownloadCSV = () => {
      const csvContent = Papa.unparse(csvData);
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', selectedRow.description + '.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };


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
                  <button onClick={handleDownloadCSV}>Download CSV</button>
                  <table>
                    {/* ... Your existing code for displaying the table ... */}
                  </table>
                </div>
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

export default SavedQuery;