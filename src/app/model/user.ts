import { Post } from "./post";

export class User {
    public id: number;
    public name: string;
    public username: string;
    public password: string;
    public picture: string;
    public type: string;
    public post: Post[];
}