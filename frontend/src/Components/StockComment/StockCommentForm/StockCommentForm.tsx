import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

type Props = {
  symbol: string;
  handleComment: (e: CommentFormInputs) => void;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const validation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
});

const StockCommentForm = ({ symbol, handleComment }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormInputs>({ resolver: yupResolver(validation) });
  return (
    <form
      className="space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-200"
      onSubmit={handleSubmit(handleComment)}
    >
      <div>
        <label
          htmlFor="title"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lightBlue focus:border-lightBlue block w-full p-2.5 transition-colors"
          placeholder="Enter comment title"
          disabled={isSubmitting}
          {...register("title")}
        />
        {errors.title && (
          <p className="mt-1 text-xs text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="content"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Your Comment
        </label>
        {/* More standard textarea styling */}
        <textarea
          id="content"
          rows={4} // Reduced rows for a more compact form initially
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lightBlue focus:border-lightBlue transition-colors"
          placeholder="Write your comment here..."
          disabled={isSubmitting}
          {...register("content")}
        ></textarea>
        {errors.content && (
          <p className="mt-1 text-xs text-red-600">{errors.content.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-center text-white bg-lightGreen rounded-lg hover:bg-green-500 focus:ring-4 focus:ring-green-300 disabled:opacity-50 transition-colors"
      >
        {isSubmitting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
};

export default StockCommentForm;
