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
        if(typeof USERID === "function" && !cb)
        {
            cb = USERID;
            USERID = "";
        }
            
        this.post('user', {USERID, TYPE: "GETOWN"}, cb);
    }

    set_user(DATA, cb)
    {
        this.post('user', {TYPE: "SETOWN", USERID, DATA}, cb);
    }
}