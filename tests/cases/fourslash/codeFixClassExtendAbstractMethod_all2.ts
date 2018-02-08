/// <reference path='fourslash.ts' />

////abstract class A {
////    abstract m(): void;
////    abstract n(): void;
////}
////class B extends A {}

verify.codeFixAll({
    fixId: "fixClassDoesntImplementInheritedAbstractMember",
    newFileContent:
``,
});
