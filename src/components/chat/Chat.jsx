import { useContext, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
const Chat = ({ chats }) => {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  console.log(chats);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest("/chats/" + id);
      setChat({ ...res.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat">
      <h1>Messages</h1>
      <div className="messages">
        {chats.map((c) => (
          <div
            className="message"
            key={c.id}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src={c.receiver.avatar || "/noavatar.jpg"} alt="" />
            <span
              style={{
                backgroundColor: c.seenBy.includes(currentUser.id)
                  ? "white"
                  : "#fecd514e",
              }}
            >
              {c.receiver.username}
            </span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver.avatar || "/noavatar.jpg"} alt="" />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.message.map((m) => (
              <div className="chatMessage" key={m.id}>
                <p>{m.text}</p>
                <span>{format(m.createdAt)}</span>
              </div>
            ))}

            {/* <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>1 hour ago</span>
            </div> */}
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Chat;
