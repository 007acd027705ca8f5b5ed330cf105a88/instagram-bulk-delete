var i = 0;
var delete_amount = 0;

while (delete_amount <= 0) {
    var delete_amount = prompt('How Many Photos to Delete? : ', '100');
}

function bulkDelete() {
    setTimeout(function () {
        document.querySelector('div._aagu').click();
        setTimeout(function () {
            document.querySelector('div._ab8w._ab94._ab97._ab9h._ab9m._ab9p._abcm').click();
        }, 2800)
        setTimeout(function () {
            document.querySelector('button._a9--._a9-_').click();
        }, 2800)
        setTimeout(function () {
            document.querySelector('button._a9--._a9-_').click();
        }, 2800)
        console.log(i + 1 + " Photos Deleted");
        i++;
        if (i < delete_amount) {
            bulkDelete();
        }
    }, 2800)
}

bulkDelete();
