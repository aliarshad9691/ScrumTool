import { TaskModel } from "./taskModel";

export interface CommentModel {
    _id?: string;
    name: string;
    description: string;
    task: TaskModel;
    order: number;
    status: number;
}
