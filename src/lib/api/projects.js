import {RestURL} from '../ott/ottrest';

export default class ProjectsAPI extends RestURL 
{
    scope = '/v1/projects/';
    
    project(PROJECTID)
    {
        return this.post('projects', {PROJECTID});
    }
    set_project(PROJECTID, DATA)
    {
        return this.post('set_project', {PROJECTID, DATA});
    }
}