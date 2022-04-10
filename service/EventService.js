const BaseService = require("./BaseService");
const Event = require("../model/Event");

class EventService extends BaseService {
  constructor() {
    super(Event);
  }
}

module.exports = new EventService();
