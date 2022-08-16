import { isFunction, isPromise, isArray, isPlainObject } from "@thi.ng/checks";
export const stringify_type = x => {
    if (isFunction(x) && x.length === 0)
        return "NULLARY";
    if (isFunction(x) && x.length === 1)
        return "UNARY";
    if (isFunction(x) && x.length === 2)
        return "BINARY";
    if (isFunction(x) && x.length > 2)
        return "N-ARY";
    if (isPromise(x))
        return "PROMISE";
    if (isArray(x))
        return "ARRAY";
    if (isPlainObject(x))
        return "OBJECT";
    if (x instanceof Error)
        return "ERROR";
    if (x !== Object(x) && x !== undefined)
        return "PRIMITIVE";
    return "UNKNOWN";
};
