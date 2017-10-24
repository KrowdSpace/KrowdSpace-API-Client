import {RestURL} from '../ott/ottrest';

export default class V1API extends RestURL 
{
    scope = "/v1/"

    login(USERNAME, PASSWORD, STAYLOGGED)
    {
        return this.post('login/', {USERNAME, PASSWORD, STAYLOGGED});
    }

    logout()
    {
        return this.post('login/', {LOGOUT: true});
    }

    check()
    {
        return this.post('login/', {CHECK: true});
    }

    stats()
    {
        return this.post('stats/');
    }
}