const Person = require("../model/Person");
const BaseService = require("./BaseService");

class PersonService extends BaseService {
  constructor() {
    super(Person);
  }

  list(where) {
    return this.BaseModel.find(where || {})
      .populate({
        path: "category",
        select: "title",
      })
      .populate({
        path: "tags",
        select: "title color",
      });
  }

  findOne(where) {
    return this.BaseModel.findOne(where)
      .populate({
        path: "category",
        select: "title",
      })
      .populate({
        path: "tags",
        select: "title color",
      });
  }
}

module.exports = new PersonService();
