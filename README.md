# system-stats
Access host's file system, processor and memory usage.

This NPM package is written in ES6, so it is recommended to use strictly Node >= v6.4.0.

## Usage
This package returns a Promise:

```js
const system_stats = require('./system-stats.js')

//  (1) Ask for system stats
system_stats.get()
//  (2) Process promise response
.then( ( results ) => {
  console.dir( results )
}, ( error ) => {
  console.error( error )
} )
```

## Output
Parameters and Units

```js
{
  // [1, 5, 15]-minute CPU avgs normalized to [0.0, 1.0]:
  proc: [ 0.005576171875, 0.008974609375, 0.010400390625 ],
  mem: {
    total: 16737234944,         //  bytes
    free: 4571918336,           //  bytes
    load: 0.7268414794141997    //  normalized to [0.0, 1.0]
  },
  uptime: 747954,               //  seconds
  fs: {
    available: 2335936512,      //  bytes
    free: 5330980864,           //  bytes
    total: 58495991808,         //  bytes
    load: 0.9600667252609856    //  normalized to [0.0, 1.0]
  }
}
```
