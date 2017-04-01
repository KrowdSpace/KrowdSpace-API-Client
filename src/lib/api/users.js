import {RestURL} from '../ott/ottrest';

export default class UserAPI extends RestURL 
{
    scope = "/users/"
    check(cb)
    {
        this.post('login', {CHECK: true}, cb);
    }

    login(USERNAME, PASSWORD, STAYLOGGED, cb)
    {
        this.post('login', {USERNAME, PASSWORD, STAYLOGGED}, cb);
    }

    user(USERID, cb)
    {
        this.post('user', {USERID}, cb);
    }

    set_user(USERID, DATA, cb)
    {
        this.post('user', {SET: TRUE, USERID, DATA}, cb);
    }
}