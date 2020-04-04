import nextConnect from 'next-connect';
const User = require("../../../controllers/userController");
const handler = nextConnect();

handler
  .get(User.findOne)
  .put(User.update)
  .delete(User.delete);
 
export default handler;