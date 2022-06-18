const staticService = require("../service/StaticService");
const httpStatus = require("http-status");
const ApiError = require("../errors/ApiError");

class StaticController {
  async getPersonsByCategoriesCount(req, res, next) {
    try {
      const response = await staticService.getCategoriesCount();
      console.log(response);
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async getAllCountStatics(req, res, next) {
    try {
      const response = await staticService.getAllCount();
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }
}

module.exports = new StaticController();
