//// [/lib/initial-buildOutput.txt]
/lib/tsc --b /src/tsconfig.json --verbose --traceResolution
12:00:00 AM - Projects in this build: 
    * src/src/core/tsconfig.json
    * src/src/animals/tsconfig.json
    * src/src/zoo/tsconfig.json
    * src/tsconfig.json

12:00:00 AM - Project 'src/src/core/tsconfig.json' is out of date because output file 'src/lib/core/core.bundle.js' does not exist

12:00:00 AM - Building project '/src/src/core/tsconfig.json'...

12:00:00 AM - Project 'src/src/animals/tsconfig.json' is out of date because output file 'src/lib/animals/animals.bundle.js' does not exist

12:00:00 AM - Building project '/src/src/animals/tsconfig.json'...

======== Resolving module './animal' from '/src/src/animals/dog.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
Loading module as file / folder, candidate module location '/src/src/animals/animal', target file type 'TypeScript'.
File '/src/src/animals/animal.ts' exist - use it as a name resolution result.
======== Module name './animal' was successfully resolved to '/src/src/animals/animal.ts'. ========
======== Resolving module 'core/utilities' from '/src/src/animals/dog.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
'baseUrl' option is set to '/src/src', using this value to resolve non-relative module name 'core/utilities'.
Resolving module name 'core/utilities' relative to base url '/src/src' - '/src/src/core/utilities'.
Loading module as file / folder, candidate module location '/src/src/core/utilities', target file type 'TypeScript'.
File '/src/src/core/utilities.ts' exist - use it as a name resolution result.
======== Module name 'core/utilities' was successfully resolved to '/src/src/core/utilities.ts'. ========
======== Resolving module './animal' from '/src/src/animals/index.ts'. ========
Resolution for module './animal' was found in cache from location '/src/src/animals'.
======== Module name './animal' was successfully resolved to '/src/src/animals/animal.ts'. ========
======== Resolving module './dog' from '/src/src/animals/index.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
Loading module as file / folder, candidate module location '/src/src/animals/dog', target file type 'TypeScript'.
File '/src/src/animals/dog.ts' exist - use it as a name resolution result.
======== Module name './dog' was successfully resolved to '/src/src/animals/dog.ts'. ========
12:00:00 AM - Project 'src/src/zoo/tsconfig.json' is out of date because output file 'src/lib/zoo/zoo.bundle.js' does not exist

12:00:00 AM - Building project '/src/src/zoo/tsconfig.json'...

Module 'animals/animal' was resolved as locally declared ambient module in file '/src/lib/animals/animals.bundle.d.ts'.
Module 'animals/animal' was resolved as locally declared ambient module in file '/src/lib/animals/animals.bundle.d.ts'.
Module 'animals/dog' was resolved as locally declared ambient module in file '/src/lib/animals/animals.bundle.d.ts'.
======== Resolving module '../animals' from '/src/src/zoo/zoo.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
Loading module as file / folder, candidate module location '/src/src/animals', target file type 'TypeScript'.
File '/src/src/animals.ts' does not exist.
File '/src/src/animals.tsx' does not exist.
File '/src/src/animals.d.ts' does not exist.
File '/src/src/animals/package.json' does not exist.
File '/src/src/animals/index.ts' exist - use it as a name resolution result.
======== Module name '../animals' was successfully resolved to '/src/src/animals/index.ts'. ========
======== Resolving module 'animals/dog' from '/src/src/zoo/zoo.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
'baseUrl' option is set to '/src/src', using this value to resolve non-relative module name 'animals/dog'.
'paths' option is specified, looking for a pattern to match module name 'animals/dog'.
'baseUrl' option is set to '/src/src', using this value to resolve non-relative module name 'animals/dog'.
Resolving module name 'animals/dog' relative to base url '/src/src' - '/src/src/animals/dog'.
Loading module as file / folder, candidate module location '/src/src/animals/dog', target file type 'TypeScript'.
File '/src/src/animals/dog.ts' exist - use it as a name resolution result.
======== Module name 'animals/dog' was successfully resolved to '/src/src/animals/dog.ts'. ========
======== Resolving module 'animals' from '/src/src/zoo/zoo.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
'baseUrl' option is set to '/src/src', using this value to resolve non-relative module name 'animals'.
'paths' option is specified, looking for a pattern to match module name 'animals'.
'baseUrl' option is set to '/src/src', using this value to resolve non-relative module name 'animals'.
Resolving module name 'animals' relative to base url '/src/src' - '/src/src/animals'.
Loading module as file / folder, candidate module location '/src/src/animals', target file type 'TypeScript'.
File '/src/src/animals.ts' does not exist.
File '/src/src/animals.tsx' does not exist.
File '/src/src/animals.d.ts' does not exist.
File '/src/src/animals/package.json' does not exist.
File '/src/src/animals/index.ts' exist - use it as a name resolution result.
======== Module name 'animals' was successfully resolved to '/src/src/animals/index.ts'. ========
======== Resolving module '@animals/dog' from '/src/src/zoo/zoo.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
'baseUrl' option is set to '/src/src', using this value to resolve non-relative module name '@animals/dog'.
'paths' option is specified, looking for a pattern to match module name '@animals/dog'.
Module name '@animals/dog', matched pattern '@animals/*'.
Trying substitution './animals/*', candidate module location: './animals/dog'.
Loading module as file / folder, candidate module location '/src/src/animals/dog', target file type 'TypeScript'.
File '/src/src/animals/dog.ts' exist - use it as a name resolution result.
======== Module name '@animals/dog' was successfully resolved to '/src/src/animals/dog.ts'. ========
======== Resolving module '@animals' from '/src/src/zoo/zoo.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
'baseUrl' option is set to '/src/src', using this value to resolve non-relative module name '@animals'.
'paths' option is specified, looking for a pattern to match module name '@animals'.
Module name '@animals', matched pattern '@animals'.
Trying substitution './animals', candidate module location: './animals'.
Loading module as file / folder, candidate module location '/src/src/animals', target file type 'TypeScript'.
File '/src/src/animals.ts' does not exist.
File '/src/src/animals.tsx' does not exist.
File '/src/src/animals.d.ts' does not exist.
File '/src/src/animals/package.json' does not exist.
File '/src/src/animals/index.ts' exist - use it as a name resolution result.
======== Module name '@animals' was successfully resolved to '/src/src/animals/index.ts'. ========
src/src/zoo/zoo.ts(1,27): error TS6305: Output file '/src/lib/animals/animals.bundle.d.ts' has not been built from source file '/src/src/animals/index.ts'.
src/src/zoo/zoo.ts(3,29): error TS6305: Output file '/src/lib/animals/animals.bundle.d.ts' has not been built from source file '/src/src/animals/index.ts'.
src/src/zoo/zoo.ts(5,29): error TS6305: Output file '/src/lib/animals/animals.bundle.d.ts' has not been built from source file '/src/src/animals/dog.ts'.
src/src/zoo/zoo.ts(6,29): error TS6305: Output file '/src/lib/animals/animals.bundle.d.ts' has not been built from source file '/src/src/animals/index.ts'.
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/lib/animals/animals.bundle.d.ts]
declare module "animals/animal" {
    export type Size = "small" | "medium" | "large";
    export default interface Animal {
        size: Size;
    }
}
declare module "animals/dog" {
    import Animal from "animals/animal";
    export interface Dog extends Animal {
        woof(): void;
        name: string;
    }
    export function createDog(): Dog;
}
declare module "animals/index" {
    import Animal from "animals/animal";
    export default Animal;
    import { createDog, Dog } from "animals/dog";
    export { createDog, Dog };
}


//// [/src/lib/animals/animals.bundle.js]
define("animals/animal", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("animals/dog", ["require", "exports", "core/utilities"], function (require, exports, utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createDog() {
        return ({
            size: "medium",
            woof: function () {
                console.log(this.name + " says \"Woof\"!");
            },
            name: utilities_1.makeRandomName()
        });
    }
    exports.createDog = createDog;
});
define("animals/index", ["require", "exports", "animals/animal", "animals/dog"], function (require, exports, animal_1, dog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDog = dog_1.createDog;
});


//// [/src/lib/animals/animals.bundle.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "../../src",
    "sourceFiles": [
      "../../src/animals/animal.ts",
      "../../src/animals/dog.ts",
      "../../src/animals/index.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 925,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 561,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/lib/animals/animals.bundle.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/animals/animals.bundle.js
----------------------------------------------------------------------
text: (0-925)
define("animals/animal", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("animals/dog", ["require", "exports", "core/utilities"], function (require, exports, utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createDog() {
        return ({
            size: "medium",
            woof: function () {
                console.log(this.name + " says \"Woof\"!");
            },
            name: utilities_1.makeRandomName()
        });
    }
    exports.createDog = createDog;
});
define("animals/index", ["require", "exports", "animals/animal", "animals/dog"], function (require, exports, animal_1, dog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDog = dog_1.createDog;
});

======================================================================
======================================================================
File:: /src/lib/animals/animals.bundle.d.ts
----------------------------------------------------------------------
text: (0-561)
declare module "animals/animal" {
    export type Size = "small" | "medium" | "large";
    export default interface Animal {
        size: Size;
    }
}
declare module "animals/dog" {
    import Animal from "animals/animal";
    export interface Dog extends Animal {
        woof(): void;
        name: string;
    }
    export function createDog(): Dog;
}
declare module "animals/index" {
    import Animal from "animals/animal";
    export default Animal;
    import { createDog, Dog } from "animals/dog";
    export { createDog, Dog };
}

======================================================================

//// [/src/lib/core/core.bundle.d.ts]
declare module "core/utilities" {
    export function makeRandomName(): string;
    export function lastElementOf<T>(arr: T[]): T | undefined;
}


//// [/src/lib/core/core.bundle.js]
define("core/utilities", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function makeRandomName() {
        return "Bob!?! ";
    }
    exports.makeRandomName = makeRandomName;
    function lastElementOf(arr) {
        if (arr.length === 0)
            return undefined;
        return arr[arr.length - 1];
    }
    exports.lastElementOf = lastElementOf;
});


//// [/src/lib/core/core.bundle.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "../../src",
    "sourceFiles": [
      "../../src/core/utilities.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 470,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 149,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/lib/core/core.bundle.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/core/core.bundle.js
----------------------------------------------------------------------
text: (0-470)
define("core/utilities", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function makeRandomName() {
        return "Bob!?! ";
    }
    exports.makeRandomName = makeRandomName;
    function lastElementOf(arr) {
        if (arr.length === 0)
            return undefined;
        return arr[arr.length - 1];
    }
    exports.lastElementOf = lastElementOf;
});

======================================================================
======================================================================
File:: /src/lib/core/core.bundle.d.ts
----------------------------------------------------------------------
text: (0-149)
declare module "core/utilities" {
    export function makeRandomName(): string;
    export function lastElementOf<T>(arr: T[]): T | undefined;
}

======================================================================

