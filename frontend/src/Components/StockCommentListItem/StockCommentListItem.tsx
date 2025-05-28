import React from "react";
import { CommentGet } from "../../Models/Comment";

type Props = {
  comment: CommentGet;
};

const StockCommentListItem = ({ comment }: Props) => {
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "Some time ago";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return "Invalid date";
    }
  };

  return (
    <article className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {" "}
      {/* Changed div to article for semantics */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-3">
          {/* Placeholder for user avatar - replace with actual avatar if you have it */}
          {/* <UserCircleIcon className="w-8 h-8 text-gray-400" /> */}
          <span className="font-semibold text-gray-800 text-sm hover:underline">
            {/* Link to user profile if you have one, otherwise just text */}
            {comment.createdBy || "Anonymous"}
          </span>
          <span className="text-xs text-gray-500">
            • {formatDate(comment.createdOn)}{" "}
          </span>
        </div>
        {/* TODO: add actions like edit/delete if user owns comment */}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{comment.title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
        {comment.content}
      </p>
    </article>
  );
};

export default StockCommentListItem;
