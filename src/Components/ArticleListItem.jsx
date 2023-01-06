import React from "react";
import { formatDate } from "../utils";

const ArticleListItem = ({ article }) => {
  const { id, title, body, createDate, updateDate } = article;

  console.log(article);

  return (
    <tr>
      <th>{id}</th>
      <td>{title}</td>
      <td>{formatDate(createDate)}</td>
    </tr>
  );
};

export default ArticleListItem;
