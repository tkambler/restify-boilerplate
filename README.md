# Restify Boilerplate

An opinionated template for creating new Restify-based projects.

```
$ git clone git@github.com:tkambler/restify-boilerplate.git
$ npm i
$ npm start
```

- Routes and middleware are defined in `config/routes.json` and `config/meddleware.json`, respectively.
- App-level modules should be stored in `./lib/app` and subsequently loaded via `require('app/:module-name')`. When the application is launched via `npm start`, the `NODE_PATH` environment variable is updated to reference this location, enabling this behavior.

## Related Resources

- [Restify](http://restify.com/)
- [Confit](https://github.com/krakenjs/confit)
- [Shortstop Handlers](https://github.com/krakenjs/shortstop-handlers)
