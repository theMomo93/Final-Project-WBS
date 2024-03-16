import Event from "../models/Event.js";

export const handleAddEvent = async (req, res) => {
    try {
      console.log("this is add event", req.body);
      
      const event = await Event.create(req.body);
      console.log("🚀 ~ event:", event);
  
      res.send({ success: true });
    } catch (error) {
      console.log("🚀 ~ error in add event:", error.message);
  
      res.status(500).send({ success: false, error: error.message });
    }
  };

  export const handleGetAll =async(req, res) => {
    try {
      console.log("this is get all events");
  
      const allEvents = await Event.find();
      console.log("🚀 ~ event:", allEvents);
  
      res.send({ success: true, allEvents });
    } catch (error) {
      console.log("🚀 ~ error in get all events:", error.message);
  
      res.status(500).send({ success: false, error: error.message });
    }
  };

  export const handleDeleteEvent = async(req, res) => {
    try {
      console.log("this is delete event", req.params.id);
      const event = await Event.findByIdAndDelete(req.params.id);

      console.log("event", event);
      res.send({success:true});
      
    }catch (error){
    console.log("error in delete event", error.message);
    res.status(500).send({success:false, error: error.message});
  }
}

export const handleEditEvent = async (req, res) => {
  try {
    console.log("this is edit event", req.body);

    const event = await Event.findByIdAndUpdate(
      req.params.eventId, // Access eventId from URL params
      {
        ...req.body,
      },
      { new: true }
    );
    console.log("🚀 ~ event:", event);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in edit event:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

