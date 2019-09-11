import express from 'express';
import path from 'path';

const publicDir = path.join(__dirname, '../../public')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('route one')
  res.sendFile(path.join(publicDir, 'index.html'))
});

export default router;