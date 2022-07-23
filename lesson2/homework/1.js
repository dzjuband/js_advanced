
  /*

  Завдання 1.

    Написати скрипт, який буде перемикати вкладки по натисканню
    на кнопки у хедері.

    Головна умова – змінювати файл HTML не можна.

    Алгоритм:
      1. Вибрати кожну кнопку у шапці
         + бонус вибрати одним селектором

      2. Повісити кнопку онклік
          button1.onclick = function(event) {

          }
          + бонус: один обробник на всі три кнопки

      3. Написати функцію, яка вибирає відповідну вкладку
         та додає до неї клас active

      4. Написати функцію hideAllTabs яка ховає всі вкладки.
         Видаляючи клас active з усіх вкладок

    Методи роботи:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }s

  */
      window.addEventListener('load', function () {
       
        let tabs = document.querySelectorAll('.tab');
        let showButtons = document.querySelectorAll('.showButton');
        let buttonContainer = document.querySelector('#buttonContainer');
        let newButton =document.createElement('button');

        showButtons.forEach(item => item.addEventListener('click', function(){
          let tmp = this.dataset.tab;//save data-attriute
         
          tabs.forEach(function(elem){
            if(elem.dataset.tab == tmp){
              elem.classList.add('active');
            }
            else{
              elem.classList.remove('active');
            }
          });
      
      }));

      addButtonClear();


      newButton.addEventListener('click', function(){
        hideAllTabs();
      });

      function hideAllTabs(){
        tabs.forEach(function(elem){
          elem.classList.remove('active');
      });
      }

      function addButtonClear(){
        buttonContainer.appendChild(newButton);
        newButton.classList.add('showButton');
        newButton.innerText='clear All';
        newButton.id ='clearAll';
      }
  });
