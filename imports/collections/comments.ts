import { MongoObservable } from 'meteor-rxjs';
import { CommentsModel } from "../models/commentsModel";

export const Comments = new MongoObservable.Collection<CommentsModel>('comments');
