import React, { useState, useEffect } from 'react';

export default function CommentNumber({ questionId }) {
  const [commentCount, setCommentCount] = useState(null);

  useEffect(() => {
    // Fetch comment count when the component mounts
    const fetchCommentCount = async () => {
      try {
        const response = await fetch(`https://portgermanyserver.onrender.com/comment/commentsCount/${questionId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCommentCount(data.count);
      } catch (error) {
        console.error('Fetch error:', error);
       
      }
    };

    fetchCommentCount(); 
  }, [questionId]); 

  return (
<div className='bg-amber-400 p-2 rounded text-white hover:text-black whitespace-nowrap overflow-hidden overflow-ellipsis'>       {commentCount !== null ? (
        <p>Comment here ({ " " + commentCount + " " })</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
