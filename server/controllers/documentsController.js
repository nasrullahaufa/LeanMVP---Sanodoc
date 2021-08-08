const checkPassword = require("../helpers/checkHashedPassword");
const hashPassword = require("../helpers/hashPassword");
const fs = require("fs");
const { generateToken } = require("../helpers/jwt");
const { Document } = require("../models");
const QRCode = require("qrcode");
const { PDFDocument } = require("pdf-lib");
const generateQR = require("../helpers/qrcode");
var path = require("path");

class documentsController {
  static async uploadDocument(req, res, next) {
    console.log(req.files);
    try {
      console.log(req.file, "router");
      const file = req.file;
      console.log(file.filename);
      if (!file) {
        const error = new Error("No File");
        error.httpStatusCode = 400;
        return next(error);
      }

      console.log(file.originalname, file.destination);
      const newDocument = await Document.create({
        name: file.originalname,
        storage_path: file.destination,
        url: `googledrive.com/${file.originalname}`,
      });
      // console.log(newDocument)
      let qrImage;

      console.log("sampe");

      await QRCode.toDataURL(
        newDocument.url,
        { width: 600 },
        async function (err, url) {
          console.log(url);
          qrImage = url;

          fs.readFile(
            `./public/documents/${newDocument.name}`,
            async (err, data) => {
              console.log(data);
              const pdfDoc = await PDFDocument.load(data,);
              const pages = await pdfDoc.getPages();
              console.log(pages[0])
              const firstPage = pages[0];
              // const firstPage = pdfDoc.addPage()
              const pngImage = await pdfDoc.embedPng(qrImage);
              console.log(typeof pngImage);

              const pngDims = pngImage.scale(0.18);
              console.log(firstPage.getHeight(), firstPage.getWidth());
              await firstPage.drawImage(pngImage, {
                x: 79,
                y: 189,
                width: pngDims.width,
                height: pngDims.height,
              });
              const pdfBytes = await pdfDoc.save();
              fs.writeFile(
                `./public/documents/${file.originalname}`,
                pdfBytes,
                (err) => {
                  if (err) throw err;
                  res.send(file);
                }
              );
            }
          );
        }
      );

      // await QRCode.toFile(
      //   `./public/qr_images/${file.originalname}.png`,
      //   newDocument.url,
      //   {
      //     width: 400,
      //   },
      //   function (err) {
      //     if (err) throw err;
      //     console.log("done");
      //   }
      // );

      // fs.readFile("./data/documents/tesss.pdf", async (err, data) => {
      //   console.log(data);
      //   fs.readFile(
      //     `./public/qr_images/${file.originalname}.png`,
      //     async (err, image) => {
      //       console.log(image, "image");
      //       const pdfDoc = await PDFDocument.load(data);
      //       const pages = pdfDoc.getPages();
      //       // console.log(pages[0])
      //       const firstPage = pages[0];
      //       // const firstPage = pdfDoc.addPage()
      //       const pngImage = await pdfDoc.embedPng(image);
      //       console.log(typeof pngImage);

      //       const pngDims = pngImage.scale(0.5);
      //       console.log(firstPage.getHeight(), firstPage.getWidth());
      //       await firstPage.drawImage(pngImage, {
      //         x: 300,
      //         y: 300,
      //         width: pngDims.width,
      //         height: pngDims.height,
      //       });
      //       const pdfBytes = await pdfDoc.save();
      //       fs.writeFile(
      //         `./public/documents/${file.originalname}.pdf`,
      //         pdfBytes,
      //         (err) => {
      //           if (err) throw err;
      //           res.send(file);
      //         }
      //       );
      //     }
      //   );
      // });

      // console.log(pdfDoc.getPageCount());
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const allDocuments = await Document.findAll({order:[['createdAt','DESC']]});
      //console.log(allDocuments);
      res.status(200).json(allDocuments);
    } catch (err) {
      next(err);
    }
  }

  static async downloadOne(req, res, next) {
    console.log("masuk", req.params);
    const { id } = req.params;
    try {
      const document = await Document.findByPk(id);
      console.log(document);
      if (document) {
        console.log("sampe");
        var options = {
          root: path.join(__dirname, "../public/documents"),
          dotfiles: "deny",
          headers: {
            "x-timestamp": Date.now(),
            "x-sent": true,
          },
        };
        var fileName = document.name;
        res.sendFile(fileName, options, function (err) {
          if (err) {
            console.log(err);
            next(err);
          } else {
            console.log("Sent:", fileName);
          }
        });
      } else {
        next(err);
      }
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
}

module.exports = documentsController;
