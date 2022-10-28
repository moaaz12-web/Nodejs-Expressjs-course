const os = require('os')

console.log(os.homedir())
console.log(os.userInfo())

console.log(os.uptime())


const OSINFO = {
    osName : os.type(),
    release : os.release(),
    totalMem : os.totalmem()/1024/1024,
    freemem : os.freemem()/1024/1024

}
console.log(OSINFO)