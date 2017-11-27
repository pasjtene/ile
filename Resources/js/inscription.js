/**
 * Created by tene on 27/11/2017.
 */
function deactivateTooltips(){
    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (var i = 0; i < tooltipsLength; i++){
        tooltips[i].style.display = 'none';
    }
}

function getTooltip(elements){
    while (elements = elements.nextSibling){
        if (elements.className ==='tooltip'){
            return elements;
        }
    }
    return false;
}

var check = {};

check['sex'] = function(){
    var sex = document.getElementsByName('sex'),
        tooltipStyle = getTooltip(sex[1].parentNode).style;
    if (sex[0].checked ||sex[1].checked){
        tooltipStyle.display = 'none';
        return true;
    }else{
        tooltipStyle.display = 'inline-block';
        return false;
    }
};

check['lastName'] = function(id){
    var name = document.getElementById(id),
        tooltipStyle = getTooltip(name).style;

    if (name.value.length >=2){
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }else{
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};

check['firstName'] =  check['lastName'];

check['Email'] = function(){
    var name = document.getElementById('Email'),
        tooltipStyle = getTooltip(name).style;

    if (name.value.length >=6){
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }else{
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};
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

check['pwd1'] = function(){
    var pwd1 = document.getElementById('pwd1'),
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

check['pwd2'] = function(){
    var pwd1 = document.getElementById('pwd1'),
        pwd2 = document.getElementById('pwd2'),
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

(function(){
    var myForm = document.getElementById('myForm'),
        inputs = document.querySelectorAll('input[type= text], input[type=password]'), inputLength = inputs.length;
    for (var i= 0; i<inputLength; i++){
        inputs[i].addEventListener('keyup', function(e){
            check[e.target.id](e.target.id);
        });
    }

    myForm.addEventListener('submit', function(e){
        var result = true;
        for (var i in check){
            result = check[i](i) && result;
        }
        if (result){
            alert('le formulaire est bien rempli.');
        }
        e.preventDefault();
    });

    myForm.addEventListener('reset', function(){
        for (var i = 0; i< inputLength; i++){
            inputs[i].className = '';
        }
        deactivateTooltips();
    });
})();
deactivateTooltips();

function surligne(champ, erreur)
{
    if(erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}

function verifPseudo(champ)

{

    if(champ.value.length < 2 || champ.value.length > 25)

    {

        surligne(champ, true);

        return false;

    }

    else

    {

        surligne(champ, false);

        return true;

    }
}

function verifMail(champ)

{

    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    if(!regex.test(champ.value))

    {

        surligne(champ, true);

        return false;

    }

    else

    {

        surligne(champ, false);

        return true;

    }

}

function verifAge(champ)

{

    var age = parseInt(champ.value);

    if(isNaN(age) || age < 5 || age > 111)

    {

        surligne(champ, true);

        return false;

    }

    else

    {

        surligne(champ, false);

        return true;

    }

}

function verifForm(f)

{

    var pseudoOk = verifPseudo(f.pseudo);

    var mailOk = verifMail(f.email);

    var ageOk = verifAge(f.age);



    if(pseudoOk && mailOk && ageOk)

        return true;

    else

    {

        alert("Veuillez remplir correctement tous les champs");

        return false;

    }

}