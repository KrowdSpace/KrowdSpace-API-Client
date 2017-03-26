import RestClient from './ott/ottrest';

import UserAPI from './api/users';

const opts = {
    domain: 'api.localhost'
};

const rc = new RestClient(opts);

export const users = rc.addURL(UserAPI);


export function setDomain(domain)
{
    rc.domain = domain;
}