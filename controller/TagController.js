const tagService = require("../service/TagService");
const httpStatus = require("http-status");
const ApiError = require("../errors/ApiError");

class TagController {
  async index(req, res, next) {
    try {
      const response = await tagService.list();
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async create(req, res, next) {
    try {
      const response = await tagService.create(req.body);
      res.status(httpStatus.CREATED).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const category = await tagService.findOne({ _id: id });
      if (!category)
        throw new ApiError("Kategori bulunamadı!", httpStatus.NOT_FOUND);
      const response = await tagService.update(id, req.body);
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const category = await tagService.findOne({ _id: id });
      if (!category)
        throw new ApiError("Kategori bulunamadı!", httpStatus.NOT_FOUND);
      const response = await tagService.delete(id, req.body);
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async findTagById(req, res, next) {
    const { id } = req.params;
    try {
      const category = await tagService.findOne({ _id: id });
      if (!category)
        throw new ApiError("Kategori bulunamadı!", httpStatus.NOT_FOUND);
      res.status(httpStatus.OK).json(category);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }
}

module.exports = new TagController();
