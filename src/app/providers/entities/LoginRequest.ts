export class LoginRequest {
    userID: number;
    password: string;
    constructor(userID: number, password: string) {
        this.userID = userID;
        this.password = password;
    }
}