import { useState, useEffect, useRef } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { io } from "socket.io-client";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

export default function Home() {
  const { getToken } = useAuth();
  const { user } = useUser();
  const username = user?.firstName || "Anonymous";

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef();
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize chat: fetch messages and connect socket
  useEffect(() => {
    const initChat = async () => {
      try {
        const token = await getToken(); // Clerk token

        // Fetch messages from backend with Authorization header
        const res = await fetch(`${BACKEND_URL}/messages`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const msgs = await res.json();
        setMessages(Array.isArray(msgs) ? msgs : []);

        // Connect Socket.IO with token
        socketRef.current = io(BACKEND_URL, {
          auth: { token },
        });

        socketRef.current.on("new_message", (msg) => {
          setMessages((prev) => [...prev, msg]);
        });

      } catch (err) {
        console.error("Failed to initialize chat:", err);
      }
    };

    initChat();
    return () => socketRef.current?.disconnect();
  }, [getToken]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || !socketRef.current) return;

    const newMessage = { user: username, text: input };
    socketRef.current.emit("send_message", newMessage);
    setInput("");
  };

  return (
    <div className="flex mt-6 flex-col h-[80vh] max-w-xl mx-auto bg-[#e6f5ff] shadow-lg rounded-2xl overflow-hidden">
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f0faff]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.user === username ? "justify-end" : "justify-start"}`}>
            <div className={`px-4 py-2 rounded-2xl max-w-xs shadow-md ${
              msg.user === username
                ? "bg-[#1DA1F2] text-white rounded-br-none"
                : "bg-[#cce7ff] text-black rounded-bl-none"
            }`}>
              <span className="block text-sm font-semibold">{msg.user}</span>
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="flex items-center p-3 bg-white border-t">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-[#1DA1F2] text-white font-bold rounded-xl hover:bg-[#1482c7] transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
