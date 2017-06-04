import {RestURL} from '../ott/ottrest';

export default class V1API extends RestURL 
{
    scope = "/v1/"

    login(USERNAME, PASSWORD, STAYLOGGED)
    {
        return this.post('login', {USERNAME, PASSWORD, STAYLOGGED});
    }
}