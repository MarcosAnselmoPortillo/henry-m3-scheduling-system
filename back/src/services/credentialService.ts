import { ICredentialDto } from '../dtos/ICredentialDto';
import { ICredential } from '../interfaces/ICredential';

let credentialsData: ICredential[] = [];
let credentialsIdCounter: number = 1;

export const credentialService = {
    createCredential: async (credentialDto: ICredentialDto): Promise<number> => {
        const newCredentials: ICredential = {
            id: credentialsIdCounter++,
            username: credentialDto.username,
            password: credentialDto.password
        };
        credentialsData.push(newCredentials);
        return newCredentials.id;
    },

    validateCredential: async (credentialDto: ICredentialDto): Promise <number> => {
        const foundCredential = credentialsData.find(credential => credential.username === credentialDto.username);
        if (foundCredential && foundCredential.password === credentialDto.password) {
            return foundCredential.id;
        }
        throw Error('Invalid Username or Password');
    }
};
