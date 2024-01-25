import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../../ui/button";
import { Milestone, Mailbox } from "lucide-react";
//<SendHorizontal />

// Display the templates
export default function PresetTemplate2(props) {
  const [result, setResult] = useState([]);
  const [jsontemplate, setJsonTemplate] = useState([]);
  const [displayMode, setDisplayMode] = useState("plaintext");

  useEffect(() => {
    runQuery("select * from message_template"); // should run just once ideally
    runQuery("select * from json_template");

    const intervalId = setInterval(() => {
      runQuery("select * from message_template");
    }, 8000); // 2000 ms = 2 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const runQuery = async (sql) => {
    try {
      const response = await axios.post("http://localhost:8081/query/execute", {
        sql,
      });
      const result = response.data;
      if (sql === "select * from json_template") {
        const formattedResult = result.map((row) => {
          const parsedHeader = JSON.parse(row.header);
          //display key-value pairs in the parsedHeader
          // for (const [key, value] of Object.entries(parsedHeader)) {
          //   console.log(`${key}: ${value}`);
          // }
          const parsedContent = JSON.parse(row.jsontemplate_content);
          //display key-value pairs in the parsedContent
          for (const [key, value] of Object.entries(parsedContent)) {
            //console.log(`${key}: ${value}`);
          }

          //console.log("Formatted Header:", parsedHeader);
          //console.log("Formatted Content:", parsedContent);

          return {
            ...row,
            header: parsedHeader,
            jsontemplate_content: parsedContent,
          };
        });
        //console.log("Formatted JSON Result:", formattedResult);
        setJsonTemplate(formattedResult);
      }
      if (sql === "select * from message_template") setResult(result);
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }
  };

  const handleRadioChange = (row) => {
    //console.log("Selected Template in PresetTemplate2:", row.id, displayMode);
    props.setDisplayType(displayMode);
    props.setSelectedTemplate(row); // pass the selected template to the parent
    //console.log(row);
  };

  const toggleDisplayMode = () => {
    setDisplayMode(displayMode === "json" ? "plaintext" : "json");
  };

  return (
    <div>
      <Button size="small" className="m-0" onClick={toggleDisplayMode}>
        {displayMode === "json" ? "Post as Plain Text" : "Post as JSON"} <Mailbox className="ml-2 h-4 w-4" />
      </Button>

      {displayMode === "plaintext" && (
        <div>
          {result.length === 0 && <p className="loading">Loading...</p>}
          {result.length > 0 && (
            <div className="max-h-96 overflow-y-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Template Name</th>
                    <th>Template Content</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((row) => (
                    <tr key={row.id}>
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
      )}
      
      {displayMode === "json" && (
        <div>
          {jsontemplate.length > 0 && (
            <div  className="max-h-96 overflow-y-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>JSON Template Name</th>
                    <th>JSON Template Content</th>
                    <th>JSON Template Header</th>
                    <th>JSON Template Key</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {jsontemplate.map((row) => (
                    <tr key={row.id}>
                      <td>{row.jsontemplate_name}</td>
                      <td>
                        {Object.entries(row.jsontemplate_content).map(
                          ([key, value]) => (
                            <div key={key}>
                              <strong>{key}:</strong> {value}
                            </div>
                          )
                        )}
                      </td>
                      <td>
                        {Object.entries(row.header).map(([key, value]) => (
                          <div key={key}>
                            <strong>{key}:</strong> {value}
                          </div>
                        ))}
                      </td>
                      <td>{row.json_key}</td>
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
      )}
      <br/>
    </div>
  );
}
