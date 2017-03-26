/**
 * OttRest.js
 * Otter's Restful Client! Naps'a Plenty!
 * (C) Ben Otter (Benjamin McLean), 2017
 */

import RequestPool from './ottreq';

/**
 * Ott's RESTful Client Abstractor
 */
export default class RestClient
{
    /**
     * @type {RequestPool} reqPool - Request Pool
     * @memberOf RestClient
     */
    reqPool = null;

    constructor(opts)
    {
        this.opts = opts;
        this.domain = opts.domain;

        this.reqPool = new RequestPool(opts);
    }

    /**
     * Adds URL to RestClient Instance.
     * @param {Function} urlClass - Extended Function Class of RestURL.
     */
    addURL(urlClass)
    {
        return new urlClass(this);
    }

    request(url, type, data, cb)
    {
        let req = this.reqPool.takeReq();

        req.open(type, `http://${this.domain + url}`);

        req.withCredentials = true;
        req.responseType = "json";
        req.setRequestHeader('Content-Type', 'application/json');
        
        let onLd = (e)=>
        {
            let res = typeof req.response == 'string' ? this.J2O(req.response) : req.response;

            if(res && cb)
                cb(res);

            req.removeEventListener('load', onLd);
            this.reqPool.giveReq(req);
        };

        req.addEventListener('load', onLd);

        req.send(JSON.stringify(data));
    }

    J2O(json)
    {
        let ret = null;
        try{ret = JSON.parse(json)}catch(e){};
        return ret;
    }
}

export class RestURL
{
    scope = "/";

    constructor(restC)
    {
        this.restC = restC;
    }

    get(url, data, cb)
    {
        this.restC.request(this.scope + url, 'get', data, cb);
    }

    post(url, data, cb)
    {
        this.restC.request(this.scope + url, 'post', data, cb);
    }

    //Mostly Unused
    put(){}
    delete(){}
}