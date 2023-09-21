# about untapable

[![Build Status](https://github.com/lywzx/untapable/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/lywzx/untapable/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/lywzx/untapable/branch/main/graph/badge.svg)](https://codecov.io/gh/lywzx/untapable)
[![NPM version](https://img.shields.io/npm/v/untapable.svg?style=flat-square)](https://www.npmjs.com/package/untapable)
[![NPM downloads](https://img.shields.io/npm/dm/untapable.svg?style=flat-square)](https://www.npmjs.com/package/untapable)
[![Known Vulnerabilities](https://snyk.io/test/github/lywzx/untapable/badge.svg?targetFile=package.json)](https://snyk.io/test/github/lywzx/untapable?targetFile=package.json)
[![License](https://img.shields.io/npm/l/untapable.svg?sanitize=true)](https://www.npmjs.com/package/untapable)

Enhance the Tapable library to incorporate the 'unTap' method.


# Installation

```bash
npm install --save untapable
```

# Usage

unTap example

```typescript
import { unTap } from 'untapable';

const hook = new SyncHook(["arg1", "arg2", "arg3"]);

const fn = () => {
    
}
hook.tap('use age', fn)

// untap
unTap(hook, 'use age'); // or unTap(hook, fn)
```



