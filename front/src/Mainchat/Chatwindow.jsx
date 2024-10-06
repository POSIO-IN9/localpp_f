import React, { useEffect, useState, useRef } from "react";

const ChatWindow = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSendMessage = async (input1, input2) => {
    if (input1.trim() === "" || input2.trim() === "") return;

    const combinedMessage = `${input1}에서 ${input2}에 관련된 교육 추천해줘`;
    const newMessage = { text: combinedMessage, sent: true };
    setMessages([...messages, newMessage]);
    setInput1("");
    setInput2("");

    try {
      const response = await fetch(
        `http://localhost:5000/flask/api/chat/${encodeURIComponent(
          combinedMessage
        )}`
      );
      const data = await response.json();
      const courses = formatResponse(data.reply.join("\n"));

      const newMessages = courses.map((course, index) => {
        if (course.text) {
          return { text: course.text, sent: false };
        } else {
          return {
            text:
              `\n교육과정 ${index + 1}\n\n` +
              `1. 교육과정명: ${course.title}\n` +
              `2. 우편번호: ${course.code}\n` +
              `3. 위치: ${course.location}\n` +
              `4. 상세주소: ${course.address}\n` +
              `5. 연락처: ${course.phone}\n` +
              `6. E-mail: ${course.email}\n` +
              `7. 교육비용: ${course.cost}\n` +
              `8. 교육기간: ${course.duration}\n\n`,
            sent: false,
          };
        }
      });

      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    } catch (error) {
      console.error("에러 메세지:", error);
      const errorMessage = {
        text: "잘못된 메세지가 전달되었습니다.",
        sent: false,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const formatResponse = (response) => {
    const coursePattern =
      /output:\s(.+?)\s\((.+?)\)\s(.+?)\s(.+?)\n(.+?)\n(.+?)\n(.+?)\n(.+?)\s(.+?)/g;
    let match;
    let courses = [];

    while ((match = coursePattern.exec(response)) !== null) {
      courses.push({
        title: match[1],
        code: match[2],
        location: match[3],
        address: match[4],
        phone: match[5],
        email: match[6],
        cost: match[7],
        duration: match[8],
      });
      if (courses.length === 5) break;
    }

    return courses.length > 0
      ? courses
      : [{ text: "일치하는 교육과정이 없습니다." }];
  };

  const messages1 = useRef(null);

  const scrollToBottom = () => {
    messages1.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    handleSendMessage(input1, input2);
    setInput1("");
    setInput2("");
  };

  return (
    <div className="fixed bottom-20 left-5 bg-slate-100 p-6 rounded-lg shadow-lg w-80 z-50 mb-6">
      <h2 className="text-lg font-['DungGeunMo'] font-semibold mb-4">
        원하는 교육을 추천 받아보세요.
      </h2>
      <div className="h-48 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded-lg ${
              message.sent
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            {message.text.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
        <div ref={messages1}></div>
      </div>
      <div className="flex flex-row">
        <input
          type="text"
          className="text-sm font-bold w-14 h-10 mr-2 p-2 border border-gray-300  mb-2 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="지역"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <p className="mt-5 font-['DungGeunMo'] font-bold">에서</p>
      </div>
      <div className="flex flex-row">
        <input
          type="text"
          className="text-sm flex  font-bold w-16 h-10 mr-2 p-2 border border-gray-300  mb-2 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="키워드"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <p className="mt-5 font-['DungGeunMo'] font-bold">관련한 교육을 추천해줘</p>
      </div>
      <button
        className="w-full mt-5 bg-blue-500 text-white p-2 rounded-md font-['DungGeunMo'] hover:bg-blue-600"
        onClick={handleSend}
      >
        전송
      </button>
    </div>
  );
};

export default ChatWindow;
