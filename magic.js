var check1 = "";
var check2 = "";
var c = 0;
var d = 0;
var a1 = 0;
var s1 = "";
var s2 = "";
var score = 0;
var fasttime = 99999;
var time = 0;
var timeplay;

function setCookie(hihihi, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000000));

    var expires = "expires=" + d.toGMTString();
    document.cookie = hihihi + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(hihihi) {
    var name = hihihi + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var ffasttime = getCookie("ffasttime");
    if (ffasttime != "") {
        fasttime = Number(ffasttime);
    } else {
        if (ffasttime != null) {
            setCookie("ffasttime", ffasttime, 30);
        }
    }

    document.getElementsByClassName("fasttime")[0].innerText = "Thời gian nhanh nhất: " + fasttime;
    var ffasttime = getCookie("ffasttime");
    ffasttime = fasttime;
    if (ffasttime != null) {
        setCookie("ffasttime", ffasttime, 30);

    }
    document.getElementsByClassName("fasttime")[0].innerText = "Thời gian nhanh nhất: " + fasttime;
}

//


document.getElementsByClassName("time")[0].innerText = "Thời gian chơi: " + time;


document.getElementsByClassName("fasttime")[0].innerText = "Thời gian nhanh nhất: " + fasttime;

document.getElementsByClassName("btn-start")[0].addEventListener("click",function(){
    document.getElementById("maingame").style.display='flex';
    this.style.display='none';
});
for (var aaa = [], i = 0; i < 20; ++i) aaa[i] = i;

function shuffle(array) {
    var tmp, current, top = array.length;
    if (top)
        while (--top) {
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
    timeplay = setInterval(function () {
        document.getElementsByClassName("time")[0].innerText = "Thời gian chơi: " + time;
        time += 1;
    }, 1000);

    document.getElementsByClassName("back")[arrr.indexOf(1)].style.backgroundImage = "url('./img/css3-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(1)].classList.add('css');
    document.getElementsByClassName("front")[arrr.indexOf(1)].classList.add('css');
    document.getElementsByClassName("box")[arrr.indexOf(1)].classList.add('css');
    document.getElementsByClassName("back")[arrr.indexOf(2)].style.backgroundImage = "url('./img/css3-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(2)].classList.add('css');
    document.getElementsByClassName("front")[arrr.indexOf(2)].classList.add('css');
    document.getElementsByClassName("box")[arrr.indexOf(2)].classList.add('css');
    document.getElementsByClassName("back")[arrr.indexOf(3)].style.backgroundImage = "url('./img/jquery-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(3)].classList.add('jquery');
    document.getElementsByClassName("front")[arrr.indexOf(3)].classList.add('jquery');
    document.getElementsByClassName("box")[arrr.indexOf(3)].classList.add('jquery');
    document.getElementsByClassName("back")[arrr.indexOf(4)].style.backgroundImage = "url('./img/jquery-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(4)].classList.add('jquery');
    document.getElementsByClassName("front")[arrr.indexOf(4)].classList.add('jquery');
    document.getElementsByClassName("box")[arrr.indexOf(4)].classList.add('jquery');
    document.getElementsByClassName("back")[arrr.indexOf(5)].style.backgroundImage = "url('./img/nodejs-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(5)].classList.add('nodejs');
    document.getElementsByClassName("front")[arrr.indexOf(5)].classList.add('nodejs');
    document.getElementsByClassName("box")[arrr.indexOf(5)].classList.add('nodejs');
    document.getElementsByClassName("back")[arrr.indexOf(6)].style.backgroundImage = "url('./img/nodejs-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(6)].classList.add('nodejs');
    document.getElementsByClassName("front")[arrr.indexOf(6)].classList.add('nodejs');
    document.getElementsByClassName("box")[arrr.indexOf(6)].classList.add('nodejs');
    document.getElementsByClassName("back")[arrr.indexOf(7)].style.backgroundImage = "url('./img/js-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(7)].classList.add('js');
    document.getElementsByClassName("front")[arrr.indexOf(7)].classList.add('js');
    document.getElementsByClassName("box")[arrr.indexOf(7)].classList.add('js');
    document.getElementsByClassName("back")[arrr.indexOf(8)].style.backgroundImage = "url('./img/js-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(8)].classList.add('js');
    document.getElementsByClassName("front")[arrr.indexOf(8)].classList.add('js');
    document.getElementsByClassName("box")[arrr.indexOf(8)].classList.add('js');
    document.getElementsByClassName("back")[arrr.indexOf(9)].style.backgroundImage = "url('./img/photoshop-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(9)].classList.add('photoshop');
    document.getElementsByClassName("front")[arrr.indexOf(9)].classList.add('photoshop');
    document.getElementsByClassName("box")[arrr.indexOf(9)].classList.add('photoshop');
    document.getElementsByClassName("back")[arrr.indexOf(10)].style.backgroundImage = "url('./img/photoshop-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(10)].classList.add('photoshop');
    document.getElementsByClassName("front")[arrr.indexOf(10)].classList.add('photoshop');
    document.getElementsByClassName("box")[arrr.indexOf(10)].classList.add('photoshop');
    document.getElementsByClassName("back")[arrr.indexOf(11)].style.backgroundImage = "url('./img/php-logo_1.png')";
    document.getElementsByClassName("back")[arrr.indexOf(11)].classList.add('php');
    document.getElementsByClassName("front")[arrr.indexOf(11)].classList.add('php');
    document.getElementsByClassName("box")[arrr.indexOf(11)].classList.add('php');
    document.getElementsByClassName("back")[arrr.indexOf(12)].style.backgroundImage = "url('./img/php-logo_1.png')";
    document.getElementsByClassName("back")[arrr.indexOf(12)].classList.add('php');
    document.getElementsByClassName("front")[arrr.indexOf(12)].classList.add('php');
    document.getElementsByClassName("box")[arrr.indexOf(12)].classList.add('php');
    document.getElementsByClassName("back")[arrr.indexOf(13)].style.backgroundImage = "url('./img/rails-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(13)].classList.add('rails');
    document.getElementsByClassName("front")[arrr.indexOf(13)].classList.add('rails');
    document.getElementsByClassName("box")[arrr.indexOf(13)].classList.add('rails');
    document.getElementsByClassName("back")[arrr.indexOf(14)].style.backgroundImage = "url('./img/rails-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(14)].classList.add('rails');
    document.getElementsByClassName("front")[arrr.indexOf(14)].classList.add('rails');
    document.getElementsByClassName("box")[arrr.indexOf(14)].classList.add('rails');
    document.getElementsByClassName("back")[arrr.indexOf(15)].style.backgroundImage = "url('./img/sass-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(15)].classList.add('sass');
    document.getElementsByClassName("front")[arrr.indexOf(15)].classList.add('sass');
    document.getElementsByClassName("box")[arrr.indexOf(15)].classList.add('sass');
    document.getElementsByClassName("back")[arrr.indexOf(16)].style.backgroundImage = "url('./img/sass-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(16)].classList.add('sass');
    document.getElementsByClassName("front")[arrr.indexOf(16)].classList.add('sass');
    document.getElementsByClassName("box")[arrr.indexOf(16)].classList.add('sass');
    document.getElementsByClassName("back")[arrr.indexOf(17)].style.backgroundImage = "url('./img/sublime-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(17)].classList.add('sublime');
    document.getElementsByClassName("front")[arrr.indexOf(17)].classList.add('sublime');
    document.getElementsByClassName("box")[arrr.indexOf(17)].classList.add('sublime');
    document.getElementsByClassName("back")[arrr.indexOf(18)].style.backgroundImage = "url('./img/sublime-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(18)].classList.add('sublime');
    document.getElementsByClassName("front")[arrr.indexOf(18)].classList.add('sublime');
    document.getElementsByClassName("box")[arrr.indexOf(18)].classList.add('sublime');
    document.getElementsByClassName("back")[arrr.indexOf(19)].style.backgroundImage = "url('./img/wordpress-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(19)].classList.add('wordpress');
    document.getElementsByClassName("front")[arrr.indexOf(19)].classList.add('wordpress');
    document.getElementsByClassName("box")[arrr.indexOf(19)].classList.add('wordpress');
    document.getElementsByClassName("back")[arrr.indexOf(0)].style.backgroundImage = "url('./img/wordpress-logo.png')";
    document.getElementsByClassName("back")[arrr.indexOf(0)].classList.add('wordpress');
    document.getElementsByClassName("front")[arrr.indexOf(0)].classList.add('wordpress');
    document.getElementsByClassName("box")[arrr.indexOf(0)].classList.add('wordpress');
}
arrayy();
document.getElementsByClassName("box")[0].addEventListener("click", function () {
    c += 1;
    d += 2 * 1;
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
document.getElementsByClassName("front css")[0].addEventListener("click", function () {
    s1 = "css";
});
document.getElementsByClassName("front css")[1].addEventListener("click", function () {
    s2 = "css";
    //   alert("S2");
});
document.getElementsByClassName("front jquery")[0].addEventListener("click", function () {
    s1 = "jquery";
});
document.getElementsByClassName("front jquery")[1].addEventListener("click", function () {
    s2 = "jquery";
});
document.getElementsByClassName("front js")[0].addEventListener("click", function () {
    s1 = "js";
});
document.getElementsByClassName("front js")[1].addEventListener("click", function () {
    s2 = "js";
});
document.getElementsByClassName("front nodejs")[0].addEventListener("click", function () {
    s1 = "nodejs";
});
document.getElementsByClassName("front nodejs")[1].addEventListener("click", function () {
    s2 = "nodejs";
});
document.getElementsByClassName("front photoshop")[0].addEventListener("click", function () {
    s1 = "photoshop";
});
document.getElementsByClassName("front photoshop")[1].addEventListener("click", function () {
    s2 = "photoshop";
});
document.getElementsByClassName("front php")[0].addEventListener("click", function () {
    s1 = "php";
});
document.getElementsByClassName("front php")[1].addEventListener("click", function () {
    s2 = "php";
});
document.getElementsByClassName("front rails")[0].addEventListener("click", function () {
    s1 = "rails";
});
document.getElementsByClassName("front rails")[1].addEventListener("click", function () {
    s2 = "rails";
});
document.getElementsByClassName("front sass")[0].addEventListener("click", function () {
    s1 = "sass";
});
document.getElementsByClassName("front sass")[1].addEventListener("click", function () {
    s2 = "sass";
});
document.getElementsByClassName("front sublime")[0].addEventListener("click", function () {
    s1 = "sublime";
});
document.getElementsByClassName("front sublime")[1].addEventListener("click", function () {
    s2 = "sublime";
});
document.getElementsByClassName("front wordpress")[0].addEventListener("click", function () {
    s1 = "wordpress";
});
document.getElementsByClassName("front wordpress")[1].addEventListener("click", function () {
    s2 = "wordpress";
});

function checkk() {
    if (c > 2) {
        c = 0;
        d = 0;
        // check1 = "";
        // check2 = "";
    }
    if (check1 === check2 && c === 2) {

        check1 = "";
        check2 = "";
        // alert("Đúng rồi");
        c = 0;
        d = 0;
        if (s1 === s2 && s1 === "css") {
            document.getElementsByClassName("box css")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box css")[1].style.visibility = 'hidden';
            score += 1;
        }
        if (s1 === s2 && s1 === "jquery") {
            document.getElementsByClassName("box jquery")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box jquery")[1].style.visibility = 'hidden';
            score += 1;
        }
        if (s1 === s2 && s1 === "js") {
            document.getElementsByClassName("box js")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box js")[1].style.visibility = 'hidden';
            score += 1;
        }
        if (s1 === s2 && s1 === "nodejs") {
            document.getElementsByClassName("box nodejs")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box nodejs")[1].style.visibility = 'hidden';
            score += 1;
        }
        if (s1 === s2 && s1 === "php") {
            document.getElementsByClassName("box php")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box php")[1].style.visibility = 'hidden';
            score += 1;
        }
        if (s1 === s2 && s1 === "photoshop") {
            document.getElementsByClassName("box photoshop")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box photoshop")[1].style.visibility = 'hidden';
            score += 1;
        }
        if (s1 === s2 && s1 === "rails") {
            document.getElementsByClassName("box rails")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box rails")[1].style.visibility = 'hidden';
            score += 1;
        }
        if (s1 === s2 && s1 === "sass") {
            document.getElementsByClassName("box sass")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box sass")[1].style.visibility = 'hidden';
            score += 1;
        }
        if (s1 === s2 && s1 === "sublime") {
            document.getElementsByClassName("box sublime")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box sublime")[1].style.visibility = 'hidden';
            score += 1;
        }
        if (s1 === s2 && s1 === "wordpress") {
            document.getElementsByClassName("box wordpress")[0].style.visibility = 'hidden';
            document.getElementsByClassName("box wordpress")[1].style.visibility = 'hidden';
            score += 1;
        }

        if (score === 10) {
            alert("You win");
            savefasttime();
        }


    }
}

function savefasttime() {
    if (time < fasttime) {
        fasttime = time;
        document.getElementsByClassName("fasttime")[0].innerText = "Điểm: " + fasttime;
        document.getElementsByClassName("fasttime")[0].innerHTML = "Điểm cao nhất:" + fasttime;
        var ffasttime = getCookie("ffasttime");
        ffasttime = fasttime;
        if (ffasttime != null) {
            setCookie("ffasttime", ffasttime, 30);

        }
        document.getElementsByClassName("fasttime")[0].innerHTML = "Điểm cao nhất:" + fasttime;
        clearInterval(timeplay);
    }
}

