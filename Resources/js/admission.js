/**
 * Created by tene on 27/11/2017.
 */
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
});

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

check['country'] = function(){
    var country = document.getElementById('county'),
        tooltipTyle = getTooltip(country).style;
    if (country.options[country.selectedIndex].value != 'none'){
        tooltipTyle.display = 'none';
        return true;
    }else{
        tooltipTyle.display = 'inline-block';
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

(function(){
    var myForm = document.getElementById('myForm'), inputs = document.querySelectorAll('input[type= text], input[type=password]'), inputLength = inputs.length;
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

