const eventService = require("../service/EventService");
const httpStatus = require("http-status");
const ApiError = require("../errors/ApiError");

class EventController {
  async index(req, res, next) {
    try {
      const response = await eventService.list();
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async create(req, res, next) {
    try {
      const response = await eventService.create(req.body);
      res.status(httpStatus.CREATED).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const person = await eventService.findOne({ _id: id });
      if (!person) throw new ApiError("Kişi bulunamadı!", httpStatus.NOT_FOUND);
      const response = await eventService.update(id, req.body);
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const person = await eventService.findOne({ _id: id });
      if (!person) throw new ApiError("Kişi bulunamadı!", httpStatus.NOT_FOUND);
      const response = await personService.delete(id, req.body);
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }
}

module.exports = new EventController();
