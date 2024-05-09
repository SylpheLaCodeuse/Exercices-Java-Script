const num1 = 1;
const num2 = '2';
//mes deux paramètres

function testNum(num1, num2) {
    //ma fonction

    let result;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        result = 'null';
    } else {
        result = parseInt(num1) + parseInt(num2);
    }

    return result;
}

console.log(testNum(num1, num2));
