import { IHttpRequest } from 'src/app/http/interfaces/ihttp-request';

export class Login implements IHttpRequest {
    login: string;
    password: string;

    constructor(
        login: string,
        password: string
    ){
        this.login = login;
        this.password = password;
    }
}
