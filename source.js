const curryLimitReverseCore = require('fup-curry-limit-reverse-core');

const curryLimitReverse = Object.assign(function (limit, executor, ...arguments) {
    switch (arguments.length) {
        case 0  : return curryLimitReverse;
        case 1  : return (executor, ...parameters) => curryLimitReverseCore(limit, executor, ...parameters);
        default : {
            let parametersLength = parameters.length;
            return limit < parametersLength
            ? Object.defineProperty((...nextParameters) => curryLimitReverseCore(limit, executor, ...parameters, ...nextParameters), 'length', {
                enumerable   : false,
                configurable : false,
                writable     : false,
                value        : limit - parametersLength
            })
            : executor(...parameters);
        }
    }
}, {
    core: curryLimitReverseCore,
});

module.exports = curryLimitReverse;