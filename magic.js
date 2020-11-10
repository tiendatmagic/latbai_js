
var check1 = "";
var check2 = "";
var c = 0;
var d = 0;
for (var aaa = [], i = 0; i < 20; ++i) aaa[i] = i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
    var tmp, current, top = array.length;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

arrr = shuffle(aaa);
//alert(arrr);   



function arrayy() {
    for (i = 0; i <= 20; i++) {
        document.getElementsByClassName("box")[arrr[0]].style.backgroundImage = "url('./img/css3-logo.png')";
        document.getElementsByClassName("box")[arrr[1]].style.backgroundImage = "url('./img/jquery-logo.png')";
        document.getElementsByClassName("box")[arrr[2]].style.backgroundImage = "url('./img/nodejs-logo.png')";
        document.getElementsByClassName("box")[arrr[3]].style.backgroundImage = "url('./img/js-logo.png')";
        document.getElementsByClassName("box")[arrr[4]].style.backgroundImage = "url('./img/photoshop-logo.png')";
        document.getElementsByClassName("box")[arrr[5]].style.backgroundImage = "url('./img/php-logo_1.png')";
        document.getElementsByClassName("box")[arrr[6]].style.backgroundImage = "url('./img/rails-logo.png')";
        document.getElementsByClassName("box")[arrr[7]].style.backgroundImage = "url('./img/sass-logo.png')";
        document.getElementsByClassName("box")[arrr[8]].style.backgroundImage = "url('./img/sublime-logo.png')";
        document.getElementsByClassName("box")[arrr[9]].style.backgroundImage = "url('./img/wordpress-logo.png')";

        document.getElementsByClassName("box")[arrr[10]].style.backgroundImage = "url('./img/css3-logo.png')";
        document.getElementsByClassName("box")[arrr[11]].style.backgroundImage = "url('./img/jquery-logo.png')";
        document.getElementsByClassName("box")[arrr[12]].style.backgroundImage = "url('./img/nodejs-logo.png')";
        document.getElementsByClassName("box")[arrr[13]].style.backgroundImage = "url('./img/js-logo.png')";
        document.getElementsByClassName("box")[arrr[14]].style.backgroundImage = "url('./img/photoshop-logo.png')";
        document.getElementsByClassName("box")[arrr[15]].style.backgroundImage = "url('./img/php-logo_1.png')";
        document.getElementsByClassName("box")[arrr[16]].style.backgroundImage = "url('./img/rails-logo.png')";
        document.getElementsByClassName("box")[arrr[17]].style.backgroundImage = "url('./img/sass-logo.png')";
        document.getElementsByClassName("box")[arrr[18]].style.backgroundImage = "url('./img/sublime-logo.png')";
        document.getElementsByClassName("box")[arrr[19]].style.backgroundImage = "url('./img/wordpress-logo.png')";
        //document.body.style.backgroundImage = "url('img_tree.png')";
    }
}




arrayy();

document.getElementsByClassName("box")[0].addEventListener("click", function () {
    c += 1;
    d += 2 * 1;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[0]].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[0]].style.backgroundImage;

    }




    checkk();

});

document.getElementsByClassName("box")[10].addEventListener("click", function () {

    c += 1;
    d += 2 * 11;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[10]].style.backgroundImage;

    }
    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[10]].style.backgroundImage;

    }

    checkk();


});

document.getElementsByClassName("box")[1].addEventListener("click", function () {
    c += 1;
    d += 2 * 2;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[1]].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[1]].style.backgroundImage;

    }
    checkk();

});

document.getElementsByClassName("box")[2].addEventListener("click", function () {
    c += 1;
    d += 2 * 3;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[2]].style.backgroundImage;

    }
    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[2]].style.backgroundImage;

    }
    checkk();

});

document.getElementsByClassName("box")[3].addEventListener("click", function () {
    c += 1;
    d += 2 * 4;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[3]].style.backgroundImage;

    }
    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[3]].style.backgroundImage;

    }
    checkk();

});

document.getElementsByClassName("box")[4].addEventListener("click", function () {
    c += 1;
    d += 2 * 5;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[4]].style.backgroundImage;

    }
    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[4]].style.backgroundImage;

    }
    checkk();

});

document.getElementsByClassName("box")[5].addEventListener("click", function () {
    c += 1;
    d += 2 * 6;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[5]].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[5]].style.backgroundImage;

    }
    checkk();

});

document.getElementsByClassName("box")[6].addEventListener("click", function () {
    c += 1;
    d += 2 * 7;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[6]].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[6]].style.backgroundImage;

    }
    checkk();

});

document.getElementsByClassName("box")[7].addEventListener("click", function () {
    c += 1;
    d += 2 * 8;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[7]].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[7]].style.backgroundImage;

    }
    checkk();

});

document.getElementsByClassName("box")[8].addEventListener("click", function () {
    c += 1;
    d += 2 * 9;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[8]].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[8]].style.backgroundImage;

    }
    checkk();

});

document.getElementsByClassName("box")[9].addEventListener("click", function () {
    c += 1;
    d += 2 * 10;
    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[9]].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[9]].style.backgroundImage;

    }
    checkk();

});




document.getElementsByClassName("box")[11].addEventListener("click", function () {

    c += 1;
    d += 2 * 12;

    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[11]].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[11]].style.backgroundImage;

    }
    checkk();


});

document.getElementsByClassName("box")[12].addEventListener("click", function () {

    c += 1;
    d += 2 * 13;

    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[12]].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[12]].style.backgroundImage;

    }
    checkk();


});

document.getElementsByClassName("box")[13].addEventListener("click", function () {

    c += 1;
    d += 2 * 14;

    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[13]].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[13]].style.backgroundImage;

    }
    checkk();


});

document.getElementsByClassName("box")[14].addEventListener("click", function () {

    c += 1;
    d += 2 * 15;

    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[14]].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[14]].style.backgroundImage;

    }

    checkk();


});

document.getElementsByClassName("box")[15].addEventListener("click", function () {

    c += 1;
    d += 2 * 16;

    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[15]].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[15]].style.backgroundImage;

    }
    checkk();


});

document.getElementsByClassName("box")[16].addEventListener("click", function () {

    c += 1;
    d += 2 * 17;

    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[16]].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[16]].style.backgroundImage;

    }

    checkk();


});

document.getElementsByClassName("box")[17].addEventListener("click", function () {

    c += 1;
    d += 2 * 18;

    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[17]].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[17]].style.backgroundImage;

    }
    checkk();


});

document.getElementsByClassName("box")[18].addEventListener("click", function () {

    c += 1;
    d += 2 * 19;

    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[18]].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[18]].style.backgroundImage;

    }
    checkk();


});

document.getElementsByClassName("box")[19].addEventListener("click", function () {

    c += 1;
    d += 2 * 20;

    if (c === 1) {
        check1 = document.getElementsByClassName("box")[arrr[19]].style.backgroundImage;
    }
    
    if (c === 2) {
        check2 = document.getElementsByClassName("box")[arrr[19]].style.backgroundImage;
    }

    
    checkk();


});

function checkk() {
    if (c > 2) {
        c = 0;
        d = 0;
        // check1 = "";
        // check2 = "";
    }
    if (check1 === check2 && c === 2 && d != 2 * 1 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 2 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 3 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 4 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 5 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 6 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 7 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 8 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 9 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 10 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 11 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 12 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 13 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 14 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 15 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 16 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 17 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 18 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 19 * 2 ||
        check1 === check2 && c === 2 && d != 2 * 20 * 2
    ) {
        check1 = "";
        check2 = "";
        alert("Đúng rồi");
        c = 0;
        d = 0;
    }

}












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