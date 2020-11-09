for (var aaa=[],i=0;i<5;++i) aaa[i]=i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

arrr = shuffle(aaa);
alert(arrr);   



function arrayy() {
    for (i = 0; i <= 10; i++) {
        document.getElementsByClassName("box")[arrr[0]].style.background='red'; 
    }

}


arrayy();












/*



if (array.indexOf(math) === -1) {
  alert("element doesn't exist");
}
else {
  alert("element found");
}



function GetRandomNum(Min,Max)
{
var Range = Max - Min;
var Rand = Math.random();
return(Min + Math.round(Rand * Range));
}
var num = GetRandomNum(1,5);
alert(num);

*/