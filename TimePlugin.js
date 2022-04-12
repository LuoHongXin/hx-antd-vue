class TimePlugin {
  constructor() {}
  apply(Compiler) {
    let starTime = Date.now();
    Compiler.hooks.watchRun.tap('vue-cli-service', () => {
      starTime = Date.now();
    });
    Compiler.hooks.done.tap('vue-cli-service', () => {
      console.log('APP running at:');
      console.log(`结束时间戳： ${Date.now()}`);
      console.log(`花费时间 ${Date.now() - starTime} ms`);
    });
  }
}

module.exports = TimePlugin;
