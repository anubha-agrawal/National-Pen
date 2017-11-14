# Downloading or Updating Product Categories Apps

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

Download the product categories app light module from npm

```
npm install @magnolia/product-categories-app --registry  https://mcpartifactory.cimpress.net/artifactory/api/npm/npm-virtual
```

Remove the previous "product-categories-app" folder (if present)

```
rm -rf product-categories-app
```

Move the new version of "product-categories-app" folder to root of light modules folder

```
mv node_modules/@magnolia/product-categories-app .
```

Cleanup files created by npm

```
rm -rf node_modules
rm -rf package-lock.json
```


