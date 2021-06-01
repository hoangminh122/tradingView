import { User } from "src/entities/user";

export const userRepository = {
    provide:'UserRepository',
    useValue:User
}
