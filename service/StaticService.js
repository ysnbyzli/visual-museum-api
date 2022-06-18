const personService = require("./PersonService");
const eventService = require("./EventService");
const categoryService = require("./CategoryService");
const tagService = require("./TagService");

class StaticService {
  async getAllCount() {
    const person = await personService.getCount();
    const tag = await tagService.getCount();
    const event = await eventService.getCount();
    const category = await categoryService.getCount();

    return {
      person,
      tag,
      event,
      category,
    };
  }

  getCategoriesCount() {
    return personService.groupByCategoriesCount();
  }
}

module.exports = new StaticService();
