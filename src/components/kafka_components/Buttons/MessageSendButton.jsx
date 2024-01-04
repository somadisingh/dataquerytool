// import React, { useState } from 'react';
import axios from "axios";
// import '../designs/MessageProducer.css';
import { Button } from "../../ui/button";
import { SendHorizontal } from "lucide-react";

const MessageSendButton = ({ modifiedTemplate, className }) => {
  //console.log('new message', modifiedTemplate);
  // const [message, setMessage] = useState('');

  const sendMessage = async () => {
    console.log("Sending message:", modifiedTemplate);
    try {
      const response = await axios.post("http://localhost:8081/message/send", {
        message: modifiedTemplate,
      });

      if (response.status === 200) {
        console.log("Template Posted successfully");
      } else {
        console.error("Failed to send template");
      }
    } catch (error) {
      console.error("Error sending template:", error);
    }
  };

  return (
    <Button className={className} onClick={sendMessage}>
      Send Message <SendHorizontal className="ml-1 h-4 w-4" />
    </Button>
  );
};

export default MessageSendButton;
