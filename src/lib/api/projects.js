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

    update_project(PROJECTID)
    {
        return this.post('update_project', {PROJECTID});
    }

    explore(DATA = {CATEGORY: '', OWNER:'', AGE:'', TITLE: '', LIMIT: 20, ENDTIME: ''})
    {
        return this.post('explore', DATA);
    }

    delete(UNIQUE_ID)
    {
        return this.post('delete', {UNIQUE_ID});
    }
}