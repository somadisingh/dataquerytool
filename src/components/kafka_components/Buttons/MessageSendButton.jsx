// import React, { useState } from 'react';
import axios from 'axios';
import '../designs/MessageProducer.css';

const MessageSendButton = ({ modifiedTemplate }) => {
  //console.log('new message', modifiedTemplate);
  // const [message, setMessage] = useState('');

  const sendMessage = async () => {
    console.log('Sending message:', modifiedTemplate);
    try {
      const response = await axios.post('http://localhost:8081/message/send', {
        message: modifiedTemplate,
      });

      if (response.status === 200) {
        console.log('Template Posted successfully');
      } else {
        console.error('Failed to send template');
      }
    } catch (error) {
      console.error('Error sending template:', error);
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        value={message}
        onChange={(e) => setMessage(modifiedTemplate)}
      /> */}
      <button className="sendMessage" onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default MessageSendButton;
