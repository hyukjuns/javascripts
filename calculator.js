const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};

const result = calculator.plus(4,2);
const result_2 = calculator.minus(4,2);

console.log(result, result_2)