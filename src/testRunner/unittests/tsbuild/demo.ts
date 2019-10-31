namespace ts {
    describe("unittests:: tsbuild:: on demo project", () => {
        let projFs: vfs.FileSystem;
        before(() => {
            projFs = loadProjectFromDisk("tests/projects/demo");
        });

        after(() => {
            projFs = undefined!; // Release the contents
        });

        verifyTsc({
            scenario: "demo",
            subScenario: "in master branch with everything setup correctly and reports no error",
            fs: () => projFs,
            commandLineArgs: ["--b", "/src/tsconfig.json", "--verbose"]
        });

        verifyTsc({
            scenario: "demo",
            subScenario: "in circular branch reports the error about it by stopping build",
            fs: () => projFs,
            commandLineArgs: ["--b", "/src/tsconfig.json", "--verbose"],
            modifyFs: fs => replaceText(
                fs,
                "/src/core/tsconfig.json",
                "}",
                `},
  "references": [
    {
      "path": "../zoo"
    }
  ]`
            )
        });
        verifyTsc({
            scenario: "demo",
            subScenario: "in bad-ref branch reports the error about files not in rootDir at the import location",
            fs: () => projFs,
            commandLineArgs: ["--b", "/src/tsconfig.json", "--verbose"],
            modifyFs: fs => prependText(
                fs,
                "/src/core/utilities.ts",
                `import * as A from '../animals';
`
            )
        });

        verifyTsc({
            scenario: "demo",
            subScenario: "with module as amd and outFile set",
            fs: () => loadProjectFromFiles({
                "/src/tsconfig.json": JSON.stringify({
                    files: [],
                    references: [
                        { path: "./src/zoo" }
                    ]
                }),
                "/src/tsconfig-base.json": projFs.readFileSync(
                    "/src/tsconfig-base.json",
                    "utf-8"
                ).replace(`"commonjs"`, `"amd",
        "rootDir": "./src",
        "baseUrl": "./src",
        "moduleResolution": "node"`),
                "/src/src/core/tsconfig.json": JSON.stringify({
                    extends: "../../tsconfig-base.json",
                    compilerOptions: {
                        outFile: "../../lib/core/core.bundle.js"
                    }
                }),
                "/src/src/core/utilities.ts": projFs.readFileSync(
                    "/src/core/utilities.ts",
                    "utf-8"
                ),
                "/src/src/animals/tsconfig.json": JSON.stringify({
                    extends: "../../tsconfig-base.json",
                    compilerOptions: {
                        outFile: "../../lib/animals/animals.bundle.js"
                    },
                    references: [
                        { path: "../core" }
                    ]
                }),
                "/src/src/animals/animal.ts": projFs.readFileSync(
                    "/src/animals/animal.ts",
                    "utf-8"
                ),
                "/src/src/animals/dog.ts": projFs.readFileSync(
                    "/src/animals/dog.ts",
                    "utf-8"
                ).replace(".", "./animal").replace("../", ""),
                "/src/src/animals/index.ts": projFs.readFileSync(
                    "/src/animals/index.ts",
                    "utf-8"
                ),
                "/src/src/zoo/tsconfig.json": JSON.stringify({
                    extends: "../../tsconfig-base.json",
                    compilerOptions: {
                        outFile: "../../lib/zoo/zoo.bundle.js",
                        paths: {
                            "@animals": ["./animals"],
                            "@animals/*": ["./animals/*"]
                        }
                    },
                    references: [
                        { path: "../animals" }
                    ]
                }),
                "/src/src/zoo/zoo.ts": utils.dedent`
                    import { createDog } from '../animals';
                    import { Dog as Dog1 } from 'animals/dog';
                    import { Dog as Dog2 } from 'animals';

                    import { Dog as Dog3 } from '@animals/dog';
                    import { Dog as Dog4 } from '@animals';

                    export function createZoo(): Array<Dog1 | Dog2 | Dog3 | Dog4> {
                        return [
                            createDog()
                        ];
                    }
                `
            }),
            commandLineArgs: ["--b", "/src/tsconfig.json", "--verbose", "--traceResolution"],
        });
    });
}
