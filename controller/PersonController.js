const httpStatus = require("http-status");
const ApiError = require("../errors/ApiError");
const personService = require("../service/PersonService");

class PersonController {
  async index(req, res, next) {
    const { limit } = req.query;
    try {
      let response;
      if (!limit) {
        response = await personService.list();
      } else {
        response = await personService.listByLimit(null, parseInt(limit));
      }
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async indexByLimit(req, res, next) {
    try {
      const response = await personService.listByLimit();
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async create(req, res, next) {
    try {
      const response = await personService.create(req.body);
      res.status(httpStatus.CREATED).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const person = await personService.findOne({ _id: id });
      if (!person) throw new ApiError("Kişi bulunamadı!", httpStatus.NOT_FOUND);
      const response = await personService.update(id, req.body);
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const person = await personService.findOne({ _id: id });
      if (!person) throw new ApiError("Kişi bulunamadı!", httpStatus.NOT_FOUND);
      const response = await personService.delete(id, req.body);
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async findById(req, res, next) {
    const { id } = req.params;
    try {
      await personService.updateViewing({ _id: id });
      const response = await personService.findOne({ _id: id });
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }

  async indexTopViewing(req, res, next) {
    try {
      const response = await personService.listTopViewingPerson();
      res.status(httpStatus.OK).json(response);
    } catch (error) {
      next(new ApiError(error?.message));
    }
  }
}

module.exports = new PersonController();
