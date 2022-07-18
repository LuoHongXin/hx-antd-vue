let langFiles = require.context('./lang', false, /\.es.js$/);
const lang = {};
langFiles.keys().forEach(key => {
  lang[key.replace(/.\/|.es.js/gi, '')] = langFiles(key).default;
});
export default lang;
