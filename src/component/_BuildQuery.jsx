import React, { useState } from 'react';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';

const QueryBuilder = ({ fields, initialQuery, onQueryChange }) => {
  const [query, setQuery] = useState(initialQuery);
  const [formattedQuery, setFormattedQuery] = useState(formatQuery(query, 'sql'));

  const handleQueryChange = (q) => {
    setQuery(q);
    setFormattedQuery(formatQuery(q, 'sql'));
    onQueryChange(q, formattedQuery);
  };

  return (
    <div>
      <QueryBuilder fields={fields} query={query} onQueryChange={handleQueryChange} />
      <h4>Query</h4>
      <pre>
        <code>{formattedQuery}</code>
      </pre>
    </div>
  );
};

export default QueryBuilder;
