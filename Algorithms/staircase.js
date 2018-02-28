function staircase(n) {
    for(var i = 1;i<=n;i++){
        var str = ' '.repeat(n - i) + '#'.repeat(i);
        console.log(str);
    }
}
