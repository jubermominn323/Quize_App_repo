const qBank = [
  {
    question:
      "Which of the following variable types does not exist in JavaScript? ",
    answers: ["boolean", "object", "double", "number"],
    correct: "double",
    questionId: "099099"
  },
  {
    question:
      'The function call Math.ceil(3.5) returns:',
    answers: ["Throws a MathError exception.", "4", "0", "3"],
    correct: "4",
    questionId: "183452"
  },
  {
    question:
      "What is result of the following expression: var a = “test”; console.log(!!a);",
    answers: ["Syntax Error", "false", "true", "undefined"],
    correct: "true",
    questionId: "267908"
  },
  {
    question: "In an array object, what is the key of the first value?",
    answers: ["0", "1", "$", "-1"],
    correct: "0",
    questionId: "333247"
  },
  {
    question: "The _______ operator returns a string that identifies the type of its operand.",
    answers: ["typeof", "typename", "Type", "TypeOf"],
    correct: "typeof",
    questionId: "496293"
  },
  {
    question:
      "What is the output? var one; var two = null; console.log(one == two, one === two);",
    answers: [
      "true true",
      "false false",
      "true false",
      "Error: one is not defined"
    ],
    correct: "true false",
    questionId: "588909"
  },
  {
    question:
      'Which is not a primitive data type in JavaScript?',
    answers: ["boolean", "character", "number", "string"],
    correct: "character",
    questionId: "648452"
  },
  {
    question: "What is the result? “” ? “a” : “b”",
    answers: ['""', '"a"', '"b"', "Error: “” is not a boolean"],
    correct: '"b"',
    questionId: "786649"
  },
  {
    question:
      "What is the result? 0 == “”",
    answers: ["Error: type mismatch", "true", "false","None of the above"],
    correct: "true",
    questionId: "839754"
  },
  {
    question:
      "How can you remove an element from an array and replace it with a new one ?",
    answers: [
      "array.overwrite(…)",
      "array.splice(…)",
      "array.split(…)",
      "array.replace(…)"
    ],
    correct: "array.splice(…)",
    questionId: "98390"
  },
  {
    question: "Which of the following String prototype method takes a regular expression?",
    answers: ["search()", "indexOf()", "charCodeAt()", "All of these"],
    correct: "search()",
    questionId: "1174154"
  },
  {
    question: "‘&’ Operator is _____",
    answers: ["a displacement bit operator", "an operator used in conditionals", "a bitwise operator", "an assignment operator"],
    correct: "a bitwise operator",
    questionId: "1226535"
  },
  {
    question: "What is the result of the following expression? ({“foo”: true}).foo;",
    answers: ["false", "true", "undefined", "SyntaxError"],
    correct: "true",
    questionId: "1310938"
  },
  {
    question: "var x = Math.ceil(10.126); What is the value of x?",
    answers: ["10", "11", "10.13", "An error, because it was called incorrectly"],
    correct: "11",
    questionId: "1436873"
  },
  {
    question: "Which of the following orders can be performed with the Array prototype “sort()” callback?",
    answers: ["Ascending alphabetical", "Descending alphabetical", "ASCII ordering", "All of these"],
    correct: "All of these",
    questionId: "1515110"
  },
  {
    question: "What character ends a javascript statement?",
    answers: ["An exclamation mark “!”.", "A semicolon “;”.", "A period “.”.", "A colon “:”."],
    correct: "A semicolon “;”.",
    questionId: "1642728"
  },
  {
    question:
      "Which of the following is an Error object constructor?",
    answers: ["EvalError", "All of these", "Error", "RangeError"],
    correct: "All of these",
    questionId: "1747256"
  },
  {
    question:
      "What does “2” + 3 + 4 evaluate to?",
    answers: ["9", "27", "234", "Error"],
    correct: "234",
    questionId: "1822532"
  },
  {
    question: "Which symbol is not used in logical operations?",
    answers: ["!", "%","&&", "||"],
    correct: "%",
    questionId: "2134343"
  },
  {
    question: "Which of the following is not a reserved word?",
    answers: ["throw", "void", "program","return"],
    correct: "program",
    questionId: "2210799"
  },
  {
    question:
      "How do you define a function called “fName”?",
    answers: ["function fName() { }", "new fName = { }", "func fName = function () {}", "None of these"],
    correct: "function fName() { }",
    questionId: "2379831"
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answers: ["Math.max(x, y)", "ceil(x, y)", "max(x, y)", "top(x, y)"],
    correct: "Math.max(x, y)",
    questionId: "2426418"
  },
  {
    question: "Which of these operators compares two variables by value AND type?",
    answers: ["==", "===", "=", "None of these"],
    correct: "===",
    questionId: "2510086"
  },
  {
    question: "How do you read the first character in a string?",
    answers: ["data.charAt(0);", "data.slice(1)", "data.charAt(1);", "data.substr(0);"],
    correct: "data.charAt(0);",
    questionId: "2510087"
  },
  {
    question: "Which operator has highest precedence?",
    answers: ["*", "+", "-", "/"],
    correct: "*",
    questionId: "2510088"
  },
  {
    question: "var a = ‘011’; parseInt(a); will return:",
    answers: ["11", "0", "9", "error"],
    correct: "11",
    questionId: "2510089"
  },
  {
    question: "When an array index goes out of bounds, what is returned?",
    answers: ["undefined", "Moderate", "An error to the browser", "A default value, like 0"],
    correct: "undefined",
    questionId: "2510090"
  },

  {
    question: "Math.random() returns..",
    answers: ["a random number between 0 and 1", "a random number that can be any value", "a random number between 0 and 100", "a random number between 0 and 1000"],
    correct: "a random number between 0 and 1",
    questionId: "2510091"
  },
  {
    question: "var data = [1, 2, 3, 4, 5, 6]; data.shift(); What does data look like?",
    answers: ["[undefined, 2, 3, 4, 5, 6]", "[2, 3, 4, 5, 6]", "[undefined, 1, 2, 3, 4, 5]", "[6, 1, 2, 3, 4, 5]"],
    correct: "[2, 3, 4, 5, 6]",
    questionId: "10029"
  },
  {
    question: "var data = [1, 2, 3, 4, 5, 6]; data.shift(); What does data look like?",
    answers: ["[undefined, 2, 3, 4, 5, 6]", "[2, 3, 4, 5, 6]", "[undefined, 1, 2, 3, 4, 5]", "[6, 1, 2, 3, 4, 5]"],
    correct: "[2, 3, 4, 5, 6]",
    questionId: "10030"
  },
  {
    question: "Which event fires whenever a control loses focus?",
    answers: ["onclick", "onmove", "onblur", "onchange"],
    correct: "onblur",
    questionId: "10031"
  },

  {
    question: "var a = new Boolean(false); What is (typeof a)?",
    answers: ["false", "‘primitive’", "‘object’", "‘number’"],
    correct: "‘object’",
    questionId: "10032"
  },

  {
    question: "Which is the correct way to write a JavaScript array?",
    answers: ["var names = {0: “Tim”, 1: “Kim”, 2: “Jim”};",
     "var names = {1: “Tim”, 2:”Kim”, 3:”Jim”};",
      "var names = [“Tim”,”Kim”,”Jim”];",
       "var names = array(“Tim”, “Kim”, “Jim”);"],
    correct: "var names = [“Tim”,”Kim”,”Jim”];",
    questionId: "10033"
  },

  {
    question: "var data = [“A”, “B”, “C”, “D”]; data.unshift(“X”); data.push(“Y”); What does data look like?",
    answers: ["[“X”, “A”, “B”, “C”, “D”, “Y”]", "[“A”, “B”, “C”, “X”, “D”, “Y”]", "[“X”, “Y”, “A”, “B”, “C”, “D”]", "[“A”, “B”, “C”, “D”, “X”, “Y”]"],
    correct: "[“X”, “A”, “B”, “C”, “D”, “Y”]",
    questionId: "10034"
  },
  {
    question: "How do you declare a function?",
    answers: ["function doSomething() {}", "function:doSomething() {}", "function=doSomething() {}", "all of these"],
    correct: "function doSomething() {}",
    questionId: "10035"
  },
];

export default (n = 1) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
