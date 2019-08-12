// @Filename: genericPropertiesOfConstructorFunctions.js
// @allowJs: true
// @checkJs: true
// @noEmit: true

/**
 * @constructor
 * @template {string} K
 * @template V
 */
function Multimap() {
    /** @type {Object<string, V>} TODO: Remove the prototype from the fresh object */
    this._map = {};
};

var Ns = {}
/** @type {Multimap<"a" | "b", number>} */
const map = new Multimap();
/** @type {number} */
const n = map._map['hi']
