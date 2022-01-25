# AILALIA FRONT

## I. Installation

### Manual Method

#### 1. Clone this repo

```
$ git clone https://bitbucket.org/innovit_spa/elipsechat_frontend.git
$ cd your-app-name
```

#### 2. Install dependencies

```
$ yarn
```

## III. Development

### Start dev server

```
$ yarn dev
```

## Environment variable

To edit environment variables, create a file with name `.env` and copy the contents from `.env.default` to start with.

| Var Name                | Type   | Default                           | Description                            |
| ----------------------- | ------ | --------------------------------- | -------------------------------------- |
| NODE_ENV                | string | `development`                     | API runtime environment. eg: `staging` |
| PORT                    | number | `3000`                            | Port to run the application on         |
| NEXT_PUBLIC_BACKEND_URL | string | `mongodb://localhost:27017/books` | Url Backend                            |
