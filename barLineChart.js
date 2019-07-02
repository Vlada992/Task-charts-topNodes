


/*Bar Chart functionality */
//==================================================================================================================
const storeValues = (() => {
    let byId = id => document.getElementById( id ) ? document.getElementById( id ) : document.getElementsByClassName(id);
    let byEl = el => document.createElement(el);
    let data = {
        values: [
            {X: "Jan",Y: 65}, 
            {X: "Feb",Y: 15},
            {X: "Mar",Y: 85},
            {X: "Apr",Y: 55},
            {X: "May",Y: 90},
            {X: "June",Y: 45},
            {X: "July",Y: 135},
            {X: "Aug",Y: 180},
            {X: "Sept",Y: 0},
            { X: "Oct",Y: 110},
        ]
    };

    let objDesc = [...data.values].sort((a, b) => b['Y'] - a['Y']);
    let yMax = objDesc[0]['Y'], color = 285;
    let graph, xPadding = 30, yPadding = 30;

    return {
        wrapperId: byId('main-wrapper-div'),
        wrapperId1: byId('main-wrapper-div-1'),
        yOsis: byId('y-osis'),
        yEachEl: byId('y-el-class'),
        arrVal: [objDesc, yMax, color, data],
        graphVal:[graph, xPadding, yPadding],
        byId,
        byEl
    }

})();


const barGraph = (arrV => {
    let { byId, byEl, yOsis, wrapperId, wrapperId1} = storeValues;

    arrV[3]['values'].map((el, ind) => {
        let divEl = byEl('DIV'), divEl1 = byEl('DIV'), yEl = byEl('P')

        divEl.id = `each-bar-div-${ind}`;
        divEl1.id = `each-x-osis-${ind}`;
        divEl.className = 'div-el-class'
        divEl1.className = 'div-x-osis-class'
        yEl.className = 'y-el-class'
        yEl.id = `each-y-el-${ind}`;
        let contentY = document.createTextNode(arrV[0][ind]['Y']);
        let contentX = document.createTextNode(arrV[0][ind]['X']);

        yEl.appendChild(contentY)
        divEl1.appendChild(contentX)
        yOsis.appendChild(yEl)
        wrapperId1.appendChild(divEl1)
        wrapperId.appendChild(divEl)
        byId(divEl.id).style.height = `${el.Y  ? el.Y + (el.Y / 2) : el.Y + 5}px`;

        yOsis.style.height = arrV[1] + (arrV[1] / 2)
        arrV[2] = arrV[2] > 20 ? arrV[2] - 21 : arrV[2]
        byId(divEl.id).style.backgroundColor = `rgb(${arrV[2]},0,0)`;
    })
})(storeValues['arrVal'])
//==================================================================================================================
/*Bar Chart functionality */




/*Line Chart functionality */
//==================================================================================================================
// Returns the max Y value in our data list
const lineGraph = ( arrData => {
let arr = arrData.values, len = arr.length;
let [graph, xPadding, yPadding] = storeValues['graphVal'];
let hgt, c;

function getMaxY() {
let max = 0;
    for(var i = 0; i < len; i ++) {
        if(arr[i]['Y'] > max) max = arr[i]['Y'];
    }
    return max += 10 - max % 10;
};

// Return the x pixel for a graph point
function getXPixel(val) {
    return ((graph.width() - xPadding) / len) * val + (xPadding * 1.5);
}

// Return the y pixel for a graph point
function getYPixel(val) {
    return hgt - (((hgt - yPadding) / getMaxY()) * val) - yPadding;
}

$(document).ready(() => {
    graph = $('#graph'), hgt = graph.height(), c = graph[0].getContext('2d'); 
    c.lineWidth = 2;
    c.strokeStyle = '#000';
    c.font = 'italic 8pt sans-serif';
    c.textAlign = "center";
    
    // Draw the axises
    c.beginPath();
    c.moveTo(xPadding, 0);
    c.lineTo(xPadding, hgt - yPadding);
    c.lineTo(graph.width(), hgt - yPadding);
    c.stroke();
    
    arr.map((el,i) => c.fillText(el['X'], getXPixel(i), hgt - yPadding + 20) );
    
    // Draw the Y value texts
    c.textAlign = "right"
    c.textBaseline = "middle";
    for(let i = 0; i < getMaxY(); i += 10) {
        c.fillText(i, xPadding - 10, getYPixel(i));
    }
    c.strokeStyle = 'darkred';
    
    // Draw the line graph
    c.beginPath();
    c.moveTo(getXPixel(0), getYPixel(arr[0]['Y']));
    for(var i = 1; i < len; i ++) {
        c.lineTo(getXPixel(i), getYPixel(arr[i]['Y']));
    }
    c.stroke();
    
    // Draw the dots
    c.fillStyle = '#333';
    arr.forEach( (el,i) => {
        c.beginPath();
        c.arc(getXPixel(i), getYPixel(el['Y']), 4, 0, Math.PI * 2, true);
        c.fill();
    })
})
})(storeValues['arrVal'][3]);
//==================================================================================================================