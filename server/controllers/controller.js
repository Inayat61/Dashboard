const Agriculture = require("../models/models");

async function getData(req, res) {
  let data = await Agriculture.find({});
  console.log(data);
  let filter = data.map((v) =>
    Object.assign(
      {},
      {
        date: v.date,
        province: v.province,
        station: v.station,
        minimun: v.minimun,
        maximun: v.maximun,
      }
    )
  );
  return res.json(data);
}
module.exports = {
  getData,
};
