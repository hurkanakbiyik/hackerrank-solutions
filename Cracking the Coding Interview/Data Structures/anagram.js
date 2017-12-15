process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a = readLine();
    var b = readLine();
    console.log(count(a, b));
}

function count(a, b) {
  let freqs = {};
  a.split('').forEach(char => freqs[char] = (freqs[char] || 0) + 1); // increment
  b.split('').forEach(char => freqs[char] = (freqs[char] || 0) - 1); // decrement
  return Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0);
}
