'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var http = axios__default["default"].create({
    timeout: 30000,
    withCredentials: true,
});
http.interceptors.response.use(function (res) {
    return res;
}, function (err) {
    // 自定义错误信息
    return Promise.reject({
        rawError: err,
        code: -1
    });
});
function tryCatch(promise) {
    return __awaiter(this, void 0, void 0, function () {
        var res, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, promise];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, [null, res]];
                case 2:
                    e_1 = _a.sent();
                    return [2 /*return*/, [e_1, null]];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function requestApi(axiosConfig) {
    return tryCatch(http(axiosConfig).then(function (res) { return res.data; }));
}

/**
 * 大数相加
 * 数字范围为 [-2^53-1, 2^53-1]
 * 将数字转化为字符串相加，避免溢出
 */
var bigNumberADD2 = function (a, b) {
    // 将数字转化为字符
    var max = a.toString();
    var min = b.toString();
    var f = 0;
    var sum = '';
    // 如果a < b ，交换
    if (max.length < min.length) {
        var temp = max;
        max = min;
        min = temp;
    }
    // 以最大长度的字符开始遍历
    while (max.length) {
        // 取出最后一位字符，并转化为数字
        var temp1 = +max.slice(-1);
        var temp2 = +min.slice(-1);
        // 尾数 ,新的数字应该放在最前面
        sum = (temp1 + temp2 + f) % 10 + sum;
        // 这里的取整可能会产生小数，要取整；
        f = Math.floor((temp1 + temp2) / 10);
        // 修改max，min
        max = max.slice(0, -1);
        min = min.slice(0, -1);
    }
    // 处理完时，f还存在，则在前面加一
    if (f) {
        sum = 1 + sum;
    }
    return sum;
};
/**
 *
 * @param a string
 * @param b string
 */
var bigNumberADD = function (a, b) {
    if (parseInt(a).toString() !== a || parseInt(b).toString() !== b) {
        return '';
    }
    var maxLength = Math.max(a.length, b.length);
    var temp1 = a.padStart(maxLength, '0');
    var temp2 = b.padStart(maxLength, '0');
    var sum = '';
    var f = 0;
    for (var i = maxLength - 1; i >= 0; i--) {
        sum = (parseInt(temp1[i]) + parseInt(temp2[i]) + f) % 10 + sum;
        f = Math.floor((parseInt(temp1[i]) + parseInt(temp2[i]) + f) / 10);
    }
    if (f) {
        sum = "1" + sum;
    }
    return sum;
};

exports.bigNumberADD = bigNumberADD;
exports.bigNumberADD2 = bigNumberADD2;
exports.http = http;
exports.requestApi = requestApi;
exports.tryCatch = tryCatch;
