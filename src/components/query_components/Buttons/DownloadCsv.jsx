import React from "react";
import Papa from "papaparse";
import { CSVLink } from "react-csv";
import { Button } from "../../ui/button";
import { FileDown, Download } from "lucide-react";
/*
This function is used to download the result of the query as a CSV file. It uses the PapaParse library to convert the result into a CSV file.
<FileDown />    
*/

const DownloadCSVButton = ({ csvData }) => {
  const handleDownloadCSV = () => {
    const csvContent = Papa.unparse(csvData);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "result.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Button size="small" className="m-1" onClick={handleDownloadCSV}>
      Download CSV <Download className="ml-1 h-4 w-4" />
    </Button>
  );
};

export default DownloadCSVButton;
