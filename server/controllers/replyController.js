import Reply from "../models/Reply.js";

export const handleAddReply = async (req, res) => {
    try {
      console.log("this is add reply", req.body);
  
      const reply = await Reply.create({
        content: req.body.content,
        commentId: req.body.commentId,
        username: req.body.username,
      });
  
      res.send({ success: true, reply });
    } catch (error) {
      console.log("error in server-side reply", error.message);
      res.status(500).send({ success: false, error: error.message });
    }
  };

  export const handleGetAllReplies = async (req, res) => {
    try {
      console.log("this is get all replies", req.params.id);
  
      const allReplies = await Reply.find({ commentId: req.params.commentId });

      console.log("🚀 ~ comments:", allReplies);
  
      res.send({ success: true, allReplies });

    } catch (error) {
      console.log("🚀 ~ error in get all comments:", error.message);
  
      res.status(500).send({ success: false, error: error.message });
    }
  };
  
  export const handleDeleteReply = async (req, res) => {
    try {
      console.log("this is delete reply", req.params.id);
      const reply = await Reply.findByIdAndDelete(req.params.id);
  
      console.log("reply", reply);
      res.send({success:true});
      
    }catch (error){
    console.log("error in delete comment", error.message);
    res.status(500).send({success:false, error: error.message});
  }
  }
  

  export const handleEditReply = async (req, res) => {
    try {
      console.log("this is edit reply", req.body);
  
      const reply = await Reply.findByIdAndUpdate(
        req.body.reply._id,
        {
          content: req.body.reply.content, // Assuming 'content' is the property you want to update
        },
        { new: true }
            );
      console.log("🚀 ~ reply:", reply);
  
      res.send({ success: true });
    } catch (error) {
      console.log("🚀 ~ error in edit reply:", error.message);
  
      res.status(500).send({ success: false, error: error.message });
    }
  };