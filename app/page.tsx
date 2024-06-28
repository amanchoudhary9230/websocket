"use client";
import { useEffect, useState } from "react";
import { initializeSocket } from "../lib/socket";

const Home = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const socket = initializeSocket();

    socket.on("message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    const socket = initializeSocket();
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div>
      <h1>Chat App</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border-black border-2 m-4"
      />
      <button onClick={sendMessage}>Send</button>

      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
