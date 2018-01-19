/// <reference path='fourslash.ts' />

////const [|{| "isWriteAccess": true, "isDefinition": true |}x|] = 0;
////[|x|];

const ranges = test.ranges();
const [r0, r1] = ranges;
verify.referenceGroups(r1, [
    {
        definition: { text: "const x: 0", range: r0 },
        ranges,
    },
])
