# Mantra Apollo Middleware

## Installation

```
npm install --save mantra-apollo mantra-plus apollo-tools apollo-client
```

## Basic Usage

```
import apollo from 'mantra-apollo';

// create a Mantra app
const app = createApp(context);

// load middlewares before loading module
app.loadMiddlewares([
  apollo({
    clientName: 'Client',
  }),
]);

// load all modules
app.loadModule(coreModule);

// initialize app
app.init();
```
