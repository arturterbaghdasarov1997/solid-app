export interface IBaseUser {
    id: string;
    name: string;
}

export interface IUser extends IBaseUser {
    username: string;
}