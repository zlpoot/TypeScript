///<reference path="fourslash.ts"/>

// @noLib: true

////declare function f<U>(predicate: (t: {}) => t is U): U;
////const y = /**/f((n): n is number => true);

verify.quickInfoAt("", "function f<number>(predicate: (t: {}) => t is number): number");
