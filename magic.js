
var check1 = "";
var check2 = "";
var c = 0;
var d = 0;
var a1 = 0;
var s1 = "";
var s2 = "";
for (var aaa = [], i = 0; i < 20; ++i) aaa[i] = i;

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


    document.getElementsByClassName("back")[arrr.indexOf(1)].style.backgroundImage = "url('./img/css3-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(1)].classList.add('css');

    document.getElementsByClassName("back")[arrr.indexOf(2)].style.backgroundImage = "url('./img/css3-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(2)].classList.add('css');

    document.getElementsByClassName("back")[arrr.indexOf(3)].style.backgroundImage = "url('./img/jquery-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(3)].classList.add('jquery');

    document.getElementsByClassName("back")[arrr.indexOf(4)].style.backgroundImage = "url('./img/jquery-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(4)].classList.add('jquery');

    document.getElementsByClassName("back")[arrr.indexOf(5)].style.backgroundImage = "url('./img/nodejs-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(5)].classList.add('nodejs');

    document.getElementsByClassName("back")[arrr.indexOf(6)].style.backgroundImage = "url('./img/nodejs-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(6)].classList.add('nodejs');

    document.getElementsByClassName("back")[arrr.indexOf(7)].style.backgroundImage = "url('./img/js-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(7)].classList.add('js');

    document.getElementsByClassName("back")[arrr.indexOf(8)].style.backgroundImage = "url('./img/js-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(8)].classList.add('js');

    document.getElementsByClassName("back")[arrr.indexOf(9)].style.backgroundImage = "url('./img/photoshop-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(9)].classList.add('photoshop');

    document.getElementsByClassName("back")[arrr.indexOf(10)].style.backgroundImage = "url('./img/photoshop-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(10)].classList.add('photoshop');

    document.getElementsByClassName("back")[arrr.indexOf(11)].style.backgroundImage = "url('./img/php-logo_1.png')";
    document.getElementsByClassName("back")[arrr.indexOf(11)].classList.add('php');

    document.getElementsByClassName("back")[arrr.indexOf(12)].style.backgroundImage = "url('./img/php-logo_1.png')";
    document.getElementsByClassName("back")[arrr.indexOf(12)].classList.add('php');

    document.getElementsByClassName("back")[arrr.indexOf(13)].style.backgroundImage = "url('./img/rails-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(13)].classList.add('rails');

    document.getElementsByClassName("back")[arrr.indexOf(14)].style.backgroundImage = "url('./img/rails-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(14)].classList.add('rails');

    document.getElementsByClassName("back")[arrr.indexOf(15)].style.backgroundImage = "url('./img/sass-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(15)].classList.add('sass');

    document.getElementsByClassName("back")[arrr.indexOf(16)].style.backgroundImage = "url('./img/sass-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(16)].classList.add('sass');

    document.getElementsByClassName("back")[arrr.indexOf(17)].style.backgroundImage = "url('./img/sublime-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(17)].classList.add('sublime');

    document.getElementsByClassName("back")[arrr.indexOf(18)].style.backgroundImage = "url('./img/sublime-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(18)].classList.add('sublime');

    document.getElementsByClassName("back")[arrr.indexOf(19)].style.backgroundImage = "url('./img/wordpress-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(19)].classList.add('wordpress');

    document.getElementsByClassName("back")[arrr.indexOf(0)].style.backgroundImage = "url('./img/wordpress-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(0)].classList.add('wordpress');

}




arrayy();

document.getElementsByClassName("box")[0].addEventListener("click", function () {

    c += 1;
    d += 2 * 1;
    s1 = 0;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[0].style.backgroundImage;



    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[0].style.backgroundImage;


    }

    if (d === 2 * 1 * 2) {
        c = 0;
        d = 0;


    }



    document.getElementsByClassName("front")[0].style.display = 'none';
    document.getElementsByClassName("back")[0].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[0].style.display = 'block';
        document.getElementsByClassName("back")[0].style.display = 'none';

    }, 1000);

    checkk();

});


document.getElementsByClassName("box")[10].addEventListener("click", function () {

    c += 1;
    d += 2 * 11;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[10].style.backgroundImage;

    }
    if (c === 2) {
        check2 = document.getElementsByClassName("back")[10].style.backgroundImage;

    }

    if (d === 2 * 11 * 2) {
        c = 0;
        d = 0;
    }



    document.getElementsByClassName("front")[10].style.display = 'none';
    document.getElementsByClassName("back")[10].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[10].style.display = 'block';
        document.getElementsByClassName("back")[10].style.display = 'none';
    }, 1000);
    checkk();


});

document.getElementsByClassName("box")[1].addEventListener("click", function () {
    c += 1;
    d += 2 * 2;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[1].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[1].style.backgroundImage;

    }

    if (d === 2 * 2 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[1].style.display = 'none';
    document.getElementsByClassName("back")[1].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[1].style.display = 'block';
        document.getElementsByClassName("back")[1].style.display = 'none';
    }, 1000);
    checkk();

});

document.getElementsByClassName("box")[2].addEventListener("click", function () {
    c += 1;
    d += 2 * 3;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[2].style.backgroundImage;

    }
    if (c === 2) {
        check2 = document.getElementsByClassName("back")[2].style.backgroundImage;

    }

    if (d === 2 * 3 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[2].style.display = 'none';
    document.getElementsByClassName("back")[2].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[2].style.display = 'block';
        document.getElementsByClassName("back")[2].style.display = 'none';
    }, 1000);
    checkk();

});

document.getElementsByClassName("box")[3].addEventListener("click", function () {
    c += 1;
    d += 2 * 4;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[3].style.backgroundImage;

    }
    if (c === 2) {
        check2 = document.getElementsByClassName("back")[3].style.backgroundImage;

    }

    if (d === 2 * 4 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[3].style.display = 'none';
    document.getElementsByClassName("back")[3].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[3].style.display = 'block';
        document.getElementsByClassName("back")[3].style.display = 'none';
    }, 1000);
    checkk();

});

document.getElementsByClassName("box")[4].addEventListener("click", function () {
    c += 1;
    d += 2 * 5;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[4].style.backgroundImage;

    }
    if (c === 2) {
        check2 = document.getElementsByClassName("back")[4].style.backgroundImage;

    }

    if (d === 2 * 5 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[4].style.display = 'none';
    document.getElementsByClassName("back")[4].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[4].style.display = 'block';
        document.getElementsByClassName("back")[4].style.display = 'none';
    }, 1000);
    checkk();

});

document.getElementsByClassName("box")[5].addEventListener("click", function () {
    c += 1;
    d += 2 * 6;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[5].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[5].style.backgroundImage;

    }

    if (d === 2 * 6 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[5].style.display = 'none';
    document.getElementsByClassName("back")[5].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[5].style.display = 'block';
        document.getElementsByClassName("back")[5].style.display = 'none';
    }, 1000);
    checkk();

});

document.getElementsByClassName("box")[6].addEventListener("click", function () {
    c += 1;
    d += 2 * 7;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[6].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[6].style.backgroundImage;

    }

    if (d === 2 * 7 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[6].style.display = 'none';
    document.getElementsByClassName("back")[6].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[6].style.display = 'block';
        document.getElementsByClassName("back")[6].style.display = 'none';
    }, 1000);
    checkk();

});

document.getElementsByClassName("box")[7].addEventListener("click", function () {
    c += 1;
    d += 2 * 8;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[7].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[7].style.backgroundImage;

    }

    if (d === 2 * 8 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[7].style.display = 'none';
    document.getElementsByClassName("back")[7].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[7].style.display = 'block';
        document.getElementsByClassName("back")[7].style.display = 'none';
    }, 1000);
    checkk();

});

document.getElementsByClassName("box")[8].addEventListener("click", function () {
    c += 1;
    d += 2 * 9;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[8].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[8].style.backgroundImage;

    }

    if (d === 2 * 9 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[8].style.display = 'none';
    document.getElementsByClassName("back")[8].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[8].style.display = 'block';
        document.getElementsByClassName("back")[8].style.display = 'none';
    }, 1000);
    checkk();

});

document.getElementsByClassName("box")[9].addEventListener("click", function () {
    c += 1;
    d += 2 * 10;
    if (c === 1) {
        check1 = document.getElementsByClassName("back")[9].style.backgroundImage;

    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[9].style.backgroundImage;

    }

    if (d === 2 * 10 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[9].style.display = 'none';
    document.getElementsByClassName("back")[9].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[9].style.display = 'block';
        document.getElementsByClassName("back")[9].style.display = 'none';
    }, 1000);
    checkk();


});




document.getElementsByClassName("box")[11].addEventListener("click", function () {

    c += 1;
    d += 2 * 12;

    if (c === 1) {
        check1 = document.getElementsByClassName("back")[11].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[11].style.backgroundImage;

    }

    if (d === 2 * 12 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[11].style.display = 'none';
    document.getElementsByClassName("back")[11].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[11].style.display = 'block';
        document.getElementsByClassName("back")[11].style.display = 'none';
    }, 1000);
    checkk();


});

document.getElementsByClassName("box")[12].addEventListener("click", function () {

    c += 1;
    d += 2 * 13;

    if (c === 1) {
        check1 = document.getElementsByClassName("back")[12].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[12].style.backgroundImage;

    }

    if (d === 2 * 13 * 2) {
        c = 0;
        d = 0;
    }

    document.getElementsByClassName("front")[12].style.display = 'none';
    document.getElementsByClassName("back")[12].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[12].style.display = 'block';
        document.getElementsByClassName("back")[12].style.display = 'none';
    }, 1000);
    checkk();


});

document.getElementsByClassName("box")[13].addEventListener("click", function () {

    c += 1;
    d += 2 * 14;

    if (c === 1) {
        check1 = document.getElementsByClassName("back")[13].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[13].style.backgroundImage;

    }

    if (d === 2 * 14 * 2) {
        c = 0;
        d = 0;
    }
    document.getElementsByClassName("front")[13].style.display = 'none';
    document.getElementsByClassName("back")[13].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[13].style.display = 'block';
        document.getElementsByClassName("back")[13].style.display = 'none';
    }, 1000);
    checkk();


});

document.getElementsByClassName("box")[14].addEventListener("click", function () {

    c += 1;
    d += 2 * 15;

    if (c === 1) {
        check1 = document.getElementsByClassName("back")[14].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[14].style.backgroundImage;

    }

    if (d === 2 * 15 * 2) {
        c = 0;
        d = 0;
    }


    document.getElementsByClassName("front")[14].style.display = 'none';
    document.getElementsByClassName("back")[14].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[14].style.display = 'block';
        document.getElementsByClassName("back")[14].style.display = 'none';
    }, 1000);
    checkk();


});

document.getElementsByClassName("box")[15].addEventListener("click", function () {

    c += 1;
    d += 2 * 16;

    if (c === 1) {
        check1 = document.getElementsByClassName("back")[15].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[15].style.backgroundImage;

    }

    if (d === 2 * 16 * 2) {
        c = 0;
        d = 0;
    }


    document.getElementsByClassName("front")[15].style.display = 'none';
    document.getElementsByClassName("back")[15].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[15].style.display = 'block';
        document.getElementsByClassName("back")[15].style.display = 'none';
    }, 1000);
    checkk();


});

document.getElementsByClassName("box")[16].addEventListener("click", function () {

    c += 1;
    d += 2 * 17;

    if (c === 1) {
        check1 = document.getElementsByClassName("back")[16].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[16].style.backgroundImage;

    }

    if (d === 2 * 17 * 2) {
        c = 0;
        d = 0;
    }


    document.getElementsByClassName("front")[16].style.display = 'none';
    document.getElementsByClassName("back")[16].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[16].style.display = 'block';
        document.getElementsByClassName("back")[16].style.display = 'none';
    }, 1000);
    checkk();


});

document.getElementsByClassName("box")[17].addEventListener("click", function () {

    c += 1;
    d += 2 * 18;

    if (c === 1) {
        check1 = document.getElementsByClassName("back")[17].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[17].style.backgroundImage;

    }

    if (d === 2 * 18 * 2) {
        c = 0;
        d = 0;
    }


    document.getElementsByClassName("front")[17].style.display = 'none';
    document.getElementsByClassName("back")[17].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[17].style.display = 'block';
        document.getElementsByClassName("back")[17].style.display = 'none';
    }, 1000);
    checkk();


});

document.getElementsByClassName("box")[18].addEventListener("click", function () {

    c += 1;
    d += 2 * 19;

    if (c === 1) {
        check1 = document.getElementsByClassName("back")[18].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[18].style.backgroundImage;

    }

    if (d === 2 * 19 * 2) {
        c = 0;
        d = 0;
    }


    document.getElementsByClassName("front")[18].style.display = 'none';
    document.getElementsByClassName("back")[18].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[18].style.display = 'block';
        document.getElementsByClassName("back")[18].style.display = 'none';
    }, 1000);
    checkk();


});

document.getElementsByClassName("box")[19].addEventListener("click", function () {

    c += 1;
    d += 2 * 20;

    if (c === 1) {
        check1 = document.getElementsByClassName("back")[19].style.backgroundImage;
    }

    if (c === 2) {
        check2 = document.getElementsByClassName("back")[19].style.backgroundImage;
    }
    if (d === 2 * 20 * 2) {
        c = 0;
        d = 0;
    }


    document.getElementsByClassName("front")[19].style.display = 'none';
    document.getElementsByClassName("back")[19].style.display = 'block';

    setTimeout(function () {
        document.getElementsByClassName("front")[19].style.display = 'block';
        document.getElementsByClassName("back")[19].style.display = 'none';
    }, 1000);
    checkk();


});


document.getElementsByClassName("css")[0].addEventListener("click", function () {
    alert("CSS");
});

function checkk() {
    if (c > 2) {
        c = 0;
        d = 0;
        // check1 = "";
        // check2 = "";
    }
    if (check1 === check2 && c === 2
    ) {
        alert(check1);
        check1 = "";
        check2 = "";
        alert("Đúng rồi");
        c = 0;
        d = 0;

        //  if (document.getElementsByClassName)
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