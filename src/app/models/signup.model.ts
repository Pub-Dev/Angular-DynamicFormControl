export class Signup {
    cpf: string;
    email: string;
    password: string;
    passwordConfirmation: string;

    constructor(cpf: string,
                email: string,
                password: string,
                passwordConfirmation: string){
        this.cpf = cpf;
        this.email = email;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
    }
}
