const categoryService = require("../service/CategoryService");
const httpStatus = require("http-status");
const ApiError = require("../errors/ApiError");

class CategoryController {
  async index(req, res, next) {
    try {
      const response = await categoryService.list();
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async create(req, res, next) {
    try {
      const response = await categoryService.create(req.body);
      res.status(httpStatus.CREATED).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const category = await categoryService.findOne({ _id: id });
      if (!category)
        throw new ApiError("Kategori bulunamadı!", httpStatus.NOT_FOUND);
      const response = await categoryService.update(id, req.body);
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const category = await categoryService.findOne({ _id: id });
      if (!category)
        throw new ApiError("Kategori bulunamadı!", httpStatus.NOT_FOUND);
      const response = await categoryService.delete(id, req.body);
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async findCategoryById(req, res, next) {
    const { id } = req.params;
    try {
      const category = await categoryService.findOne({ _id: id });
      if (!category)
        throw new ApiError("Kategori bulunamadı!", httpStatus.NOT_FOUND);
      res.status(httpStatus.OK).json(category);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }
}

module.exports = new CategoryController();
