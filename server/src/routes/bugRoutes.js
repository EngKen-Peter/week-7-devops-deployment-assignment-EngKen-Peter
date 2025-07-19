import express from 'express';
import {
  getBugs,
  createBug,
  getBugById,
  updateBug,
  deleteBug,
} from '../controllers/bugController.js';

const router = express.Router();

router.route('/').get(getBugs).post(createBug);
router.route('/:id').get(getBugById).put(updateBug).delete(deleteBug);

export default router;
