// @noUnusedLocals: true

export {};
// 'a' unused, '_b' is OK
const [a, _b] = [1, 2];
// 'x' unused, '_y' is OK, '_z' unused
const { x, y: _y, _z } = { x: 1, y: 2, _z: 3 };
