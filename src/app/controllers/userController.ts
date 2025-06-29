import express, { Request, Response } from 'express';
import { Users } from '../model/users.model';

export const userRoute = express.Router();

//route for get all users
userRoute.get('/', async (req: Request, res: Response) => {
  try {
    const users = await Users.find();
    if (users.length === 0) {
      res.status(200).json({
        success: true,
        message: 'No user register yet',
        users,
      });
    } else {
      res.status(200).json({
        success: true,
        users,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//route for create user
userRoute.post('/create-user', async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const users = await Users.create(body);

    res.status(201).json({
      createSuccess: true,
      message: 'User created successfully',
      users: users,
    });
  } catch (error: any) {
    if (error.errorResponse.code === 11000) {
      res.status(409).json({
        createSuccess: false,
        message: 'User already registered with this email ',
      });
    } else {
      res.status(400).json({
        createSuccess: false,
        message: 'Failed to create user',
        error: error.errorResponse.code,
      });
    }
  }
});
//route for update user
userRoute.patch('/update', async (req: Request, res: Response) => {
  const filter = req.query;
  const body = req.body;
  try {
    const user = await Users.findOneAndUpdate(filter, body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404).json({
        updateSuccess: false,
        message: 'User not found',
      });
    } else {
      res.status(200).json({
        updateSuccess: true,
        message: 'User updated successfully',
        user: user,
      });
    }
  } catch (error: any) {
    if (error.errorResponse.code === 11000) {
      res.status(409).json({
        updateSuccess: false,
        message: 'User already registered with this email ',
      });
    } else {
      res.status(400).json({
        updateSuccess: false,
        message: 'Failed to update user',
        error: error.errorResponse.code,
      });
    }
  }
});
//route for delete user
userRoute.delete('/delete', async (req: Request, res: Response) => {
  const filter = req.query;

  try {
    const user = await Users.findOneAndDelete(filter, { new: true });

    if (!user) {
      res.json({
        deleteSuccess: false,
        message: 'User not found',
      });
    } else {
      res.json({
        deleteSuccess: true,
        message: 'User deleted successfully',
        user: user,
      });
    }
  } catch (error: any) {
    res.json({
      deleteSuccess: false,
      error: error.message,
    });
  }
});
