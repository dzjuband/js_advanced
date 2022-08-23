function HTMLClass(){
    this.body = document.body;
    this.container = document.createElement('div');
    this.btn = document.createElement('input');
    this.modalForm = document.createElement('div');
    this.modalForm.style.display = 'none';
    this.modalContainer = document.createElement('div');
    this.title = document.createElement('div');
    this.titleTetx = document.createElement('span');
    this.btnClose = document.createElement('button');
    this.modalFooterBlock = document.createElement('div');
    this.footerCloseBtn = document.createElement('button');
    this.footerSaveBtn = document.createElement('button');

    //modal body
    this.login = document.createElement('input');
    this.name = document.createElement('input');
    this.surname = document.createElement('input'); 
    this.age = document.createElement('input');
    this.pass = document.createElement('input');
    this.passSecond = document.createElement('input');

    this.labelLogin = document.createElement('label');
    this.labelName = document.createElement('label');
    this.labelSurname = document.createElement('label'); 
    this.labelAge = document.createElement('label');
    this.labelPass = document.createElement('label');
    this.labelPassSecond = document.createElement('label');
 
    this.close =  function(){
        this.modalForm.style.display = 'none';
    }  

    this.show =  function(){
        this.modalForm.style.display = 'block';
    }

    this.saveModalData = function(){
        let login = this.login.value;
        let name = this.name.value;
        let surname = this.surname.value;
        let age = this.age.value;
        let pass = this.pass.value;
        let passSecond = this.passSecond.value;
        localStorage.setItem(login, JSON.stringify({login, name, surname, age, pass, passSecond}));

    }
    
}

HTMLClass.prototype.init = function(){
    this.body.appendChild(this.container);
    this.container.id = "container";

    this.container.style.position = 'absolute';

    this.container.appendChild(this.btn);
    this.modalForm.id = "formModal";

    this.modalForm.style.position = 'absolute';
    this.modalForm.style.top ='10px';
    this.modalForm.style.left = '355px';
    this.styleButton();

    this.login.id = 'login';
    this.name.id = 'name';
    this.surname.id = 'surname'; 
    this.age.id = 'age';
    this.pass.id = 'pass';
    this.passSecond.id = 'passSecond';

    this.login.type = 'text';
    this.name.type = 'text';
    this.surname.type = 'text'; 
    this.age.type = 'text';
    this.pass.type = 'text';
    this.passSecond.type = 'text';
    this.title.id = 'title';

    this.titleTetx.id = 'titleTetx';
    this.btnClose.id = 'btnClose';
 
    this.btnClose.addEventListener('click', this.close.bind(this));
    this.btn.addEventListener('click', this.show.bind(this));

}

HTMLClass.prototype.styleButton = function(){
    this.btn.id = 'showModal';
    this.btn.type = "button";
    this.btn.value ="show modal"
    this.btn.style.padding = '10px';
    this.btn.style.margin = "40px";

    this.btn.addEventListener('click', function(e){
       
    })

    this.createModalContainer();
    this.createModalBody();
}

HTMLClass.prototype.createModalContainer = function(){
    this.modalForm.style.borderRadius = '20px';
    this.modalForm.style.border = '1px solid black';
    this.modalContainer.style.paddingLeft = '150px';
    this.modalContainer.style.paddingRight = '150px';

    this.title.style.fontSize = '25px';
    this.title.style.paddingBottom = "30px";
    this.title.style.paddingTop = "30px";
    this.title.style.borderBottom = '1px solid black';
    this.title.style.marginBottom = '20px';


    this.title.style.paddingLeft = '30px';
    this.modalForm.appendChild(this.title);
}

HTMLClass.prototype.createModalBody = function(){
    this.modalForm.style.width = '600px';

    this.modalForm.style.backgroundColor = "white";

    this.container.appendChild(this.modalForm);

    this.modalForm.appendChild(this.modalContainer);

    this.modalContainer.appendChild(this.labelLogin);

    this.labelLogin.innerHTML = 'Логін';
    this.labelLogin.style.paddingBottom = '10px';
    this.labelLogin.style.display = 'block';

    this.modalContainer.appendChild(this.login);
    this.login.style.display = 'block';
    this.login.style.marginBottom = '10px';

    this.modalContainer.appendChild(this.labelName);
    this.labelName.style.display = 'block';
    this.labelName.innerHTML = 'Ім\'я';
    this.labelName.style.paddingBottom = '10px';

    this.modalContainer.appendChild(this.name);
    this.name.style.display = 'block';
    this.name.style.marginBottom = '10px';

    this.modalContainer.appendChild(this.labelSurname);
    this.labelSurname.style.display = 'block';
    this.labelSurname.innerHTML = 'Прізвище';
    this.labelSurname.style.paddingBottom = '10px';
    
    this.modalContainer.appendChild(this.surname);
    this.surname.style.display = 'block';
    this.surname.style.marginBottom = '10px';

    this.modalContainer.appendChild(this.labelAge);
    this.labelAge.style.display = 'block';
    this.labelAge.innerHTML = 'Вік';
    this.labelAge.style.paddingBottom = '10px';

    this.modalContainer.appendChild(this.age);
    this.age.style.display = 'block';
    this.age.style.marginBottom = '10px';

    this.modalContainer.appendChild(this.labelPass);
    this.labelPass.style.display = 'block';
    this.labelPass.innerHTML = 'Пароль';
    this.labelPass.style.paddingBottom = '10px';

    this.modalContainer.appendChild(this.pass);
    this.pass.style.display = 'block';
    this.pass.style.marginBottom = '10px';

    this.modalContainer.appendChild(this.labelPassSecond);
    this.labelPassSecond.style.display = 'block';
    this.labelPassSecond.innerHTML = 'Пароль повторно';
    this.labelPassSecond.style.paddingBottom = '10px';
    
    this.modalContainer.appendChild(this.passSecond);
    this.passSecond.style.display = 'block';
    this.passSecond.style.marginBottom = '10px';

    this.login.style.width = '100%';
    this.name.style.width  = '100%';
    this.surname.style.width  = '100%';
    this.age.style.width  = '100%';
    this.pass.style.width  = '100%';
    this.passSecond.style.width  = '100%';

    this.title.appendChild(this.titleTetx);
    this.title.appendChild(this.btnClose);
    this.titleTetx.innerHTML = 'Це модальне вікно (заголовок)';

    this.btnClose.innerText = 'Закрити';

    this.title.style.display = 'flex';
    this.title.style.alignItems = 'center';
    this.title.style.justifyContent = 'space-between';

    this.titleTetx.style.marginLeft = "20px";

    this.btnClose.style.marginRight = '20px';
    this.btnClose.style.padding = "10px";

    this.modalFooter();
}

HTMLClass.prototype.modalFooter = function(){
    this.modalForm.appendChild(this.modalFooterBlock);
    this.modalFooterBlock.id = 'modalFooterBlock';
    this.footerCloseBtn.id = 'footerCloseBtn';
    this.footerSaveBtn.id = 'footerSaveBtn';
    this.footerCloseBtn.innerHTML = 'Закрити';
    this.footerSaveBtn.innerHTML = 'Зберегти';
    this.modalFooterBlock.style.paddingTop = '20px';
    this.modalFooterBlock.style.borderTop = '1px solid black' ;
    this.modalFooterBlock.style.textAlign = 'right';
    this.footerCloseBtn.style.padding = '10px';
    this.footerSaveBtn.style.padding = '10px';
    this.footerSaveBtn.style.marginRight = '20px';  
    this.footerCloseBtn.style.marginRight = '20px';  
    this.modalFooterBlock.style.paddingBottom = '25px';

    this.modalFooterBlock.appendChild(this.footerCloseBtn);
    this.modalFooterBlock.appendChild(this.footerSaveBtn);

    this.footerCloseBtn.addEventListener('click', this.close.bind(this));

    this.footerSaveBtn.addEventListener('click', this.saveModalData.bind(this))
}

document.addEventListener("DOMContentLoaded", function(){
    let html = new HTMLClass();
    html.init();
});




