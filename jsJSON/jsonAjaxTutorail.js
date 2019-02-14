//Example https://www.youtube.com/watch?v=rJesac0_Ftw
let countPage = 1; //параметр в ссылке
let dataContainer = document.getElementById("info-data");
let btn = document.getElementById("btn");
let ourRequest = new XMLHttpRequest();

//По клику мышки запускаем функциюы
btn.addEventListener("click", function () {

    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + countPage + '.json');
    ourRequest.onload = function () {
        //console.log(ourRequest.responseText); 
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };

    ourRequest.send();
    countPage++;

    if (countPage > 3) {
        $("#btn").hide(1000);
    }


});

//Функция вставки html -тегов
function renderHTML(data) {

    let htmlString = '';
    for (let i = 0; i < data.length; i++) {
        htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + '. It loves ';

        for (var ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += ' and ' + data[i].foods.likes[ii];
            }
        }

        htmlString += '. And it dislike ';

        for (var ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += ' and ' + data[i].foods.dislikes[ii];
            }

        }

        htmlString += '.</p>';
    }
    dataContainer.insertAdjacentHTML("beforeend", htmlString);
}