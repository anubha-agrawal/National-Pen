# Downloading or Updating ABC Product Information Apps

ABC light module consists of configurations for abc magnolia apps.

## Getting Started

This document will help download or update abc magnolia light module from npm.

### Prerequisites

You will need following software on your machine to proceed:

```
node (6.x)
npm (5.x)
```

### Download OR Update

Once software configuration is changed or upgraded, use following
command to download a new version.

Change directory to your light module

```
cd /path/to/my/light-module
```

Download the abc light module from npm

```
npm install @magnolia/product-information-app --registry  https://mcpartifactory.cimpress.net/artifactory/api/npm/npm-virtual
```

Remove the previous "product-information-app" folder (if present)

```
rm -rf product-information-app
```

Move the new version of "product-information-app" folder to root of light modules folder

```
mv node_modules/@magnolia/product-information-app .
```

Cleanup files created by npm

```
rm -rf node_modules
rm -rf package-lock.json
```


