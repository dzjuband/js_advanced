/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
let Train ={};
Train.name = 'INTERCITY';
Train.speed = 300;
Train.count_pass = 1000;
Train.rolling  =  function (){
    console.log(`Поезд ${this.name} везет ${ this.count_pass} со скоростью ${this.speed}`);
}
Train.get_pass = function(x){
    this.count_pass+=x;
}