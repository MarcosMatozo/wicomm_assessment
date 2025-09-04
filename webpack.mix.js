// Dependencies
const mix = require("laravel-mix");
const glob = require("glob");

//Resources path - Where the sass files are located
const resourcesPath = "./dev/";

//Local onde estão os Sass
const sassInput = resourcesPath + "**/[^_]*.{scss,sass}";

console.log(sassInput);

//Compiled SASS assets
const themePath = "./styles/";

//Local onde irão os css compilados
const sassOutput = themePath + "css";

// ===================
// Configurações
// ===================
let sassFiles = glob.sync(sassInput);

mix.setPublicPath(themePath);
// mix.disableNotifications();

mix.options({
	autoprefixer: { remove: false },
	manifest: false,
	terser: {
		extractComments: (astNode, comment) => false,
	},
});

// mix.webpackConfig({
// 	externals: {
// 		jquery: "jQuery",
// 	},
// });

/* mix.autoload({
	jquery: ["$", "window.jQuery"],
}); */

sassFiles.forEach((filename) => {
	mix
		.sass(filename, sassOutput)
		.options({
			processCssUrls: false,
		});
});

