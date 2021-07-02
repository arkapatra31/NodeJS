const path = require("path")
module.exports = function pathfind(){
    console.log(path.parse(__filename))
    console.log(path.parse(__dirname))
}
