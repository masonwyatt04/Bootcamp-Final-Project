import nextConnect from 'next-connect';
const stats = require("../../../controllers/statsController");
const handler = nextConnect();

handler
  .get(fitnesses.findAll)
  .post(fitnesses.create)
  .delete(fitnesses.deleteAll);
 
export default handler;