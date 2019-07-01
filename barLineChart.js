var data = {
    values: [{
            X: "Jan",
            Y: 65
        },
        {
            X: "Feb",
            Y: 15
        },
        {
            X: "Mar",
            Y: 85
        },
        {
            X: "Apr",
            Y: 55
        },
        {
            X: "May",
            Y: 90
        },
        {
            X: "June",
            Y: 45
        },
        {
            X: "July",
            Y: 135
        },
        {
            X: "Aug",
            Y: 180
        },
        {
            X: "Sept",
            Y: 0
        },
        {
            X: "Oct",
            Y: 110
        },
    ]
};


var wrapperId = document.getElementById('main-wrapper-div');
var wrapperId1 = document.getElementById('main-wrapper-div-1');
var yOsis = document.getElementById('y-osis');
var yEachEl = document.getElementsByClassName('y-el-class')

var divEl = document.createElement('DIV');
var content = document.createTextNode("test");


let objVal = [...data.values].sort((a, b) => b['Y'] - a['Y']);
let objValAsc = [...data.values].sort((a, b) => a['Y'] - b['Y']);
let yMax = objVal[0]['Y'];

var color = 285;

data.values.map((el, ind, arr) => {
    var divEl = document.createElement('DIV');
    var divEl1 = document.createElement('DIV');

    var yEl = document.createElement('P')
    divEl.id = `each-bar-div-${ind}`;
    divEl1.id = `each-x-osis-${ind}`;

    divEl.className = 'div-el-class'
    divEl1.className = 'div-x-osis-class'

    yEl.className = 'y-el-class'
    yEl.id = `each-y-el-${ind}`;

    var contentY = document.createTextNode(objVal[ind]['Y']);
    var contentX = document.createTextNode(objVal[ind]['X']);

    yEl.appendChild(contentY)
    divEl1.appendChild(contentX)
    yOsis.appendChild(yEl)
    wrapperId1.appendChild(divEl1)

    wrapperId.appendChild(divEl)
    document.getElementById(divEl.id).style.height = `${el.Y  ? el.Y + (el.Y / 2) : el.Y + 5}px`;

    yOsis.style.height = yMax + (yMax / 2)
    color = color > 20 ? color - 21 : color
    document.getElementById(divEl.id).style.backgroundColor = `rgb(${color},0,0)`
})