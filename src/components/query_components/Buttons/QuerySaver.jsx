import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const SaveQueryButton = ({ formattedQuery, queryDescription, databasename, table_name, runCustomQuery }) => {
    const [saving, setSaving] = useState(false);

    const handleSaveQuery = async () => {
        setSaving(true);
    
        const data = {
            query: formattedQuery, 
            description: queryDescription,
            dbname: databasename,
            table_name: table_name
        }
        console.log(data);
        try {
            const response = await axios.post('http://localhost:8080/api/query/save', { 
                query: formattedQuery, 
                description: queryDescription,
                dbname: databasename,
                table_name: table_name
             });
            console.log(data.query);
            const result = response.data;
            console.log(result);
            if (result) {
                runCustomQuery('select * from save_query');
                // alert('Query saved successfully!');
                toast.success("Query Saved Successfully!", {
                    position: toast.POSITION.TOP_CENTER

                  });
            }
        } catch (err) {
            console.error('error saving query', err);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={handleSaveQuery} disabled={saving}>Save Query</button>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />
        </div>
    );
};

export default SaveQueryButton;