import React from 'react';
import ReplyComponent from './ReplyComponent';
import { UserContext } from "../contexts/UserContext";
import { useContext } from 'react';

export default function CommentComponent({ allComments, username, handleDeleteComment, handleEditComment }) {
  const { user, setUser } = useContext(UserContext);
  console.log("user Comment Component", username);

  if (!allComments || allComments.length === 0) {
    // If there are no comments, display a message
    return <div>No comments available.</div>;
  }

  return (
    <div>
      <div className="block py-2 text-xl">
        {allComments.map((comment) => {
          if (!comment || !comment._id || !comment.username || !comment.content) {
            // If a comment object is missing required properties, skip it
            return null;
          }

          return (
            <div key={comment._id} className="s:p-2 p-4 mb-6 bg-gray-100 rounded-lg shadow-xl">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-xl text-amber-600 font-semibold">
                    {comment.username}
                  </p>
                </div>
              </footer>
              <p className="p-2 text-gray-800 dark:text-gray-800">{comment.content}</p>
              {comment.username === user.username && (
                <div className="inline-flex space-x-2 mb-4 mt-4">
                  <button
                    onClick={() => handleDeleteComment(comment._id)}
                    className="text-sm hover:text-red-600 dark:text-gray-400"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditComment(comment._id)}
                    className="text-sm text-blue-500 hover:text-blue-500 dark:text-gray-400"
                  >
                    Edit
                  </button>
                </div>
              )}
              <hr />
              <div className="flex items-center mt-4 space-x-4">
                {/* Only display the SVG on screens larger than sm */}
                <button
                  type="button"
                  className="hidden sm:flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth=""
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                </button>
                <div className='w-full'>
                  <ReplyComponent
                    commentId={comment._id}
                    username={user.username}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
