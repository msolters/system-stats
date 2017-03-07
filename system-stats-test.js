const system_stats = require('./system-stats.js')

//  (1) Ask for system stats
system_stats.get()
//  (2) Process promise response
.then( ( results ) => {
  console.dir( results )
}, ( error ) => {
  console.error( error )
} )
