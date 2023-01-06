import axios from "axios";
import React, { useState } from "react";

const Write = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="flex flex-col max-w-2xl m-auto">
      <div className="mt-12">글작성 페이지 입니다.</div>
      <div className="form-control w-full mt-8">
        <label className="label">
          <span className="label-text">제목을 입력해주세요</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="제목을 입력해주세요"
          className="input input-bordered w-full h-20"
        />
      </div>
      <div className="form-control w-full mt-8">
        <label className="label">
          <span className="label-text">내용을 입력해주세요</span>
        </label>
        <textarea
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          placeholder="내용을 입력해주세요"
          className="input input-bordered w-full h-96"
        />
      </div>
      <button
        className="btn btn-outline btn-info ml-auto mr-0 mt-6 w-24"
        onClick={() => {
          const sendData = () => {
            axios({
              method: "POST",
              url: "http://localhost:8089/article",
              data: {
                title,
                body,
              },
            });
          };
          sendData();
        }}
      >
        완료
      </button>
    </div>
  );
};

export default Write;
