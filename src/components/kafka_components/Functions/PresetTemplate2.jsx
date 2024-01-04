import React, { useState, useEffect } from "react";
import axios from "axios";
//import MessageSendButton from "../Buttons/MessageSendButton";
import "../designs/PresetTemplate.css";

// Display the templates
export default function PresetTemplate2(props) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    runQuery("select * from message_template"); // should run just once ideally

    const intervalId = setInterval(() => {
      runQuery("select * from message_template");
    }, 2000); // 2000 ms = 2 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const runQuery = async (sql) => {
    try {
      const response = await axios.post("http://localhost:8081/query/execute", {
        sql,
      });
      const result = response.data;
      setResult(result);
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }
  };

  const handleRadioChange = (row) => {
    console.log("Selected Template main:", row.id);
    props.setSelectedTemplate(row); // pass the selected template to the parent
  };

  // const handleRefreshTable = () => {
  //   runQuery("select * from message_template");
  // };

  return (
    <div>
      {result.length === 0 && <p className="loading">Loading...</p>}
      {result.length > 0 && (
        <div>
          <table className="table">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Template Name</th>
                <th>Template Content</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {result.map((row) => (
                <tr key={row.id}>
                  {/* <td>{row.id}</td> */}
                  <td>{row.template_name}</td>
                  <td>{row.template_content}</td>
                  <td>
                    <input
                      type="radio"
                      name="selectedTemplate"
                      onChange={() => handleRadioChange(row)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
