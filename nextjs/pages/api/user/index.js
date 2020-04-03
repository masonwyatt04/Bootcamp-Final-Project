import nextConnect from 'next-connect';
const user = require("../../../controllers/userController");
const handler = nextConnect();

handler
  .get(fitnesses.findAll)
  .post(fitnesses.create)
  .delete(fitnesses.deleteAll);
 
export default handler;