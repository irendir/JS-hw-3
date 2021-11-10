window.arr = [];
// 1.
function addValue(num){
    var value = +prompt('Введите число');
    function isNaN(a){
        value == NaN;
        return value;
    }
    if (value == NaN){
        alert('error');
        return false;
    } else {
        arr.push(value);
    }
}
// 2. 
function remove(num2){
    var valueSecond = +prompt('Введите число');
    function isNaN(b){
        if (valueSecond == NaN){
            alert('error');
            return false;
        }
    }
    if (valueSecond >= arr.length){
        alert('Нет элемента с таким индексом');
    } else {
        delete arr[valueSecond];
    }
}
// 3. 
function removeLast(){
    delete arr.pop();
    alert('Успешно');
}
//4.
function getSum(array){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i]; 
    }
    alert('Сумма элементов массива: ' +sum);
}