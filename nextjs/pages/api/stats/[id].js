import nextConnect from 'next-connect';
const Stats = require("../../../controllers/statsController");
const handler = nextConnect();

handler
  .get(Stats.findOne)
  .put(Stats.update)
  .delete(Stats.delete);
 
export default handler;