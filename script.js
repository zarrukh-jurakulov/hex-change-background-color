function myButton() {

 var numbersAndLetters = '0123456789ABCDEF';
 var hashtagNum = '#'

 for (var i = 0; i < 6; i++) {
  hashtagNum += numbersAndLetters[Math.floor(Math.random() * 16)];
 }
 document.body.style.backgroundColor = hashtagNum;
 document.getElementById(hashtagName).innerHTML = hashtagNum;
}

