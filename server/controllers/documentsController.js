const checkPassword = require("../helpers/checkHashedPassword");
const hashPassword = require("../helpers/hashPassword");
const fs = require("fs");
const { generateToken } = require("../helpers/jwt");
const { Document } = require('../models')

class documentsController {
  static async uploadDocument(req, res, next) {
      console.log(req.files)
      console.log(req.file,'router')
      const file = req.file;
      console.log(file.filename);
      if (!file) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
      }

      console.log(file.originalname,file.destination)
      const newDocument = await Document.create({name: file.originalname, storage_path:file.destination,url:`googledrive.com/${file.originalname}`})
      console.log(newDocument) 
      await res.send(file);

  }

  static async getAll(req, res, next){
    try{
      const allDocuments = await Document.findAll()
      console.log(allDocuments)
      res.status(200).json(allDocuments)
    }catch(err){
      next(err)
    }
  }
}

module.exports = documentsController;
