# Publish ABC Apps

ABC light module consists of configurations for abc magnolia apps.

## Getting Started

This document will help publish magnolia light module to npm.

### Prerequisites

You will need following software on your machine to proceed:

```
node (6.x)
npm (5.x)
```

### Publish

Once software configuration is changed or upgraded, use following
command to patch or increase the version of package.


```
npm version patch
git commit -a -m "<Commit Message>"
```

Publish to npm

```
npm publish
```
