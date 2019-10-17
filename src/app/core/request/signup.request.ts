import { IHttpRequest } from 'src/app/http/interfaces/ihttp-request';

export class Signup implements IHttpRequest {
    email: string;
    cpf: string;
    password: string;

    constructor(email: string, cpf: string, password: string){
        this.email = email;
        this.cpf = cpf;
        this.password = password;
    }
}
