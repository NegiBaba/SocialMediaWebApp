import config from '../config/config';
import app from './express';
import path from 'path';
import express from 'express';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import template from './../template';
//comment out before building for production
import devBundle from './devBundle';


app.listen(config.port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', config.port);
});

// const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(err, db)=>{
//   console.log("Connected successfully to mongodb server")
//   db.close()
// })

// mongoose.Promise = global.Promise;
// mongoose.connect(config.mongoUri, { useNewUrlParser: true,
//  useCreateIndex: true,
//  useUnifiedTopology: true } );
// mongoose.connection.on('error', () => {
//  throw new Error(`unable to connect to database: ${mongoUri}`);
// });
