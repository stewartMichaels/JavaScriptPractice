const task3Element = document.getElementById('task-3');

function first() {
    alert("First One OUT!");
}

function second(name) {
    alert("hi" + userName);
}

function third(str1, str2, str3) {
    const combinedText = str1 + str2 + str3;
    return combinedText;
}

const combinedString = combine("Hi", "There", "!");
alert(combinedString);

task3Element.addEventListener('click', first)