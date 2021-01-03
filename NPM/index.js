const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
const langCode = franc(`${input}`);

if (langCode === 'und') {
    console.log("language cannot be determined, try typing a longer sentence".trap);
} else {
    const language = langs.where("3", langCode);
    if (language != undefined) {
        console.log(language.name.green);
    } else {
        console.log("language not supported".red);
    }
}