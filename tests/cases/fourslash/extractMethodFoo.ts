/// <reference path='fourslash.ts' />

// Preserve newlines correctly when semicolons aren't present

// Observe that the input uses tabs.
////function f() {
////	/*start*/1/*end*/;
////}

goTo.select("start", "end");
edit.applyRefactor({
    refactorName: "Extract Method",
    actionName: "scope_1",
    actionDescription: "Extract to function in global scope",
    newContent:
`function f() {
	/*RENAME*/newFunction();
}
function newFunction() {
	1;
}
`,
    formatting: {
        convertTabsToSpaces: false,
        newLineCharacter: "\n",
        tabSize: 1,
        indentSize: 1, //Apparently not optional?
    }
});
