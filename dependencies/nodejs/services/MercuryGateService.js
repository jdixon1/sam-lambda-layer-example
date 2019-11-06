const s3 = require('@aws/s3')
const XMLParser = require('xml2js')

class MercuryGateService {
  
  parseXml(data) {
    return XMLParser.parseStringPromise(data, {
      explicitArray: false
    })
  }

  fetchS3File(filename) {
    return s3.getObject({
      Bucket: 'mg-connector-test-bucket',
      Key: filename
    }).promise()
  }

  /**
   * Fetch a file by file name and parse it into a javascript object
   * @param {string} filename The name of the file to fetch
   */
  async fetchObject(filename) {
    const obj = await this.fetchS3File(filename)
    const str = obj.Body.toString()
    return this.parseXml(str)
  }

}

module.exports = new MercuryGateService()