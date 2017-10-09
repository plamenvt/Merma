const BaseData = require('./base/base.data');
const Response = require('../models/response.model');

class ResponsesData extends BaseData {
    constructor(db) {
        super(db, Response);
    }
}

module.exports = ResponsesData;