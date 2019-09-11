import express from 'express';
import path from 'path';
// import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import reload from 'reload'

const app = express();
const PORT = 3334

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);

// Reload code here
reload(app).then((reloadReturned) => {
  app.listen(PORT, () => {
    console.log('server running....')
  })
}).catch((err) => {
  console.error('Reload could not start, could not start server/sample app', err)
})





export default app;