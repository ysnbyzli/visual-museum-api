const Person = require("../model/Person");
const BaseService = require("./BaseService");

class PersonService extends BaseService {
  constructor() {
    super(Person);
  }

  list(where) {
    return this.BaseModel.find(where || {})
      .sort({ createdAt: -1 })
      .populate({
        path: "category",
        select: "title _id",
      })
      .populate({
        path: "tags",
        select: "title color",
      });
  }

  listTopViewingPerson() {
    return Person.find({})
      .sort({ viewing: -1 })
      .limit(5)
      .populate({
        path: "category",
        select: "title _id",
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

  listByLimit(where, limit) {
    return this.BaseModel.find(where || {})
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate({
        path: "category",
        select: "title _id",
      })
      .populate({
        path: "tags",
        select: "title color",
      });
  }

  updateViewing(where) {
    return this.BaseModel.updateOne(where, { $inc: { viewing: 1 } });
  }

  async groupByCategoriesCount() {
    const counts = await this.BaseModel.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "_id",
          as: "category",
        },
      },
    ]);
    return await this.BaseModel.populate(counts, {
      path: "category",
      select: "title _id",
    });
  }
}

module.exports = new PersonService();
