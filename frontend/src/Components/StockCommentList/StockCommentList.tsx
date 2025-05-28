import React from "react";
import { CommentGet } from "../../Models/Comment";
import StockCommentListItem from "../StockCommentListItem/StockCommentListItem";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  if (!comments || comments.length === 0) {
    return (
      <p className="text-center text-gray-500 py-4">Be the first to comment!</p>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <StockCommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default StockCommentList;
