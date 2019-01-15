import { MongoObservable } from 'meteor-rxjs';
import { ProjectModel } from "../models/projectModel";

export const Projects = new MongoObservable.Collection<ProjectModel>('projects');
