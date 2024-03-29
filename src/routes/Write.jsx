import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const formData = new FormData();

  return (
    <div className="flex flex-col max-w-2xl m-auto">
      <button
        className="btn btn-outline btn-info ml-auto mr-0 mt-4 w-24
      "
        onClick={() => {
          navigate("/");
        }}
      >
        메인으로
      </button>
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
      <input
        type="file"
        className="file-input file-input-bordered file-input-info w-96 mr-o ml-auto mt-4"
        multiple
        onChange={(e) => {
          console.log(e.target.files);
          for (let i = 0; i < e.target.files.length; i++) {
            formData.append("files", e.target.files[i]);
          }
        }}
      />
      <button
        className="btn btn-outline btn-info ml-auto mr-0 mt-6 w-24"
        onClick={() => {
          if (title.length === 0 || title === null) {
            alert("제목을 입력해주세요");
            return;
          }
          if (body.length === 0 || body === null) {
            alert("내용을 입력해주세요");
            return;
          }
          formData.append("title", title);
          formData.append("body", body);
          const sendData = async () => {
            const data = await axios({
              method: "POST",
              url: "http://localhost:8089/article",
              data: formData,
              formData,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            setTitle("");
            setBody("");
            if (data.status === 200) {
              alert("작성이 성공적으로 완료되었습니다.");
              navigate("/");
            } else {
              alert("작성이 실패 했습니다.");
            }
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
