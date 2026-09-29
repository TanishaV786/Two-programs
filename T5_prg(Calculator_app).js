function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let answer = document.getElementById("answer");

    if (isNaN(num1) || isNaN(num2)) {
        answer.value = "Please enter both numbers";
        return;
    }

    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                answer.value = "Cannot divide by zero";
                return;
            }
            result = num1 / num2;
            break;

        case "%":
            result = num1 % num2;
            break;

        default:
            answer.value = "Invalid operation";
            return;
    }

    answer.value = result;
}