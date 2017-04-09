import {RestURL} from '../ott/ottrest';

export default class RegisterAPI extends RestURL 
{
    scope = '/register/';

    user(FNAME, LNAME, EMAIL, USERNAME, PASSWORD, KS_USER, IG_USER, cb)
    {
        this.post('user', { FNAME, LNAME, USERNAME, EMAIL, PASSWORD, KS_USER, IG_USER }, cb);
    }

    project(CAT, URL, REWARD, cb)
    {
        this.post('project', { NAME, URL }, cb);
    }

    email_list(FNAME, LNAME, EMAIL, KSUSER, IGUSER, PVALID, cb)
    {
        this.post('email_list', { FNAME, LNAME, EMAIL, IGUSER, PVALID }, cb);
    }

    contact_us(FNAME, LNAME, EMAIL, COMMENT, cb)
    {
        this.post('contact_us', { FNAME, LNAME, EMAIL, COMMENT }, cb);
    }

    verify(VERIFYCODE, cb)
    {
        this.post('verify', { VERIFYCODE }, cb);
    }
}