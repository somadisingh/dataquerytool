import React, { useState, useEffect } from "react";
import { formatQuery, QueryBuilder } from "react-querybuilder";
import "react-querybuilder/dist/query-builder.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SaveQueryButton from "../Buttons/QuerySaver";
import DownloadCSVButton from "../Buttons/DownloadCsv";
import DeleteQueryButton from "../Buttons/DeleteQuery";
import "../designs/QueryBuilder.css";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { H2, H3, H4, Para } from "../../ui/typography";

const NewQueryBuilder = () => {
  const [query, setQuery] = useState({
    combinator: "and",
    rules: [{ field: "", operator: "=", value: "" }],
  });
  const [formattedQuery, setFormattedQuery] = useState(
    formatQuery(query, "sql")
  );
  const [selectedTable, setSelectedTable] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableNames, setTableNames] = useState([]);
  const [columnNames, setColumnNames] = useState([]);
  const [fields, setFields] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [databaseName, setDatabaseName] = useState("");
  const [queryDescription, setQueryDescription] = useState("");
  const [finalQuery, setFinalQuery] = useState("");
  const [finaltable, setFinalTable] = useState("");
  const [csvData, setCsvData] = useState([]);
  const [savedQueries, setSavedQueries] = useState([]);
  const [selectedQueryId, setSelectedQueryId] = useState("");

  const apiEndpoint = "http://localhost:8080/api/customquery/execute";

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
      const response = await axios.post(apiEndpoint, { sql });
      const result = response.data;

      if (
        !sql.toLowerCase().includes("show tables") &&
        !sql.toLowerCase().includes("describe") &&
        !sql.toLowerCase().includes("database()") &&
        !sql.toLowerCase().includes("save_query")
      ) {
        setResult(result);
      }

      if (sql.toLowerCase().includes("show tables")) setTableNames(result);
      if (sql.toLowerCase().includes("save_query")) setSavedQueries(result);
      if (sql.toLowerCase().includes("describe")) {
        setColumnNames(result.map((column) => column.Field));
        const fields = result.map((column) => ({
          name: column.Field,
          label: column.Field,
        }));
        setFields(fields);
      }
      if (sql.toLowerCase().includes("database()")) {
        setDatabaseName(result[0]["database()"]);
      }

      if (
        sql.toLowerCase().includes("select") &&
        !sql.toLowerCase().includes("database()") &&
        !sql.toLowerCase().includes("save_query")
      ) {
        if (result.length > 0) {
          toast.success("Query Executed Successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.warn("No results found!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 500) {
        toast.error("Please check your query and try again!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleQueryChange = (newQuery) => {
    /*
    This function is used to handle the query change. It takes in a query object as a parameter and sets the query state variable to the query object.
    It also formats the query object and sets the formattedQuery state variable to the formatted query. This function is part of react-querybuilder.
     */
    setQuery(newQuery);
    setFormattedQuery(formatQuery(newQuery, "sql"));
  };

  const handleTableChange = async (event) => {
    /*
    This function is used to handle the table change. It takes in a table object as a parameter and sets the tableName state variable to the table object.
    It also runs a custom query to describe the table and set the columnNames state variable to the result. It also sets the fields state variable to the result.
     */
    const selectedTable = event.target.value;
    setSelectedTable(selectedTable);
    try {
      setLoading(true);
      const response = await runCustomQuery(`describe ${selectedTable}`);
      const columns = response.data.map((column) => column.Field);
      setColumnNames(columns);
      const fields = result.map((column) => ({
        name: column.Field,
        label: column.Field,
      }));
      setFields(fields);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleColumnChange = (event) => {
    /*
    This function works in tandem with radio buttons to select columns. It takes in a column object as a parameter and sets the selectedColumns state variable to the column object.
    It also checks if the selectedColumns state variable includes the column object. If it does, it will filter the selectedColumns state variable to remove the column object.
    If it does not, it will add the column object to the selectedColumns state variable.
     */
    const selectedColumn = event.target.value;
    if (selectedColumns.includes(selectedColumn)) {
      setSelectedColumns(
        selectedColumns.filter((col) => col !== selectedColumn)
      );
    } else {
      setSelectedColumns([...selectedColumns, selectedColumn]);
    }
  };

  const handleExecuteQuery = () => {
    /*
    This function edits the formattedQuery string to remove the brackets and then adds the selected columns and table name to the formattedQuery string.
    It then sets the finalTable state variable to the table name and the finalQuery state variable to the formattedQuery1 string. It then runs the custom query.
     */
    let formattedQuery1 = formattedQuery.substring(
      1,
      formattedQuery.length - 1
    );
    const selectedColumnString = selectedColumns.join(", ");
    formattedQuery1 = `select ${selectedColumnString} from ${selectedTable} where ${formattedQuery1}`;
    setFinalTable(selectedTable);
    console.log(formattedQuery1);
    setFinalQuery(formattedQuery1);
    runCustomQuery(formattedQuery1);
    setSelectedColumns([]);
  };

  useEffect(() => {
    // store result when its value changes
    setCsvData(result);
  }, [result]);

  useEffect(() => {
    // in order to avoid a constant ping to the backend, we only want to run the query when the formattedQuery, tableName, or columnName changes
    if (!loading && formattedQuery === "" && selectedTable === "") {
      runCustomQuery("show tables");
    }
  }, [loading, formattedQuery, selectedTable]);

  useEffect(() => {
    runCustomQuery("select database()");
    runCustomQuery("show tables");
    runCustomQuery("select * from save_query");
  }, []);

  return (
    <Card className="px-6 py-6">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="colored"
      />

      <form>
        <label htmlFor="tableName">Select Table</label>
        <select
          id="tableName"
          value={selectedTable}
          onChange={handleTableChange}
        >
          {tableNames
            .filter(
              (tableObject) => !tableObject.Tables_in_reactql.includes("_")
            )
            .map((tableObject, index) => (
              <option key={index} value={tableObject.Tables_in_reactql}>
                {tableObject.Tables_in_reactql}
              </option>
            ))}
        </select>

        <label htmlFor="columnName">Select Columns</label>
        <div className="test1">
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
      </form>

      <QueryBuilder
        fields={fields}
        query={query}
        onQueryChange={handleQueryChange}
      />

      <button onClick={handleExecuteQuery}>Execute Query</button>
      <br />

      <Input
        type="text"
        value={queryDescription}
        onChange={(e) => setQueryDescription(e.target.value)}
        placeholder="Query Description"
      />
      <SaveQueryButton
        formattedQuery={finalQuery}
        queryDescription={queryDescription}
        databasename={databaseName}
        table_name={finaltable}
        runCustomQuery={runCustomQuery}
      />

      {result.length > 0 && (
        <div>
          <DownloadCSVButton csvData={csvData} />
        </div>
      )}

      {/* input field to take query description */}
      <br />
      {/* Drop-down menu for saved queries */}
      <label htmlFor="savedQueries">Select a Saved Query to Delete:</label>
      <select
        id="savedQueries"
        value={selectedQueryId}
        onChange={(e) => setSelectedQueryId(e.target.value)}
      >
        <option value="" disabled>
          Select a saved query
        </option>
        {savedQueries.map((query) => (
          <option key={query.id} value={query.id}>
            {query.description} - {query.query}
          </option>
        ))}
      </select>

      {/* Delete button */}
      <DeleteQueryButton
        selectedQueryId={selectedQueryId}
        runCustomQuery={runCustomQuery}
      />

      {loading && <p>Loading...</p>}

      {result.length > 0 && (
        <div>
          <h4>Result</h4>
          <div
            style={{
              overflowY: result.length > 10 ? "auto" : "visible",
              maxHeight: result.length > 10 ? "300px" : "auto",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "10px",
                border: "1px solid #ddd",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                  {Object.keys(result[0]).map((key) => (
                    <th
                      key={key}
                      style={{
                        border: "1px solid #dddddd",
                        padding: "8px",
                        textAlign: "left",
                      }}
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.map((row, index) => (
                  <tr key={index} style={{ border: "1px solid #dddddd" }}>
                    {Object.values(row).map((value, index) => (
                      <td
                        key={index}
                        style={{ border: "1px solid #dddddd", padding: "8px" }}
                      >
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
    </Card>
  );
};

export default NewQueryBuilder;
