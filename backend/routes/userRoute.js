import express from 'express'
import { updateUsers, deleteUsers, getsingleUsers, getAllUsers,  } from '../controllers/userController.js';
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.put('/:id', verifyUser, updateUsers);

router.delete('/:id',verifyUser, deleteUsers);

router.get('/:id',verifyUser, getsingleUsers);

router.get('/',verifyAdmin, getAllUsers);

export default router;