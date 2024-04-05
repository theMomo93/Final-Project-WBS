import React from 'react'


export default function QuestionComponent({question}) {
  

  return (
    <>
    <div>
        <div className="mb-2">
        <div className="border border-black p-4 rounded bg-white">
        <h2 className="text-3xl font-semibold mb-2">
          {question.title}{" "}
          <span className="text-xs font-light mb-2 ml-4">
            posted by {question.username}
          </span>
         
        </h2>
      
      <div className="mb-4">
        
        <p className="my-8 text-xl text-gray-800">{question.content}</p>
      </div>
    
      </div>
      </div>
      
    </div>
   
    </>
  )
}
