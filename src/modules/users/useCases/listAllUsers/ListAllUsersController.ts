/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    /* pq nao posso fazer const user_id = request.headers as string; */
    try{
    const user_id = request.headers.user_id as string; 

    const users = this.listAllUsersUseCase.execute({user_id});
    
    return response.json(users)
    }catch(error){
      return response.status(400).json({error: error.message});
    }
  }
}

export { ListAllUsersController };
