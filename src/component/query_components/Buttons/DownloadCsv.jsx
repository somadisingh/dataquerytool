import React from 'react';
import Papa from 'papaparse';
import { CSVLink } from "react-csv";

/*
This function is used to download the result of the query as a CSV file. It uses the PapaParse library to convert the result into a CSV file.
    */

const DownloadCSVButton = ({ csvData }) => {
  const handleDownloadCSV = () => {
    const csvContent = Papa.unparse(csvData);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'result.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button onClick={handleDownloadCSV}>Download CSV</button>
  );
};

export default DownloadCSVButton;
