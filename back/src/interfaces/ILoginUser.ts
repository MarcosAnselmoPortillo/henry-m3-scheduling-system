import { User } from "../entities/User";

export interface ILoginUser {
  login: boolean,
  user: {
    id: number;
    name: string;
    email: string;
    birthdate: Date;
    nDni: number;
  }
}

//   "login": true,
//   "user": {
//     "id": 1,
//     "name": "Carlos Gómez",
//     "email": "cgomez@mail.com",
//     "birthdate": "1990-01-01",
//     "nDni": 12345678
//     }
//  }
