const BaseService = require("./BaseService");
const Category = require("../model/Category");

class CategoryService extends BaseService {
  constructor() {
    super(Category);
  }
}

module.exports = new CategoryService();
