const BaseData = require('./base/base.data');
const Question = require('../models/question.model');

class QuestionsData extends BaseData {
    constructor(db) {
        super(db, Question);
    }
}

module.exports = QuestionsData;
