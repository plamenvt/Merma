const { ObjectID } = require('mongodb');

class BaseMongoDbData {
    constructor(db, ModelClass) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    filterBy(props) {
        return this.collection.find(props)
            .toArray();
    }

    getAll() {
        return this.collection.find()
            .toArray()
            .then((models) => {
                return models;
            });
    }

    getCollectionCount() {
        return this.collection.count();
    }

    create(model) {
        // if (!this._isModelValid(model)) {
        //     return Promise.reject('Invalid model');
        // }

        return this.collection.insert(model)
            .then(() => {
                return this.ModelClass.toViewModel(model);
            })
            .catch(function(err) {
                throw err;
            });
    }

    findById(id) {
        return this.collection.findOne({
            _id: new ObjectID(id),
        });
    }

    findOrCreateBy(props) {
        return this.filterBy(props)
            .then(([model]) => {
                if (!model) {
                    model = {};
                    return this.collection.insert(model)
                        .then(() => {
                            return model;
                        });
                }

                return model;
            });
    }

    updateById(model) {
        return this.collection.updateOne({
            _id: model._id,
        }, model);
    }

    _getCollectionName() {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseMongoDbData;
