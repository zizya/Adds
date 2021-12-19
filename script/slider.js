
var nodeList = Array.prototype.slice.call(document.getElementById('firstGroup').children);
var nodeList2 = Array.prototype.slice.call(document.getElementById('secondGroup').children);
var nodeList3 = Array.prototype.slice.call(document.getElementById('thirdGroup').children);
const sliderLine = document.getElementById('sliderLine');

let i = 1;
let offset = 0;


let buttonRight = document.getElementById('ar');
buttonRight.addEventListener('click', function () {
    i++;
    console.log(i);

    offset += 460;

    if (offset > 920) {
        offset = 0;
    };
    if (i > 3) {
        i = 0;
        i++;
    }
    if (i == 1) {
        console.log(i);
        nodeList.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(1)`;
        });
        nodeList2.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;

        });
        nodeList3.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;

        });

        console.log(i);
    };
    if (i == 2) {
        console.log(i);
        nodeList.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;
        });
        nodeList2.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(1)`;

        });
        nodeList3.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;

        });

        console.log(i);
    };
    if (i == 3) {

        nodeList.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;
        });
        nodeList2.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;

        });
        nodeList3.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(1)`;

        });


        console.log(i);
    };
    console.log(i);
    sliderLine.style.left = -offset + 'px';

});

let buttonLeft = document.getElementById('al');
buttonLeft.addEventListener('click', function () {
    if (i <= 0) {
        i = 0;
    }
    i++;
    console.log(i);
    offset -= 460;
    if (offset < 0) {
        offset = 920;
    }
    if (i > 3) {
        i = 0;
        i++;
    }
    if (i == 1) {
        console.log(i);
        nodeList.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(1)`;
        });
        nodeList2.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;

        });
        nodeList3.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;

        });

        console.log(i);
    };
    if (i == 2) {
        console.log(i);
        nodeList.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;
        });
        nodeList2.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;

        });
        nodeList3.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(1)`;

        });

        console.log(i);
    };
    if (i == 3) {

        nodeList.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;
        });
        nodeList2.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(1)`;

        });
        nodeList3.forEach(element => {
            element.style.transition = 1 + 's';
            element.style.transform = `scale(0)`;
            i--;
        });


        console.log(i);
    };
    console.log(i);
    sliderLine.style.left = -offset + 'px';

});

