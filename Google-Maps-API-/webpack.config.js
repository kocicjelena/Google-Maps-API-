var path = require("path");
module.exports = {
	entry: "./example.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
	externals: [
		"googleMapsClient",
		{
			"createClient": {
				root: "createClient",
				commonjs2: "./createClient",
				commonjs: ["./math", "createClient"],
				amd: "createClient"
			}
		}
	]
};