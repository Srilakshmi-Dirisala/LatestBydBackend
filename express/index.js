const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { endpoint } = require('../config');
const { poolPromise } = require('../database');
const login = require('../src/routes/login.route')
const courseData=require('../src/routes/courses.route')

module.exports = () => {
  poolPromise;
  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use((error, request, response, next) => {
    if (error !== null) {
      return response.json({ status: 401, message: "Invalid json", error: error });
    }
    next();
    app.use((req, res, next) => {
      if (req.headers.apikey || req.query.apikey) {
        if (req.headers.apikey == process.env.API_KEY || req.query.apikey == process.env.API_KEY) {
          return next();
        } else {
          return res.status(401).json({
            message: "Invalid apikey"
          })
        }
      } else {
        return res.status(401).json({
          message: "Required apikey"
        })
      }
    })
  });

  app.use(endpoint,login)
  app.use(endpoint,courseData)
  return app;
}