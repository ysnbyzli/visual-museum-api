const BaseService = require("./BaseService");
const Event = require("../model/Event");

class EventService extends BaseService {
  constructor() {
    super(Event);
  }

  list(where) {
    return this.BaseModel.find(where || {}).populate({
      path: "tags",
      select: "title color",
    });
  }
}

module.exports = new EventService();
