//// [destrucuringNoFreshLiteralLeak.ts]
const { x = () => ({a: 12}) } = { x: () => ({a: 24, b: 12}) };
declare function f(x: {a: number}): void;
f(x());

function go({ x = () => ({a: 12}) } = { x: () => ({a: 24, b: 12}) }) {
    f(x());
}


//// [destrucuringNoFreshLiteralLeak.js]
var _a = { x: function () { return ({ a: 24, b: 12 }); } }.x, x = _a === void 0 ? function () { return ({ a: 12 }); } : _a;
f(x());
function go(_a) {
    var _b = (_a === void 0 ? { x: function () { return ({ a: 24, b: 12 }); } } : _a).x, x = _b === void 0 ? function () { return ({ a: 12 }); } : _b;
    f(x());
}
