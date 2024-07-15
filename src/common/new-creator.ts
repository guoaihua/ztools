
const NewCreator = function (ctor: () => void) {
    if (typeof ctor !== 'function') {
        return ''
    }
    // 创建一个对象，并将该对象的原型指向构造函数的原型对象
    let obj = Object.create(ctor.prototype)
    let args = [].slice.call(arguments, 1);
    let res = obj.call(ctor, ...args);

    if ((typeof res === 'object' && res !== null) || typeof res === 'function') {
        return res
    }

    return obj
}