import "./App.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8008");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  function sendMessage() {
    console.log("Button clicked");
    socket.emit("send_message", { message: message });
  }
  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data);
      setMessageReceived(data.message);
    });
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>Send message</button>
      <h1>
        Message: {messageReceived}</h1>
    </div>
  );
}

export default App;