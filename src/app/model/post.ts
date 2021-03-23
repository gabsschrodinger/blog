import { Subject } from "./subject";
import { User } from "./user";

export class Post {
    public id: number;
    public title: string;
    public text: string;
    public date: Date;
    public user: User;
    public subject: Subject;
}