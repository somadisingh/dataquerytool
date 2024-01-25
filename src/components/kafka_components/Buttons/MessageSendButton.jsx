// import React, { useState } from 'react';
import axios from "axios";
// import '../designs/MessageProducer.css';
import { Button } from "../../ui/button";
import { SendHorizontal } from "lucide-react";
import { toast } from 'react-toastify';

const MessageSendButton = ({ modifiedTemplate, className, messagePayload }) => {
  //console.log('new message', modifiedTemplate);
  // const [message, setMessage] = useState('');

  const sendMessage = async () => {
    console.log("Sending message:", modifiedTemplate);
    try {
      const response = await axios.post("http://localhost:8081/message/send", {
        message: messagePayload,
      });

      if (response.status === 200) {
        console.log("Template Posted successfully");
        toast.success('Message sent successfully!', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.error("Failed to send template");
        toast.error('Error sending message. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Error sending template:", error);
      toast.error('Error sending message. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <Button className={className} onClick={sendMessage}>
      Send Message <SendHorizontal className="ml-1 h-4 w-4" />
    </Button>
  );
};

export default MessageSendButton;
