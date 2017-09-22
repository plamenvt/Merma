module.exports = (db) => {
    return {
        getAll() {
            return Promise.resolve()
                .then(() => {
                    return db.get("questions")
                        .value();
                });
        },
        getById(id) {
            return Promise.resolve()
                .then(() => {
                    const question = db.get("questions")
                        .getById(id).value();
                    return question;
                });
        },
        add(question) {
            return Promise.resolve()
                .then(() => {
                    const id = db.get("questions").insert(question)
                        .write()
                        .id;
                    return db.get("boquestionsoks")
                        .getById(id);
                });
        },
    };
};
