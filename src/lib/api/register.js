import {RestURL} from '../ott/ottrest';

export default class RegisterAPI extends RestURL 
{
    scope = '/register/';

    user(USERNAME, EMAIL, PASSWORD, cb)
    {
        this.post('user', { USERNAME, EMAIL, PASSWORD }, cb);
    }

    project(NAME, URL, cb)
    {
        this.post('project', { NAME, URL }, cb);
    }

    email_list(FNAME, LNAME, EMAIL, KSUSER, IGUSER, PVALID, cb)
    {
        this.post('email_list', { FNAME, LNAME, EMAIL, IGUSER, PVALID }, cb);
    }

    cotact_us(FNAME, LNAME, EMAIL, COMMENT, cb)
    {
        this.post('contact_us', { FNAME, LNAME, EMAIL, COMMENT }, cb);
    }

    verify(VERIFYCODE, cb)
    {
        this.post('verify', { VERIFYCODE }, cb);
    }
}