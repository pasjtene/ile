//fonction qui d�sactive les messages d'erreur
function deactivateTooltips(){
    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (var i = 0; i < tooltipsLength; i++){
        tooltips[i].style.display = 'none';
    }
}

//fonction qui identifie l'element sur lequel on travail
function getTooltip(elements){
    while ( elements = ( elements!=null ? elements.nextSibling : null) ){
        if ( elements!=null && elements.className ==='tooltip' ){
            return elements;
        }
    }
    return false;
}
//objet qui int�gre toutes les fonctions
var check = [];
//fonction qui v�rifie le nom
function cheklastNameAndfirstName(id){
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
}
//fonction qui v�rifie le pr�nom
check['firstName'] =  check['lastName'];
//fonction qui v�rifie l'email avec regex
 function checkEmail(){
    var name = document.getElementById('Email'),
        tooltipStyle = getTooltip(name).style;

    var ck = function checkMail(name){
        var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
        return(reg.test(name));
    };
    if (ck(name.value)){
        name.className = 'correct';
        tooltipStyle.display = 'none';
        console.log('succ�s du regex!!!');
        return true;
    }else{
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        console.log('echec du regex!!!');
        return false;
    }
}
//fonction qui v�rifie que les emails sont identiques
 function compareEmail(){
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
}
// fonction qui v�rifie l'age
 function checkAge(){
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
}
//fonction qui v�rifie le pseudo
function checkLogin(){
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
}
//fonction qui v�rifie le mot de passe
 function checkPassword(){
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
}
//fonction qui v�rifie si les mots de passe sont identiques
function comparePassword(){
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
}
//fonction qui v�rifie la civilit�
 function checkCivillity(){
    var civility = document.getElementById('civility'),
        tooltipTyle = getTooltip(civility).style;
    if (civility.options[civility.selectedIndex].value != 'none'){
        tooltipTyle.display = 'none';
        return true;
    }else{
        tooltipTyle.display = 'inline-block';
        return false;
    }
}
//fonction qui v�rifie qui regroupe toute les autres fonctions
function validator() {
    var myForm = document.getElementById('myForm'), inputs = document.querySelectorAll('input[type= text], input[type=password]'), inputLength = inputs.length;
    if(checkAge() && checkCivillity() && comparePassword() && checkPassword()  && compareEmail()  && checkEmail()  && cheklastNameAndfirstName('') && cheklastNameAndfirstName('')  )
    {
        //&& checkCivillity() && comparePassword() && checkPassword()  && compareEmail()
        document.getElementById("inscription_buton").style.display = 'block';
         console.log('good info');
    }
    else
    {
        console.log('bad info ');
        document.getElementById("inscription_buton").style.display = 'none';
    }
}
document.getElementById('lastName').addEventListener('keyup',function(e){
    validator();
});
document.getElementById('firstName').addEventListener('keyup',function(e){
    validator();
});
document.getElementById('age').addEventListener('keyup',function(e){
    validator();
});
document.getElementById('Email').addEventListener('keyup',function(e){
    validator();
});
document.getElementById('Email2').addEventListener('keyup',function(e){
    validator();
});
document.getElementById('password').addEventListener('keyup',function(e){
    validator();
});
document.getElementById('confirm-password').addEventListener('keyup',function(e){
    validator();
});
document.getElementById('civility').addEventListener('change',function(e){
    validator();
    console.log('select  is going ');
});


deactivateTooltips();

//fonction qui transforme l'input en majuscule
function ChangeCase(elem)
{
    elem.value = elem.value.toUpperCase();
}
