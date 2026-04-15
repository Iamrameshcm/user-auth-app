const authService = require("../services/auth.service");

exports.login = (req, res) => {
  const result = authService.login(req.body);

  if (!result.success) {
    return res.status(400).json(result);
  }

  return res.status(200).json(result);
};
