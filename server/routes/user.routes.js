import express from "express";
import userCtrl from "../controllers/user.controller";
const router = express.Router();

router.route('/api/users')
.get(userCtrl.list)
.post(userCtrl.create);


router.param('userId', userCtrl.userById);

export default router;