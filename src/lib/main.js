import RestClient from './ott/ottrest';

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

export const users = rc.addURL(UserAPI);
export const register = rc.addURL(RegisterAPI);
export const projects = rc.addURL(ProjectsAPI);

