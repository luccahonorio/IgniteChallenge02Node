/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const EmailAlreadyExists = this.usersRepository.findByEmail(email)

    if(EmailAlreadyExists){
      throw new Error("E-mail already exists")
    }

    const user = this.usersRepository.create({name, email})

    return user
  }
}

export { CreateUserUseCase };
