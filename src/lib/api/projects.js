import {RestURL} from '../ott/ottrest';

export default class ProjectsAPI extends RestURL 
{
    scope = '/projects/';
    
    project(PROJECTID, cb)
    {
        return this.post('projects', {PROJECTID}, cb);
    }
}