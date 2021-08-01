/**
 * PeripheralDevicesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



 const add = async (req, res) => {

  try {
    const gateDevicesCount=await PeripheralDevices.count({gateway:req.param('gateway')})

    if(gateDevicesCount>=10)
    return res.send(422, { error: `Devices count ${gateDevicesCount}  full please remove a device to add new` })

    await PeripheralDevices.create({ UID:req.param('UID'),
    vendor:req.param('vendor') ,
    status:req.param('status'),
    gateway:req.param('gateway')
  }).fetch()
    return res.json(200, "success")
  } catch (e) {
    return res.send(500, { error: "Fail" })
  }
}

const remove=async(req,res)=>{
  try{
  await Gateway.removeFromCollection(req.param('gateway'), "peripheralDevices").members([req.param('id')]);
  return res.json(200, "success")
}catch(e){
  return res.send(500, { error: "Fail" })
}
}
module.exports = {
  add,
  remove
};

