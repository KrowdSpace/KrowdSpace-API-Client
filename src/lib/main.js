import RestClient from './ott/ottrest';

import V1API from './api/v1';
import UserAPI from './api/users';
import RegisterAPI from './api/register';
import ProjectsAPI from './api/projects';

const opts = {
    domain: 'api.localhost'
};

const rc = new RestClient(opts);

export function setDomain(domain)
{
    rc.domain = domain;
}

export const v1 = rc.addURL(V1API);
export const users = rc.addURL(UserAPI);
export const register = rc.addURL(RegisterAPI);
export const projects = rc.addURL(ProjectsAPI);

