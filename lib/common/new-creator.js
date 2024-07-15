"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var NewCreator = function (ctor) {
    if (typeof ctor !== 'function') {
        return '';
    }
    // 创建一个对象，并将该对象的原型指向构造函数的原型对象
    var obj = Object.create(ctor.prototype);
    var args = [].slice.call(arguments, 1);
    var res = obj.call.apply(obj, __spreadArray([ctor], args, false));
    if ((typeof res === 'object' && res !== null) || typeof res === 'function') {
        return res;
    }
    return obj;
};
