/**
 * 大数相加
 * 数字范围为 [-2^53-1, 2^53-1]
 * 将数字转化为字符串相加，避免溢出
 */
export var bigNumberADD2 = function (a, b) {
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
export var bigNumberADD = function (a, b) {
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
