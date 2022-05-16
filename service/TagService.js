const BaseService = require("./BaseService");
const Tag = require("../model/Tag");

class TagService extends BaseService {
  constructor() {
    super(Tag);
  }
}

module.exports = new TagService();
