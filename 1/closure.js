(function() {
    const TIMEOUT = 50;
    const NUM = 10
    var first = function() {
        for (let i = 0; i < NUM; i++) {
            setTimeout(function() {
                console.log(i);
            }, TIMEOUT);
        }
    }

    var second = function() {
        for (var i = 0; i < NUM; i++) {
            (function(i) {
                setTimeout(function() {
                    console.log(i);
                }, TIMEOUT);
            })(i);
        }
    }

    var third = function() {
        for (var i = 0; i < NUM; i++) {
          setTimeout(console.log.bind(null, i), TIMEOUT);
        }
    }
})();

