import { MongoObservable } from 'meteor-rxjs';
import { TaskModel } from "../models/taskModel";

export const Tasks = new MongoObservable.Collection<TaskModel>('tasks');
