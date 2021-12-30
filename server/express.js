import cors from 'cors';
import path from 'path';
import helmet from "helmet";
import express from "express";
import compress from 'compression';
import Template from "./../template";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import devBundle from './devBundle';

// for development mode only
import devBundle from './devBundle';

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

// for development mode only
devBundle.compile(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)

app.get('/', (req, res) => {
  res.status(200).send(Template());
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  } else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message});
    console.log(err);
  }
});

export default app;