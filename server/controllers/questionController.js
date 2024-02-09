import Question from "../models/Question.js";

export const handleAddQuestion = async (req, res) => {
    try {
      console.log("this is add question", req.body);
      
      const question = await Question.create(req.body);
      console.log("🚀 ~ question:", question);
  
      res.send({ success: true });
    } catch (error) {
      console.log("🚀 ~ error in add question:", error.message);
  
      res.status(500).send({ success: false, error: error.message });
    }
  };
  export const handleGetOneQuestion = async (req, res) => {
    try {
      console.log("this is get one question", req.query);
  
      const question = await Question.findById(req.query.id);
      console.log("🚀 ~ question:", question);
  
      res.send({ success: true, question });
    } catch (error) {
      console.log("🚀 ~ error in get one post:", error.message);
  
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

  export const handleDeleteQuestion = async (req, res) => {
    try {
      console.log("this is delete question", req.params.id);
      const question = await Question.findByIdAndDelete(req.params.id);

      console.log("question", question);
      res.send({success:true});
      
    }catch (error){
    console.log("error in delete question", error.message);
    res.status(500).send({success:false, error: error.message});
  }
}

export const handleEditQuestion = async (req, res) => {
  try {
    console.log("this is edit question", req.body);

    const question = await Question.findByIdAndUpdate(
      req.body.question._id,
      {
        ...req.body.question,
      },
      { new: true }
    );
    console.log("🚀 ~ question:", question);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in edit question:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};