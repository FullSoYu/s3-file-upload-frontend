import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col max-w-2xl m-auto">
      <button
        className="btn btn-outline btn-info ml-auto mr-0 mt-10"
        onClick={() => {
          navigate("/Write");
        }}
      >
        글 작성
      </button>
      <div className="overflow-x-auto flex justify-center mt-20 ">
        <table className="max-w-2xl table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>제목</th>
              <th>작성 일시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>파일업로드 질문 있습니다.</th>
              <td>2023.01.02 17:00:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
