import {RestURL} from '../ott/ottrest';

export default class RegisterAPI extends RestURL 
{
    scope = '/v1/register/';

    user(FNAME, LNAME, EMAIL, USERNAME, PASSWORD, KS_USER, IG_USER)
    {
        return this.post('user/', { FNAME, LNAME, USERNAME, EMAIL, PASSWORD, KS_USER, IG_USER });
    }

    project(data)
    {
        return this.post('project/', data);
    }

    email_list(FNAME, LNAME, EMAIL, KSUSER, IGUSER, PVALID)
    {
        return this.post('email_list/', { FNAME, LNAME, EMAIL, KSUSER, IGUSER, PVALID });
    }

    contact_us(FNAME, LNAME, EMAIL, COMMENT)
    {
        return this.post('contact_us/', { FNAME, LNAME, EMAIL, COMMENT });
    }

    verify(VERIFYCODE)
    {
        return this.post('verify/', { VERIFYCODE });
    }

    request_reset_password(EMAIL)
    {
        return this.post('request_reset_password/', { EMAIL });
    }
    
    reset_password(RESET_CODE, NEW_PASSWORD)
    {
        return this.post('reset_password/', { RESET_CODE, NEW_PASSWORD });
    }
}