import { AppDataSource } from "../config/appDataSource";
import { CredentialDto } from "../dtos/CredentialDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";

export const createCredential = async (
  credentialDto: CredentialDto
): Promise<Credential> => {
  const foundCredential = await AppDataSource.getRepository(Credential).findOne(
    {
      where: { username: credentialDto.username },
    }
  );

  if (!foundCredential) {
    const newCredential = {
      username: credentialDto.username,
      password: credentialDto.password,
    };
    const credentialSaved = await AppDataSource.getRepository(Credential).save(
      newCredential
    );
    return credentialSaved;
  } else throw new Error("Ya existe un usuario con ese username");
};

// Return user if username and password  match or null otherwise
export const validateCredential = async (
  credentialDto: CredentialDto
): Promise<User> => {
  const foundCredential: Credential | null = await AppDataSource.getRepository(
    Credential
  ).findOne({
    where: {
      username: credentialDto.username,
    },
  });
  if (foundCredential && foundCredential.password === credentialDto.password) {
    const user: User | null = await AppDataSource.getRepository(User).findOne({
      where: {
        credential: { id: foundCredential.id },
      },
    });
    if (!user) throw Error("No existe un usuario con ese usuario y password");
    else return user;
  }
  throw Error("Invalid Username or Password");
};
