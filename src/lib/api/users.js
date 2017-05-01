import {RestURL} from '../ott/ottrest';

export default class UserAPI extends RestURL 
{
    scope = "/users/"
    check(cb)
    {
        return this.post('login', {CHECK: true});
    }

    login(USERNAME, PASSWORD, STAYLOGGED)
    {
        return this.post('login', {USERNAME, PASSWORD, STAYLOGGED});
    }

    user(USERID, cb)
    {
        if(typeof USERID === "function" && !cb)
        {
            cb = USERID;
            USERID = "";
        }
            
        return this.post('user', {USERID, TYPE: "GETOWN"}, cb);
    }

    set_user(DATA, cb)
    {
        return this.post('user', {TYPE: "SETOWN", USERID, DATA}, cb);
    }
}