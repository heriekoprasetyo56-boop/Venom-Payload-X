const adminList = require('../admin.json'); // Import dari luar folder admin

const isAdmin = (userId) => {
  return adminList.includes(userId);
};

module.exports = { isAdmin };
