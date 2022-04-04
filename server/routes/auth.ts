import express, { Request,Response } from 'express';

const router = express.Router();

router.post('/user', (req: Request, res: Response) => {
	if (req.body.user === 'user' && req.body.password === 'password') {
        return res.send({message: 'успешный вход'})
	}
    return res.send({error: 'неверный пароль'})
});

export { router as userRoute };
