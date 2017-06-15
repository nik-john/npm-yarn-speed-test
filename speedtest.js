var { spawnSync } = require('child_process');
var times = [];
for (let i = 0; i < 1000; i++) {
    // console.log(`start script exec ${i+1}`);
    console.log(`Running iteration ${i+1}`);
    // chmod +x *.sh
    var ls = spawnSync('./yarn.sh');
    // console.log(`stop script exec ${i+1}`);
    // console.log("Real Time is ")
    // console.log(ls.output.toString('utf8').match(/^real(.*)$/gm)[0].split(/\s+/)[1]);
    times.push(parseFloat(ls.output.toString('utf8').match(/^real(.*)$/gm)[0].split(/\s+/)[1]));
    // console.log("--------------------------")
}
console.log("Average time for yarn (with cache) is ");
// console.log(times);
console.log((times.reduce((a, b) => a + b)/times.length).toFixed(3));
