import nextConnect from 'next-connect';
const Stats = require("../../../controllers/statsController");
const handler = nextConnect();

handler
  .get(Stats.findAll)
  .post(Stats.create)
  .delete(Stats.deleteAll);
 
export default handler;