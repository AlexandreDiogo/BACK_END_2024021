function started() {
    console.log("Started Download");
}

function update(percentage) {
    console.log(percentage + "% of Download");
}

function completed() {
    console.log("Download Completed");
}

function performDownload(started_fn, update_fn, completed_fn) {
    started_fn();
    for (let i = 0; i <= 100; i++) {
        update_fn(i);
    }

    completed_fn();
}

//performDownload(started, update, completed)

var arrayUtils = require("./ArrayUtils");

var array = [2,3,4,5,6,7,5,1];


console.log(arrayUtils.subarray(array,2,4));

