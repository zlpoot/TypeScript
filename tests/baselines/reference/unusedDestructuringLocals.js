//// [unusedDestructuringLocals.ts]
export {};
// 'a' unused, '_b' is OK
const [a, _b] = [1, 2];
// 'x' unused, '_y' is OK, '_z' unused
const { x, y: _y, _z } = { x: 1, y: 2, _z: 3 };


//// [unusedDestructuringLocals.js]
"use strict";
exports.__esModule = true;
// 'a' unused, '_b' is OK
var _a = [1, 2], a = _a[0], _b = _a[1];
// 'x' unused, '_y' is OK, '_z' unused
var _c = { x: 1, y: 2, _z: 3 }, x = _c.x, _y = _c.y, _z = _c._z;
