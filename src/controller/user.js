const userModel = require('../model/user');
const MiscHelper = require('../helper/helper');
const userController = {
  getUsers: (req, res) => {
    userModel.getUsers()
      .then(result => {
        MiscHelper.response(res, result,200);
      })
      .catch(err => res.send(err));
  }
};

module.exports = userController;