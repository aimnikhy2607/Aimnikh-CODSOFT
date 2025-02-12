function Solve(val) {
   var v = document.getElementById('display');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('display').value;
   try {
      var num2 = eval(num1.replace('x', '*'));
      document.getElementById('display').value = num2;
   } catch {
      document.getElementById('display').value = 'Error';
   }
}
function Clear() {
   var inp = document.getElementById('display');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('display');
   ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
      Solve(key === '*' ? 'x' : key);
   } else if (key === 'clear') {
      Result();
   } else if (key === 'Backspace') {
      Back();
   } else if (key.toLowerCase() === 'c') {
      Clear();
   }
});