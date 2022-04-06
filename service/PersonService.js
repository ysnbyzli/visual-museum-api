const Person = require("../model/Person");
const BaseService = require("./BaseService");

class PersonService extends BaseService {
  constructor() {
    super(Person);
  }
}

module.exports = new PersonService();
