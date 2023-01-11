import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils";

const ArticleListItem = ({ article }) => {
  const navigate = useNavigate();
  const { id, title, body, createDate, updateDate } = article;
  return (
    <tr
      onClick={() => {
        navigate(`/Detail/${id}`);
      }}
    >
      <th>{id}</th>
      <td>{title}</td>
      <td>{formatDate(createDate)}</td>
    </tr>
  );
};

export default ArticleListItem;
