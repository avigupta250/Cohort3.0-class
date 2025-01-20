"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useScoket";

export function ChatRoomClient({
    messages,
    id
}: {
    messages: { message: string }[],
    id: string
}) {
    const [chats, setChats] = useState(messages);
    const [currentMessage, setCurrentMessage] = useState("");
    const { socket, loading } = useSocket();

    useEffect(() => {
        if (socket && !loading) {
            console.log("Socket connected, joining room:", id);
            socket.send(JSON.stringify({
                type: "join_room",
                roomId: id
            }));

            socket.onmessage = (event) => {
                try {
                    const parseData = JSON.parse(event.data);
                    console.log("Received message:", parseData);
                    if (parseData.type === "chat" && parseData.roomId === id) {
                        setChats((c) => [...c, { message: parseData.message }]);
                    }
                } catch (error) {
                    console.error("Error processing message:", error);
                }
            };

            return () => {
                console.log("Leaving room:", id);
                socket.send(JSON.stringify({
                    type: "leave_room",
                    roomId: id
                }));
            };
        }
    }, [socket, loading, id]);

    return (
        <div>
            {chats.map((m, index) => (
                <div key={index}>
                    {m.message}
                </div>
            ))}
            <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
            />
           <button
    onClick={() => {
        if (currentMessage.trim() === "") return;
        const payload = JSON.stringify({
            type: "chat",
            roomId: id,
            message: currentMessage.trim(),
        });
        console.log("Sending message:", payload);
        socket?.send(payload);
        setCurrentMessage("");
    }}
>
    Send Message
</button>
        </div>
    );
}
