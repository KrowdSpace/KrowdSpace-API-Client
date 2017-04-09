(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _main = require('./lib/main.js');

var ks = _interopRequireWildcard(_main);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

window.krowdspace = ks;

},{"./lib/main.js":5}],2:[function(require,module,exports){
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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectsAPI.__proto__ || Object.getPrototypeOf(ProjectsAPI)).call.apply(_ref, [this].concat(args))), _this), _this.scope = '/projects/', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProjectsAPI, [{
        key: 'project',
        value: function project(PROJECTID, cb) {
            this.post('projects', { PROJECTID: PROJECTID }, cb);
        }
    }]);

    return ProjectsAPI;
}(_ottrest.RestURL);

exports.default = ProjectsAPI;

},{"../ott/ottrest":7}],3:[function(require,module,exports){
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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RegisterAPI.__proto__ || Object.getPrototypeOf(RegisterAPI)).call.apply(_ref, [this].concat(args))), _this), _this.scope = '/register/', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RegisterAPI, [{
        key: 'user',
        value: function user(FNAME, LNAME, EMAIL, USERNAME, PASSWORD, KS_USER, IG_USER, cb) {
            this.post('user', { FNAME: FNAME, LNAME: LNAME, USERNAME: USERNAME, EMAIL: EMAIL, PASSWORD: PASSWORD, KS_USER: KS_USER, IG_USER: IG_USER }, cb);
        }
    }, {
        key: 'project',
        value: function project(CAT, URL, REWARD, cb) {
            this.post('project', { NAME: NAME, URL: URL }, cb);
        }
    }, {
        key: 'email_list',
        value: function email_list(FNAME, LNAME, EMAIL, KSUSER, IGUSER, PVALID, cb) {
            this.post('email_list', { FNAME: FNAME, LNAME: LNAME, EMAIL: EMAIL, KSUSER: KSUSER, IGUSER: IGUSER, PVALID: PVALID }, cb);
        }
    }, {
        key: 'contact_us',
        value: function contact_us(FNAME, LNAME, EMAIL, COMMENT, cb) {
            this.post('contact_us', { FNAME: FNAME, LNAME: LNAME, EMAIL: EMAIL, COMMENT: COMMENT }, cb);
        }
    }, {
        key: 'verify',
        value: function verify(VERIFYCODE, cb) {
            this.post('verify', { VERIFYCODE: VERIFYCODE }, cb);
        }
    }]);

    return RegisterAPI;
}(_ottrest.RestURL);

exports.default = RegisterAPI;

},{"../ott/ottrest":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ottrest = require('../ott/ottrest');

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserAPI.__proto__ || Object.getPrototypeOf(UserAPI)).call.apply(_ref, [this].concat(args))), _this), _this.scope = "/users/", _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserAPI, [{
        key: 'check',
        value: function check(cb) {
            this.post('login', { CHECK: true }, cb);
        }
    }, {
        key: 'login',
        value: function login(USERNAME, PASSWORD, STAYLOGGED, cb) {
            this.post('login', { USERNAME: USERNAME, PASSWORD: PASSWORD, STAYLOGGED: STAYLOGGED }, cb);
        }
    }, {
        key: 'user',
        value: function user(USERID, cb) {
            this.post('user', { USERID: USERID }, cb);
        }
    }, {
        key: 'set_user',
        value: function set_user(USERID, DATA, cb) {
            this.post('user', { SET: TRUE, USERID: USERID, DATA: DATA }, cb);
        }
    }]);

    return UserAPI;
}(_ottrest.RestURL);

exports.default = UserAPI;

},{"../ott/ottrest":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.projects = exports.register = exports.users = undefined;
exports.setDomain = setDomain;

var _ottrest = require('./ott/ottrest');

var _ottrest2 = _interopRequireDefault(_ottrest);

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

var users = exports.users = rc.addURL(_users2.default);
var register = exports.register = rc.addURL(_register2.default);
var projects = exports.projects = rc.addURL(_projects2.default);

},{"./api/projects":2,"./api/register":3,"./api/users":4,"./ott/ottrest":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
        value: function request(url, type, data, cb) {
            var _this = this;

            var req = this.reqPool.takeReq();

            req.open(type, 'http://' + (this.domain + url));

            req.withCredentials = true;
            req.responseType = "json";
            req.setRequestHeader('Content-Type', 'application/json');

            var onLd = function onLd(e) {
                var res = typeof req.response == 'string' ? _this.J2O(req.response) : req.response;

                if (res && cb) cb(res);

                req.removeEventListener('load', onLd);
                _this.reqPool.giveReq(req);
            };

            req.addEventListener('load', onLd);

            req.send(JSON.stringify(data));
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
            this.restC.request(this.scope + url, 'get', data, cb);
        }
    }, {
        key: 'post',
        value: function post(url, data, cb) {
            this.restC.request(this.scope + url, 'post', data, cb);
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

},{"./ottreq":6}]},{},[1]);
