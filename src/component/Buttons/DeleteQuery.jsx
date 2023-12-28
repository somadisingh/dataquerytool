import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

/*
This function is used to delete a query. It takes in an id as a parameter and sends a DELETE request to the backend.
The backend will then delete the query with the corresponding id. It then runs a custom query to show all the queries and sets the result state variable to the result.
    */

const DeleteQueryButton = ({ selectedQueryId, runCustomQuery }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteQuery = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(`http://localhost:8080/api/query/delete/${selectedQueryId}`);
      console.log(response);
      runCustomQuery('select * from save_query');
      toast.success('Query deleted successfully!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      console.log(err);
      toast.error('Error deleting query. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleDeleteQuery} disabled={!selectedQueryId || loading}>
      Delete Query
    </button>
  );
};

export default DeleteQueryButton;
