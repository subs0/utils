/**
 * @module utils/diff_keys
 */

/**
 *
 * function for diffing keys between an array of keys
 * (strings) and an object, within which it will look for
 * those keys
 *
 * @example
 * diff_keys(["a", "b"], { a: 1, b: 2, c: 3, d: 4 })
 * //=> [ [ 'c', 'd' ], { c: 3, d: 4 } ]
 */
export const diff_keys = (nKeys = [], nObj = {}): [string[], Record<string, unknown>] => {
    const all = Object.keys(nObj)
    const xKeys = all.filter(key => !nKeys.includes(key))
    const xObj = Object.entries(nObj).reduce((a, [k, v]) => {
        if (!nKeys.includes(k)) return { ...a, [k]: v }
        else return a
    }, {})
    return [xKeys, xObj]
}
