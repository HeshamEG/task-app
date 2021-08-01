/**
 * GatewayController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const list = (req, res) => {
  const id = req.param('id')
  let query = {}

  !!id ? (query = Gateway.find({ _id: id })) : (query = Gateway.find({}))

  query.populate('peripheralDevices').exec((err, gateways) => {
    if (err) {
      console.log(err)
      res.send(500, { error: "database error" })
    } else {
      return res.json(200, gateways )
    }
  })
}



const add = async (req, res) => {

  try {
    const validateIP = Gateway.validate('IPv4address', req.param('IPv4address'));
    const validateName = Gateway.validate('name', req.param('name'));

  if (!validateName || !validateIP || (validateIP?.length == 0) || (validateName?.length == 0))
    return res.send(422, { error: "Invalid Data" })

  try {
    await Gateway.create({ IPv4address: req.param('IPv4address'), name: req.param('name') }).fetch()
    return res.json(200, "success")
  } catch (e) {
    return res.send(500, { error: "Fail" })
  }
} catch (err) {
  res.send(400, { error: err.ruleViolations[0] })
}
}


module.exports = {
  list,
  add
};

