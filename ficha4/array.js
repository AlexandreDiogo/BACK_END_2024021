var array = [];

array.push(
    function () {
        console.log("wello world");
    }
);
array.push(
    function () {
        console.log("1");
    }
);
array.push(
    function () {
        console.log("2");
    }
);
array.push(
    function () {
        console.log("3");
    }
);
for (let i = 0; i <= 3; i++) {
    array[i]();
}


array.forEach(element => {
    element()
});