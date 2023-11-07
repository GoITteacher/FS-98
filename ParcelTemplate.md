# Basic

## .posthtmlrc

```json
{
  "plugins": {
    "posthtml-include": {
      "root": "./src"
    }
  }
}
```

---

## .parcelrc

```json
{
  "extends": ["@parcel/config-default"],
  "reporters": ["...", "parcel-reporter-clean-dist"]
}
```

---

## .htmlnanorc

```json
{
  "minifySvg": false
}
```

---

## .sassrc

```json
{
  "includePaths": ["node_modules"]
}
```

---

# Example package.json

```json
{
  "name": "project_name",
  "version": "2.0.0",
  "description": "",
  "homepage": "https://your_username.github.io/your_repo_name",
  "scripts": {
    "start": "parcel src/*.html",
    "build": "parcel build src/*.html --public-url /your_repo_name/"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your_username/your_repo_name.git"
  },
  "keywords": [],
  "author": "********* <*********>",
  "license": "ISC",
  "bugs": {
    "url": "*********"
  },
  "dependencies": {
    "modern-normalize": "^1.1.0"
  },
  "devDependencies": {
    "@parcel/transformer-sass": "^2.6.0",
    "parcel": "^2.6.0",
    "parcel-reporter-clean-dist": "^1.0.4",
    "posthtml-include": "^1.7.4"
  },
  "browserslist": "> 0.5%, last 2 versions, not dead"
}
```
