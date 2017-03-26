import {RestUrl} from '../ott/ottrest';

export default class UserAPI extends RestUrl 
{
    scope = "/users/"
    check(cb)
    {
        this.post('login', {CHECK: true}, cb);
    }

    login(user, pass, cb, stayLog = true)
    {
        this.post('login', {USERNAME: user, PASSWORD: pass, STAYLOGGED: stayLog}, cb);
    }

    getDetails(userID, cb)
    {
        this.post(userID, {}, cb);
    }
}