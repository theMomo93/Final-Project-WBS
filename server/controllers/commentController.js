import Comment from "../models/Comment.js";

export const handleAddComment = async (req, res) => {
  try {
    console.log("this is add comment", req.body);
    
    const comment = await Comment.create({
      content: req.body.content,
      questionId: req.body.questionId,
      userId: req.body.userId, // Assuming user data is in req.body
      username: req.body.username
    });

    console.log("🚀 ~ comment:", comment);
    console.log("🚀 ~ content:", req.body.content);
    console.log("🚀 ~ questionId:", req.body.questionId);
    console.log("🚀 ~ user:", req.body.user);
    console.log("🚀 ~ username:", req.body.username);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in add comment:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};



export const handleGetAllComments = async (req, res) => {
  try {
    console.log("this is get all comments", req.params.id);

    const allComments = await Comment.find({ questionId: req.params.id });
    console.log("🚀 ~ comments:", allComments);

    res.send({ success: true, allComments });
  } catch (error) {
    console.log("🚀 ~ error in get all comments:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};


export const handleDeleteComment = async (req, res) => {
  try {
    console.log("this is delete comment", req.params.id);
    const comment = await Comment.findByIdAndDelete(req.params.id);

    console.log("comment", comment);
    res.send({success:true});
    
  }catch (error){
  console.log("error in delete comment", error.message);
  res.status(500).send({success:false, error: error.message});
}
}


export const handleEditComment = async (req, res) => {
  try {
    console.log("this is edit comment", req.body);

    const comment = await Comment.findByIdAndUpdate(
      req.body.comment._id,
      {
        ...req.body.comment,
      },
      { new: true }
    );
    console.log("🚀 ~ comment:", comment);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in edit comment:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};