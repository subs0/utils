export const stringify_fn = (x, indent) => JSON.stringify(x, (key, value) => {
    if (typeof value === "function") {
        let r = value
            .toString()
            .replace(/\r?\n|\r|\\"/g, "")
            .replace(/\s\s+/g, " ")
            .slice(0, 20) + "...";
        return r;
    }
    if (value instanceof Error) {
        let error = {};
        Object.getOwnPropertyNames(value).forEach(function (key) {
            error[key] = value[key];
        });
        let out = {};
        Object.entries(error).forEach(([k, v]) => (out[k] = typeof v === "string" ? v.slice(0, 20).replace(/\r?\n|\r|\\"/g, "") : v));
        return out;
    }
    return value;
}, indent);
