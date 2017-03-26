/**
 * OttReq.js
 * Otter's Request Pool!
 * (C) Ben Otter (Benjamin McLean), 2017 
 */

export default class RequestPool
{
    /**@type {Array<XMLHttpRequest>} - Available http reqs.*/
    openPool = [];

    /**
     * Creates an instance of RequestPool.
     * @param {Object} opts - Options Object
     * 
     * @memberOf RequestPool
     */
    constructor(opts)
    {
        this.opts = opts;
    }

    takeReq()
    {
        if(this.openPool.length > 0)
            return this.openPool.pop();
        else
        {
            let req = new XMLHttpRequest();
            return req;
        }
    }

    giveReq(req)
    {
        if(req)
            this.openPool.push(req);
    }
}