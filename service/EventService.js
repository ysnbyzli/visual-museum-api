const BaseService = require("./BaseService");
const Event = require("../model/Event");

class EventService extends BaseService {
  constructor() {
    super(Event);
  }

  list(where) {
    return this.BaseModel.find(where || {})
      .sort({ startDate: 1 })
      .populate({
        path: "tags",
        select: "title color",
      });
  }

  listByLimit(where, limit) {
    return this.BaseModel.find(where || {})
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate({
        path: "tags",
        select: "title color",
      });
  }
}

module.exports = new EventService();
