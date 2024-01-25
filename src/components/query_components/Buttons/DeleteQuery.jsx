import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "../../ui/button";
import { Trash2 } from "lucide-react";
//<Trash2 />

/*
This function is used to delete a query. It takes in an id as a parameter and sends a DELETE request to the backend.
The backend will then delete the query with the corresponding id. It then runs a custom query to show all the queries and sets the result state variable to the result.
    */

const DeleteQueryButton = ({ selectedQueryId, runCustomQuery }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteQuery = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `http://localhost:8080/api/query/delete/${selectedQueryId}`
      );
      console.log(response);
      runCustomQuery("select * from save_query");
      toast.success("Query deleted successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      console.log(err);
      toast.error("Error deleting query. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="small"
      className="m-1"
      onClick={handleDeleteQuery}
      disabled={!selectedQueryId || loading}
    >
      <Trash2 className="mr-1 h-4 w-4"/>
      Delete Query
    </Button>
  );
};

export default DeleteQueryButton;
