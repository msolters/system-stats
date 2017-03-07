const disk = require('diskusage')
const os = require('os')

const get_filesystem_usage = () => {
  return new Promise( (resolve, reject) => {
    disk.check('/', function(err, info) {
      if (err) {
        console.log(err)
        reject( err )
      } else {
        resolve( {
          available: info.available,
          free: info.free,
          total: info.total
        } )
      }
    })
  })
}

//  @brief  Retrieve and return a JSON object containing core
//          statistics about the host system
const get = () => {
  return new Promise( (resolve, reject) => {
    get_filesystem_usage().then( (fs_stats) => {
      let stats = {
        proc: os.loadavg(),       // object w/ 1, 5, 15min avgs
        mem: {
          total: os.totalmem(), // in bytes
          free: os.freemem(),   // in bytes
        },
        uptime: os.uptime(),      // in seconds
        fs: fs_stats
      }
      for( proc in stats.proc ) {
        stats.proc[proc] /= 100.0
        console.log(proc)
      }
      stats.mem.load = (stats.mem.total - stats.mem.free) / stats.mem.total
      stats.fs.load = (stats.fs.total - stats.fs.available) / stats.fs.total
      resolve( stats )
    }, (error) => {
      reject( error )
    })
  })
}

exports = module.exports = {
  get
}
