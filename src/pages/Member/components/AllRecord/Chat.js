import React, { useEffect, useRef, useState, useContext } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import AuthContext from '../../../../components/AuthContext';
import { MemberContext } from '../../../../App';
import '../../styles/Chat.scss';

const Chat = () => {
  const { auth, token } = useContext(AuthContext);
  const { member } = useContext(MemberContext);
  let chatName = member.mem_nickname;
  if (member.mem_nickname === '') {
    chatName = member.mem_name;
  }
  //   console.log(member);
  // 設置message跟name
  const [memberState, setMemberState] = useState({
    message: '',
    name: chatName,
  });
  const [chat, setChat] = useState([]);
  const [chatall, setChatall] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    axios.get('http://localhost:3000/member/chat').then((res) => {
      setChatall(res.data);
    });
  }, []);

  useEffect(() => {
    // console.log(123);
    // 與後端的連接
    socketRef.current = io.connect('http://localhost:4000');
    socketRef.current.on('message', ({ name, message, sid }) => {
      setChat([...chat, { name, message, sid }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e) => {
    setMemberState({ ...memberState, [e.target.name]: e.target.value });
  };

  //點擊表單提交時
  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = memberState;
    axios
      .post(
        'http://localhost:3000/member/chat',
        {
          message: message,
        },
        {
          // 發JWT一定要加這個headers
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
    // 要在後端(message 自己設置的)那邊傳入{ name, message }
    socketRef.current.emit('message', {
      name: chatName,
      message,
      sid: member.sid,
    });
    // 把原有默認提交功能停止
    setMemberState({ message: '', name: chatName });
  };

  // 渲染聊天室
  const renderChat = () => {
    return chat.map(({ name, message, sid }) => (
      <div
        key={uuidv4()}
        className={sid === member.sid ? 'd-flex justify-content-end' : ''}
      >
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  console.log(123, chat);

  return (
    <div className="h-100 d-flex justify-content-center pt-4 memberChat">
      <div className="h-90 w-70 bg-light">
        <div className="h-80">
          {chatall.map((v, i) => {
            return (
              <div
                key={uuidv4()}
                className={
                  v.mem_sid === member.sid ? 'd-flex justify-content-end' : ''
                }
              >
                <h3>
                  {v.mem_nickname ? v.mem_nickname : v.mem_name}:
                  <span>{v.message}</span>
                </h3>
              </div>
            );
          })}
          {renderChat()}
        </div>
        <form onSubmit={onMessageSubmit}>
          <input
            name="message"
            onChange={(e) => onTextChange(e)}
            value={memberState.message}
            label="Message"
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
