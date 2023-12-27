// CustomQuery.js
import React from 'react';
import axios from 'axios';

const CustomQuery = ({ formattedQuery, runCustomQuery }) => {
  const runQuery = () => {
    runCustomQuery(formattedQuery);
  };

  return (
    <div>
      <button onClick={runQuery}>Run Query</button>
    </div>
  );
};

export default CustomQuery;
