const express = require("express");

const application = () => {
    const app = express();
    return app;
};

module.exports = { application };