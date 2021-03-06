import nextConnect from 'next-connect';
const User = require("../../../controllers/userController");
const handler = nextConnect();

handler
  .get(User.findAll)
  .post(User.create)
  .delete(User.deleteAll);
 
export default handler;