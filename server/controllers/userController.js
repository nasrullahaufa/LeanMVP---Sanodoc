const checkPassword = require("../helpers/checkHashedPassword");
const hashPassword = require("../helpers/hashPassword");
const fs = require("fs");
const { generateToken } = require("../helpers/jwt");

class userController {
  static async login(req, res, next) {
    const { username, password } = req.body;

    await fs.readFile("./data/user/user.json", "utf8", (err, data) => {
      if (err) {
        next(err);
      } else {
        const userList = JSON.parse(data);
        if (userList[0].username === username) {
          const isPasswordMatch = checkPassword(password, userList[0].password);
          if (isPasswordMatch) {
            const token = generateToken({ username });
            console.log(token);
            res.status(200).json(token);
          } else {
            next({
              name: "BADUSERPASS",
              message: "Username atau Password salah",
            });
          }
        } else {
          next({
            name: "BADUSERPASS",
            message: "Username atau Password salah",
          });
        }
      }
    });
  }
}

module.exports = userController;
