import Question from "../models/Question.js";

export const handleAddQuestion = async (req, res) => {
    try {
      console.log("this is add question", req.body);
  
      const question = await Question.create(req.body);
      console.log("🚀 ~ question:", Question);
  
      res.send({ success: true });
    } catch (error) {
      console.log("🚀 ~ error in add question:", error.message);
  
      res.status(500).send({ success: false, error: error.message });
    }
  };
  
  export const handleGetAllQuestions = async (req, res) => {
    try {
      console.log("this is get all questions");
  
      const allQuestions = await Question.find();
      console.log("🚀 ~ questions:", allQuestions);
  
      res.send({ success: true, allQuestions });
    } catch (error) {
      console.log("🚀 ~ error in get all questions:", error.message);
  
      res.status(500).send({ success: false, error: error.message });
    }
  };