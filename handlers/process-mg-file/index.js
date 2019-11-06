require('module-alias/register')
const MercuryGateService = require('@services/MercuryGateService')

exports.handler = async event => {
  const filename = event.filename
  console.log('tryna get dat file: ', filename)
  const obj = await MercuryGateService.fetchObject(filename)

  return {
    statusCode: 200,
    body: {
      obj
    }
  }
}