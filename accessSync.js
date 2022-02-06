const fs = require('fs')

module.exports = function accessSync(path) {
    let is = false 
    try {
        fs.accessSync(`${path}`, fs.R_OK | fs.W_OK)
        is = true
    } catch (err) {
        is = false
    }

    return is
}