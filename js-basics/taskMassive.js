/*
Создайте функцию find(arr, value), которая ищет в массиве arr значение value  и возвращает его номер, если найдено, или -1, если не найдено.
*/
function find(arr, value){

    arr.forEach(function(item, i, arr){
        if(arr[i] == value){
            return i;
        }
    });
return -1;
}

var test1 = [1, 3, 5, 6];
find(test1, 3);



/*Напишите код, который:
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива */
var numbers = []; 
        
while(true){
    var value = prompt("Введите число ", ""); 

    if(value === '' || value === null || isNaN(value)) break;
   
    numbers.push(+value);
}

var sum = 0; 
for(var i = 0; i < numbers.length; i++){
    sum += numbers[i]; 

}

alert(sum); 


/*
Напишите код для вывода alert случайного значения из массива:
    var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
*/
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
let  max = arr.length - 1, 
    min = 0;

var rand = min + Math.floor(Math.random() * (max + 1 - min));

console.log(arr[rand]);



/*
Задача из 5 шагов-строк:
Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».
Массив в результате каждого шага:
Джаз, Блюз
Джаз, Блюз, Рок-н-Ролл
Джаз, Классика, Рок-н-Ролл
Классика, Рок-н-Ролл
Рэп, Регги, Классика, Рок-н-Ролл
*/
//1
let styles = ['Джаз', 'Блюз']; 
console.log(styles); 
//2
styles.push('Рок-н-Ролл');
console.log(styles); 
//3
styles[styles.length - 2] = "Классика";
console.log(styles);
//4
alert(styles.shift());


/*
Как добавить элемент в конец произвольного массива?
У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
*/ 

let goods = [1, 2, 4, 5, 6]; 
goods.push('Компьютер');
console.log(goods); 



/*
Как получить последний элемент из произвольного массива?
У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
Напишите код для получения последнего элемента goods.
*/ 

let goods = ['1123', 'sadf', 'aaa', 'oosdf'];
for(var i = 0; i < goods.length; i++){
  
   if(i == (goods.length-1)){
    console.log(goods[i]); 
   }

}
