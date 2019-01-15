import { ProjectModel } from "./projectModel";
import { CommentsModel } from "./commentsModel";
import { Meteor } from "meteor/meteor";
import { CommentModel } from "./commentModel";

export interface TaskModel {
    _id?: string;
    name: string;
    description: string;
    project: ProjectModel;
    user: Meteor.User;
    dueDate: Date;
    completedDate: Date;
    bugs: number;
    comments: CommentModel[];
    order: number;
    status: number;
}
