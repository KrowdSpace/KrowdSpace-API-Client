import {RestURL} from '../ott/ottrest';

export default class ProjectsAPI extends RestURL 
{
    scope = '/projects/';
    
    project(PROJECTID)
    {
        return this.post('projects', {PROJECTID});
    }
}