import {RestURL} from '../ott/ottrest';

export default class RegisterAPI extends RestURL 
{
    scope = '/register/';

    user(FNAME, LNAME, EMAIL, USERNAME, PASSWORD, KS_USER, IG_USER)
    {
        return this.post('user', { FNAME, LNAME, USERNAME, EMAIL, PASSWORD, KS_USER, IG_USER }, cb);
    }

    project(CAT, URL, REWARD)
    {
        return this.post('project', { NAME, URL });
    }

    email_list(FNAME, LNAME, EMAIL, KSUSER, IGUSER, PVALID)
    {
        return this.post('email_list', { FNAME, LNAME, EMAIL, KSUSER, IGUSER, PVALID }, cb);
    }

    contact_us(FNAME, LNAME, EMAIL, COMMENT, cb)
    {
        return this.post('contact_us', { FNAME, LNAME, EMAIL, COMMENT });
    }

    verify(VERIFYCODE, cb)
    {
        return this.post('verify', { VERIFYCODE });
    }
}