import {RestURL} from '../ott/ottrest';

export default class UserAPI extends RestURL 
{
    scope = "/v1/users/"
    check()
    {
        return this.post('login', {CHECK: true});
    }

    user(USERID)
    {
        if(typeof USERID === "function" && !cb)
        {
            cb = USERID;
            USERID = "";
        }
            
        return this.post('user', {USERID, TYPE: "GETOWN"});
    }

    set_user(DATA)
    {
        return this.post('user', {TYPE: "SETOWN", USERID, DATA});
    }
}