import {RestURL} from '../ott/ottrest';

export default class AdminAPI extends RestURL 
{
    scope = '/v1/admin/';
    
    submit(PROJECTARRAY)
    {
        return this.post('submit/', {PROJECTS: PROJECTARRAY});
    }

    remove(PROJECTARRAY)
    {
        return this.post("remove/", {PROJECTS: PROJECTARRAY});
    }

    getComments()
    {
        return this.post("comments/");
    }
}