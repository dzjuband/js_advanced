let bd = document.querySelector('body');
let fm =  document.createElement('form');
fm.id ="MyForm";
bd.appendChild(fm);
/*- Ім'я користувача: type:text -> validation: required; minlength = 2;
            Якщо порожнє вивести повідомлення: "Як тебе звуть друже?!"*/
let lbl = document.createElement('label');
let spn = document.createElement('span');

spn.innerHTML="Ім'я користувача";
spn.style.display="block";

fm.appendChild(lbl);
lbl.appendChild(spn);

lbl.innerHTML+='<input type="text" id="Uname" minlength = "2" required>';
/*- Email: type: email -> validation: required; minlength = 3; validEmail;
            Якщо емейл не валідний вивести повідомлення "Ну й дарма, не отримаєш бандероль із яблуками!"*/
let EmailLbl = document.createElement('label');
let EmailSpn = document.createElement('span');

EmailSpn.innerHTML="Email";
EmailSpn.style.display="block";

fm.appendChild(EmailLbl);
EmailLbl.appendChild(EmailSpn);

EmailLbl.innerHTML+='<input type="email" id="Uemail" minlength = "3"  required>';

/*Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Якщо пусте вивести повідомлення: "Я нікому не скажу наш секрет";*/
let pssLbl = document.createElement('label');
let passSpn = document.createElement('span');

passSpn.innerHTML="Пароль";
passSpn.style.display="block";

fm.appendChild(pssLbl);//+
pssLbl.appendChild(passSpn);

pssLbl.innerHTML+='<input type="password" id="Upassword" minlength = "8" maxlength="16" required>';
/*Кількість з'їдених яблук: type: number -> validation: required; minlength = 1; validNumber;
            Якщо кількість 0 вивести ерор з повідомленням "Ну хоч поїсти трохи... Яблука смачні"
        - Дякуємо за яблука: type: text -> validation: required;*/
let applLbl = document.createElement('label');
let applSpn = document.createElement('span');

applSpn.innerHTML="Кількість з'їдених яблук";
applSpn.style.display="block";

fm.appendChild(applLbl);//+
applLbl.appendChild(applSpn);
applLbl.innerHTML+='<input min="0" type="number" id="Uapples" minlength = "1" maxlength="16" required>';
/*Дякуємо за яблука: type: text -> validation: required;
            Якщо текст !== "дякую" вивести ерор з повідомленням "Фу, невдячний(-а)!" використовуючи setCustomValidity();*/
let thanksLbl = document.createElement('label');
let thanksSpn = document.createElement('span');

thanksSpn.innerHTML="Дякуємо за яблука";
thanksSpn.style.display="block";

fm.appendChild(thanksLbl);//+
thanksLbl.appendChild(thanksSpn);
thanksLbl.innerHTML+='<input type="text" id="Uthanks" required>';            

/*згоден на навчання: type: checkbox -> validation: required;
            Якщо не вибрано вивести ерор з повідомлення: "Неосвічені живуть довше! Добре подумай!"*/
let teachLbl = document.createElement('label');
let teachSpn = document.createElement('span');

teachSpn.innerHTML="Згоден на навчання";
teachSpn.style.display="block";

fm.appendChild(teachLbl);//+
teachLbl.appendChild(teachSpn);

teachLbl.innerHTML+='<input type="checkbox" id="Uteach" required/><br>';


fm.innerHTML+='<input type="submit" style="margin-right:10px" id="submtbuttn" value="Submit">';


fm.innerHTML+='<input type="button" id="Validate" value="Validate">';

let Uname = document.querySelector('#Uname').validity;
let Uemail = document.querySelector('#Uemail').validity;
let Upassword = document.querySelector('#Upassword').validity;
let Uapples = document.querySelector('#Uapples').validity;
let Uthanks = document.querySelector('#Uthanks').validity;

document.querySelector('#Upassword');
document.querySelector('#Uapples');
fm.addEventListener('submit',function(e){

})
document.querySelector('#Validate').addEventListener('click',function(){
    fm.checkValidity();
    if(Uname.valueMissing){
        document.querySelector('#Uname').setCustomValidity("Як тебе звуть друже?!")
    }
    else if(Uname.valueMissing == false){
        document.querySelector('#Uname').setCustomValidity("")
    }

   
    if(Uemail.valueMissing){ console.log(Uemail.valueMissing);
        document.querySelector('#Uemail').setCustomValidity("Ну й дарма, не отримаєш бандероль із яблуками!");
    }
    else if(Uemail.valid == false){
        document.querySelector('#Uemail').setCustomValidity("");
    }

    if(Upassword.valueMissing){
         document.querySelector('#Upassword').setCustomValidity("Я нікому не скажу наш секрет");
    }
    else if(Upassword.valueMissing == false){
        document.querySelector('#Upassword').setCustomValidity("");
    }
    if(Uapples.valueMissing){

        document.querySelector('#Uapples').setCustomValidity( "Ну хоч поїсти трохи... Яблука смачні");
    }
    else if(Uapples.valueMissing == false){
        document.querySelector('#Uapples').setCustomValidity("");
    }
    if( document.querySelector('#Uapples').value == "0"){
        document.querySelector('#Uapples').setCustomValidity( "Ну хоч поїсти трохи... Яблука смачні");
    }
    if(document.querySelector('#Uthanks').value  !== "дякую"){
        document.querySelector('#Uthanks').setCustomValidity("Фу, невдячний(-а)!")
    }
    else if(document.querySelector('#Uthanks').value  === "дякую"){
        document.querySelector('#Uthanks').setCustomValidity("");
    }
    if(document.querySelector('#Uteach').checked == false){
         document.querySelector('#Uteach').setCustomValidity("Неосвічені живуть довше! Добре подумай!");
        
    }
    else if(document.querySelector('#Uteach').checked == true){
        document.querySelector('#Uteach').setCustomValidity("");
    }
    fm.reportValidity();
})

    /*

        Документація:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Перевірка всіх полів форми на валідність
        form.reportValidity() > Перевіряє всі поля на валідність та виводить повідомлення з помилкою

        formElement.validity > Об'єкт із параметрами валідності поля
        formElement.setCustomValidity(message) > Метод, який задасть validity.valid = false, і при спробі відправки
            повідомлення виведе message у браузерний потрапив

        Класи для стилізації стану елемента
        input:valid{} // hover
        input:invalid{} // firstchild

        
        Завдання:
        
        Використовуючи браузерне API для валідації форм, реалізувати валідацію наступної форми:

        - Ім'я користувача: type:text -> validation: required; minlength = 2;
            Якщо порожнє вивести повідомлення: "Як тебе звуть друже?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Якщо емейл не валідний вивести повідомлення "Ну й дарма, не отримаєш бандероль із яблуками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Якщо пусте вивести повідомлення: "Я нікому не скажу наш секрет";
        - Кількість з'їдених яблук: type: number -> validation: required; minlength = 1; validNumber;
            Якщо кількість 0 вивести ерор з повідомленням "Ну хоч поїсти трохи... Яблука смачні"
        - Дякуємо за яблука: type: text -> validation: required;
            Якщо текст !== "дякую" вивести ерор з повідомленням "Фу, невдячний(-а)!" використовуючи setCustomValidity();

        - згоден на навчання: type: checkbox -> validation: required;
            Якщо не вибрано вивести ерор з повідомлення: "Неосвічені живуть довше! Добре подумай!"

        Внизу дві кнопки:

        1) Звичайний submit який відправить форму, якщо вона валідна.
        2) Кнопка Validate(Перевірити) яка запускає методи:
            - yourForm.checkValidity: та виводить на сторінку повідомлення з результатом перевірки
            - yourForm.reportValidity: викликає перевірку всіх правил та виведення повідомлення з помилкою, якщо така є

    */