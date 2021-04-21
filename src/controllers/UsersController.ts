import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService';

class UsersController {
    async create(request: Request, response: Response) {

        const { email } = request.body;

        const usersService = new UsersService();

        try {
            const Users = await usersService.create( email );

            return response.json(Users);

        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }

        
    };
}

export { UsersController }