(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _main = require('./lib/main.js');

var ks = _interopRequireWildcard(_main);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

window.krowdspace = ks;

},{"./lib/main.js":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottrest = require('../ott/ottrest');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectsAPI = function (_RestURL) {
    _inherits(ProjectsAPI, _RestURL);

    function ProjectsAPI() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProjectsAPI);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectsAPI.__proto__ || Object.getPrototypeOf(ProjectsAPI)).call.apply(_ref, [this].concat(args))), _this), _this.scope = '/v1/projects/', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProjectsAPI, [{
        key: 'project',
        value: function project(PROJECTID) {
            return this.post('projects', { PROJECTID: PROJECTID });
        }
    }, {
        key: 'set_project',
        value: function set_project(PROJECTID, DATA) {
            return this.post('set_project', { PROJECTID: PROJECTID, DATA: DATA });
        }
    }]);

    return ProjectsAPI;
}(_ottrest.RestURL);

exports.default = ProjectsAPI;

},{"../ott/ottrest":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottrest = require('../ott/ottrest');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterAPI = function (_RestURL) {
    _inherits(RegisterAPI, _RestURL);

    function RegisterAPI() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RegisterAPI);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegisterAPI.__proto__ || Object.getPrototypeOf(RegisterAPI)).call.apply(_ref, [this].concat(args))), _this), _this.scope = '/v1/register/', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RegisterAPI, [{
        key: 'user',
        value: function user(FNAME, LNAME, EMAIL, USERNAME, PASSWORD, KS_USER, IG_USER) {
            return this.post('user', { FNAME: FNAME, LNAME: LNAME, USERNAME: USERNAME, EMAIL: EMAIL, PASSWORD: PASSWORD, KS_USER: KS_USER, IG_USER: IG_USER });
        }
    }, {
        key: 'project',
        value: function project(data) {
            return this.post('project', data);
        }
    }, {
        key: 'email_list',
        value: function email_list(FNAME, LNAME, EMAIL, KSUSER, IGUSER, PVALID) {
            return this.post('email_list', { FNAME: FNAME, LNAME: LNAME, EMAIL: EMAIL, KSUSER: KSUSER, IGUSER: IGUSER, PVALID: PVALID });
        }
    }, {
        key: 'contact_us',
        value: function contact_us(FNAME, LNAME, EMAIL, COMMENT) {
            return this.post('contact_us', { FNAME: FNAME, LNAME: LNAME, EMAIL: EMAIL, COMMENT: COMMENT });
        }
    }, {
        key: 'verify',
        value: function verify(VERIFYCODE, cb) {
            return this.post('verify', { VERIFYCODE: VERIFYCODE });
        }
    }]);

    return RegisterAPI;
}(_ottrest.RestURL);

exports.default = RegisterAPI;

},{"../ott/ottrest":8}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottrest = require("../ott/ottrest");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserAPI = function (_RestURL) {
    _inherits(UserAPI, _RestURL);

    function UserAPI() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserAPI);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserAPI.__proto__ || Object.getPrototypeOf(UserAPI)).call.apply(_ref, [this].concat(args))), _this), _this.scope = "/v1/users/", _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserAPI, [{
        key: "user",
        value: function user(USERID) {
            if (typeof USERID === "function" && !cb) {
                cb = USERID;
                USERID = "";
            }

            return this.post('user', { USERID: USERID, TYPE: "GETOWN" });
        }
    }, {
        key: "set_user",
        value: function set_user(DATA) {
            return this.post('user', { TYPE: "SETOWN", USERID: USERID, DATA: DATA });
        }
    }]);

    return UserAPI;
}(_ottrest.RestURL);

exports.default = UserAPI;

},{"../ott/ottrest":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottrest = require('../ott/ottrest');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var V1API = function (_RestURL) {
    _inherits(V1API, _RestURL);

    function V1API() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, V1API);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = V1API.__proto__ || Object.getPrototypeOf(V1API)).call.apply(_ref, [this].concat(args))), _this), _this.scope = "/v1/", _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(V1API, [{
        key: 'login',
        value: function login(USERNAME, PASSWORD, STAYLOGGED) {
            return this.post('login', { USERNAME: USERNAME, PASSWORD: PASSWORD, STAYLOGGED: STAYLOGGED });
        }
    }, {
        key: 'check',
        value: function check() {
            return this.post('login', { CHECK: true });
        }
    }]);

    return V1API;
}(_ottrest.RestURL);

exports.default = V1API;

},{"../ott/ottrest":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.projects = exports.register = exports.users = exports.v1 = undefined;
exports.setDomain = setDomain;

var _ottrest = require('./ott/ottrest');

var _ottrest2 = _interopRequireDefault(_ottrest);

var _v = require('./api/v1');

var _v2 = _interopRequireDefault(_v);

var _users = require('./api/users');

var _users2 = _interopRequireDefault(_users);

var _register = require('./api/register');

var _register2 = _interopRequireDefault(_register);

var _projects = require('./api/projects');

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {
    domain: 'api.localhost'
};

var rc = new _ottrest2.default(opts);

function setDomain(domain) {
    rc.domain = domain;
}

var v1 = exports.v1 = rc.addURL(_v2.default);
var users = exports.users = rc.addURL(_users2.default);
var register = exports.register = rc.addURL(_register2.default);
var projects = exports.projects = rc.addURL(_projects2.default);

},{"./api/projects":2,"./api/register":3,"./api/users":4,"./api/v1":5,"./ott/ottrest":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * OttReq.js
 * Otter's Request Pool!
 * (C) Ben Otter (Benjamin McLean), 2017 
 */

var RequestPool = function () {

    /**
     * Creates an instance of RequestPool.
     * @param {Object} opts - Options Object
     * 
     * @memberOf RequestPool
     */
    function RequestPool(opts) {
        _classCallCheck(this, RequestPool);

        this.openPool = [];

        this.opts = opts;
    }
    /**@type {Array<XMLHttpRequest>} - Available http reqs.*/


    _createClass(RequestPool, [{
        key: "takeReq",
        value: function takeReq() {
            if (this.openPool.length > 0) return this.openPool.pop();else {
                var req = new XMLHttpRequest();
                return req;
            }
        }
    }, {
        key: "giveReq",
        value: function giveReq(req) {
            if (req) this.openPool.push(req);
        }
    }]);

    return RequestPool;
}();

exports.default = RequestPool;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RestURL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OttRest.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Otter's Restful Client! Naps'a Plenty!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * (C) Ben Otter (Benjamin McLean), 2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ottreq = require('./ottreq');

var _ottreq2 = _interopRequireDefault(_ottreq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ott's RESTful Client Abstractor
 */
var RestClient = function () {
    function RestClient(opts) {
        _classCallCheck(this, RestClient);

        this.reqPool = null;

        this.opts = opts;
        this.domain = opts.domain;

        this.reqPool = new _ottreq2.default(opts);
    }

    /**
     * Adds URL to RestClient Instance.
     * @param {Function} urlClass - Extended Function Class of RestURL.
     */

    /**
     * @type {RequestPool} reqPool - Request Pool
     * @memberOf RestClient
     */


    _createClass(RestClient, [{
        key: 'addURL',
        value: function addURL(urlClass) {
            return new urlClass(this);
        }
    }, {
        key: 'request',
        value: function request(url, type, data) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var req = _this.reqPool.takeReq();

                req.open(type, 'http://' + (_this.domain + url));

                req.withCredentials = true;
                req.responseType = "json";
                req.setRequestHeader('Content-Type', 'application/json');

                var onLd = function onLd(e) {
                    var res = typeof req.response == 'string' ? _this.J2O(req.response) : req.response;

                    req.removeEventListener('load', onLd);
                    _this.reqPool.giveReq(req);

                    if (res && res.success) resolve(res);else reject(res);
                };

                var onErr = function onErr(e) {
                    req.removeEventListener('error', onLd);
                    _this.reqPool.giveReq(req);

                    reject({ error: true });
                };

                req.addEventListener('load', onLd);
                req.addEventListener('error', onErr);

                req.send(JSON.stringify(data));
            });
        }
    }, {
        key: 'J2O',
        value: function J2O(json) {
            var ret = null;
            try {
                ret = JSON.parse(json);
            } catch (e) {};
            return ret;
        }
    }]);

    return RestClient;
}();

exports.default = RestClient;

var RestURL = exports.RestURL = function () {
    function RestURL(restC) {
        _classCallCheck(this, RestURL);

        this.scope = "/";

        this.restC = restC;
    }

    _createClass(RestURL, [{
        key: 'get',
        value: function get(url, data, cb) {
            return this.restC.request(this.scope + url, 'get', data);
        }
    }, {
        key: 'post',
        value: function post(url, data, cb) {
            return this.restC.request(this.scope + url, 'post', data);
        }

        //Mostly Unused

    }, {
        key: 'put',
        value: function put() {}
    }, {
        key: 'delete',
        value: function _delete() {}
    }]);

    return RestURL;
}();

},{"./ottreq":7}]},{},[1]);
