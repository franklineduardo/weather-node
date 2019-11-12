const argv = require("yargs")
    .options({
        descripcion: {
            alias: "d",
            demand: true,
        }
    })
    .argv

module.exports = {
    argv
}