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

    /**
     * Creates an instance of RestClient.
     * @param {Object} opts Options Object.
     * 
     * @memberOf RestClient
     */
    constructor(opts)
    {
        this.opts = opts;
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

    giveReq(req)
    {
        if(req)
            this.openPool.push(req);
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