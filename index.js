

const getUsers = () => ["dan", "joe", "jane"];
module.exports.handler = async (event) => {
  return {
    getUsers
  };
};
