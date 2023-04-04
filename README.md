## Development setup:

1. Install gatsby cli globally by `npm install -g gatsby-cli`.
2. Install all the required modules by running `npm install`.
3. To start the website in development mode use `gatsby develop`.
4. GraphQL playground will be accessible at http://localhost:8000/__grapql, if the development version is running at http://localhost:8000.

Notes for Apple M1 users:

You will not be able to launch project as is, since shark package is not comptible with m1
from the bot. To fix this you need to do following:

1. Make sure you have python 2 installed in your system
1. Use Node v18 (`nvm use 18`)
1. Run `brew install vips`
1. Replace just `npm install` with `CXXFLAGS="--std=c++14" npm install` command
1. In the same shell run `export NODE_OPTIONS=--openssl-legacy-provider`
1. After that you should be able to run `gatsby develop`
