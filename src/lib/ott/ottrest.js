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

    request(url, type, data)
    {
        return new Promise((resolve, reject)=>
        {
            let req = this.reqPool.takeReq();

            req.open(type, `${this.domain + url}`);

            req.withCredentials = true;
            req.responseType = "json";
            req.setRequestHeader('Content-Type', 'application/json');
            
            let onLd = (e)=>
            {
                let res = typeof req.response == 'string' ? this.J2O(req.response) : req.response;

                req.removeEventListener('load', onLd);
                this.reqPool.giveReq(req);

                if(res && res.success) 
                    resolve(res);
                else 
                    reject(res);
            };

            let onErr = (e)=>
            {
                req.removeEventListener('error', onLd);
                this.reqPool.giveReq(req);

                reject({error:true});
            };

            req.addEventListener('load', onLd);
            req.addEventListener('error', onErr);

            req.send(JSON.stringify(data));
        });
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
        return this.restC.request(this.scope + url, 'get', data);
    }

    post(url, data, cb)
    {
        return this.restC.request(this.scope + url, 'post', data);
    }

    //Mostly Unused
    put(){}
    delete(){}
}