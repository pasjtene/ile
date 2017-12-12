//fonction qui désactive les messages d'erreur
function deactivateTooltips(){
    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (var i = 0; i < tooltipsLength; i++){
        tooltips[i].style.display = 'none';
    }
}

//fonction qui identifie l'element sur lequel on travail
function getTooltip(elements){
    while (elements = elements.nextSibling){
        if (elements.className ==='tooltip'){
            return elements;
        }
    }
    return false;
}
//objet qui intègre toutes les fonctions
var check = {};
//fonction qui vérifie le nom
check['lastName'] = function(id){
    var name = document.getElementById(id),
        tooltipStyle = getTooltip(name).style;

    if (name.value.length >=2 && name.value.length <=20){
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }else{
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};
//fonction qui vérifie le prénom
check['firstName'] =  check['lastName'];
//fonction qui vérifie l'email avec regex
check['Email'] = function(){
    var name = document.getElementById('Email'),
        tooltipStyle = getTooltip(name).style;

    var ck = function checkMail(name){
        var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
        return(reg.test(name));
    };
    if (ck(name.value)){
        name.className = 'correct';
        tooltipStyle.display = 'none';
        console.log('succès du regex!!!');
        return true;
    }else{
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        console.log('echec du regex!!!');
        return false;
    }
};
//fonction qui vérifie que les emails sont identiques
check['Email2'] = function(){
    var Email = document.getElementById('Email'),
        Email2 = document.getElementById('Email2'),
        tooltipStyle = getTooltip(Email2).style;
    if (Email.value == Email2.value && Email2.value != ''){
        Email2.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }else{
        Email2.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};
// fonction qui vérifie l'age
check['age'] = function(){
    var age = document.getElementById('age'),
        tooltipStyle = getTooltip(age).style,
        ageValue = parseInt(age.value);

    if (!isNaN(ageValue) && ageValue >= 15 && ageValue <= 100){
        age.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }else{
        age.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};
//fonction qui vérifie le pseudo
check['login'] = function(){
    var login = document.getElementById('login'),
        tooltipStyle = getTooltip(login).style;

    if (login.value.length >=4){
        login.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }else{
        login.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};
//fonction qui vérifie le mot de passe
check['password'] = function(){
    var pwd1, tooltipStyle;
    pwd1 = document.getElementById('password');
    console.log("The pwd1 is: ",pwd1);
    tooltipStyle = getTooltip(pwd1).style;
    if (pwd1.value.length >= 6){
        pwd1.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }else{
        pwd1.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};
//fonction qui vérifie si les mots de passe sont identiques
check['confirm-password'] = function(){
    var pwd1 = document.getElementById('password'),
        pwd2 = document.getElementById('confirm-password'),
        tooltipStyle = getTooltip(pwd2).style;
    if (pwd1.value == pwd2.value && pwd2.value != ''){
        pwd2.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }else{
        pwd2.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};
//fonction qui vérifie la civilité
check['civility'] = function(){
    var civility = document.getElementById('civility'),
        tooltipTyle = getTooltip(civility).style;
    if (civility.options[civility.selectedIndex].value != 'none'){
        tooltipTyle.display = 'none';
        return true;
    }else{
        tooltipTyle.display = 'inline-block';
        return false;
    }
};
// fonction qui desactive le bouton submit
(function desactive_submit() {
    document.getElementById("inscription_buton").disabled = true;
})();
//fonction qui vérifie qui regroupe toute les autres fonctions
(function(){
    var myForm = document.getElementById('myForm'), inputs = document.querySelectorAll('input[type= text], input[type=password]'), inputLength = inputs.length;
    for (var i= 0; i<inputLength; i++){
        inputs[i].addEventListener('keyup', function(e){
            check[e.target.id](e.target.id);
        });
    }
    myForm.addEventListener('onblur', function(e){
        var result = true;
        for (var i in check){
            result = check[i](i) && result;
            if(result){
                document.getElementById("inscription_buton").disabled = false;
            }
        }
    });
    myForm.addEventListener('submit', function(e){
        var result = true;
        for (var i in check){
            result = check[i](i) && result;
        }
    });
    myForm.addEventListener('reset', function(){
        for (var i = 0; i< inputLength; i++){
            inputs[i].className = '';
        }
        deactivateTooltips();
    });
})();

deactivateTooltips();

//fonction qui transforme l'input en majuscule
function ChangeCase(elem)
{
    elem.value = elem.value.toUpperCase();
}
