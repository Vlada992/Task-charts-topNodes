

const storeValues = (() => {
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

    let objValDesc = [...data.values].sort((a, b) => b['Y'] - a['Y']);
    let yMax = objValDesc[0]['Y'], color = 285;
    return {
        wrapperId: document.getElementById('main-wrapper-div'),
        wrapperId1: document.getElementById('main-wrapper-div-1'),
        yOsis: document.getElementById('y-osis'),
        yEachEl: document.getElementsByClassName('y-el-class'),
        arrVal: [objValDesc, yMax, color,data]
    }
})();
console.log(storeValues)



const barGraph = (() => {
    let arrV = storeValues['arrVal'];

    arrV[3]['values'].map((el, ind, arr) => {
        let divEl = document.createElement('DIV');
        let divEl1 = document.createElement('DIV');

        let yEl = document.createElement('P')
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
        storeValues['yOsis'].appendChild(yEl)
        storeValues['wrapperId1'].appendChild(divEl1)
        storeValues['wrapperId'].appendChild(divEl)
        document.getElementById(divEl.id).style.height = `${el.Y  ? el.Y + (el.Y / 2) : el.Y + 5}px`;

        storeValues['yOsis'].style.height = arrV[1] + (arrV[1] / 2)
        arrV[2] = arrV[2] > 20 ? arrV[2] - 21 : arrV[2]
        document.getElementById(divEl.id).style.backgroundColor = `rgb(${arrV[2]},0,0)`
    })
})();