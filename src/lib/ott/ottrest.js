/**
 * OttRest.js
 * Otter's Restful Client! Naps'a Plenty!
 * (C) Ben Otter (Benjamin McLean), 2017
 */

/**
 * Ott's RESTful Client Abstractor
 */
export default class RestClient
{
    /**@type {Array<XMLHttpRequest>} - Available http reqs.*/
    openPool = [];

    /**@type {Array<XMLHttpRequest>} - In Use http reqs.*/
    closedPool = [];

    constructor(opts)
    {
        this.domain = opts.domain;
    }

    request(url, type, data, cb)
    {
        let req = this.takeReq();

        req.open(type, this.domain + url);
    }


    takeReq()
    {
        if(this.openPool.length > 0)
            return this.openPool.pop();
        else
        {
            let req = new XMLHttpRequest();
            this.closedPool.push(req);
            return req;
        }
    }

    /**
     * Adds URL to RestClient Instance.
     * @param {Function} urlClass - Extended Function Class of RestURL.
     */
    addURL(urlClass)
    {

    }
}

export class RestURL
{
    url = "";

    constructor()
    {

    }

    get(dataObj, cb) {}
    post(data, cb) {}

    //Mostly Unused
    put(){}
    delete(){}
}