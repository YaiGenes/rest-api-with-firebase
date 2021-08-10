const { admin, auth, verifyIdToken } = require("./firebase");
const { getAuthToken } = require("./get-auth-token");

module.exports = {
  admin: admin,
  auth: auth,
  verifyAuthToken: verifyIdToken,
  getAuthToken: getAuthToken,
};
