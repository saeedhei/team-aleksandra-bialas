import express, { Request, Response } from 'express';
// import galleryRouter from './gallery';
const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response): void => {
  res.render('index', { title: 'Express' });
});

// router.use('/api/images', galleryRouter);

export default router;
