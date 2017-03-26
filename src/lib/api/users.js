import {RestURL} from '../ott/ottrest';

export default class UserAPI extends RestURL 
{
    scope = "/users/"
    check(cb)
    {
        this.post('login', {CHECK: true}, cb);
    }

    login(user, pass, stayLog, cb)
    {
        this.post('login', {USERNAME: user, PASSWORD: pass, STAYLOGGED: stayLog}, cb);
    }

    getDetails(userID, cb)
    {
        this.post(userID, {}, cb);
    }
}