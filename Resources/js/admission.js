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
/*
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
*/
deactivateTooltips();

//add a class to an element from a list, on click
(function(){
    var tableheads = document.querySelectorAll('.dates-table th');
    var menu = document.querySelectorAll('.dropbtn');
    for(var i=0; i<tableheads.length; i++){
        console.log(i);
        addClass3(i, tableheads);

        /*
        tableheads[i].addEventListener('click', function(e){
            e.preventDefault();
            removeClass(tableheads);
            addClass(this);
        }, false);
*/
    }

    for(var i=0; i<menu.length; i++){
        console.log(i);
        addClass4(i, menu);

    }

})();

function addClass3(i, tbl){
    tbl[i].addEventListener('click', function(e){
        removeClass(tbl);
        tbl[i].className = 'active';
        console.log(i);
    });
    }

function addClass4(i, tbl){
    tbl[i].addEventListener('click', function(e){
        removeClass2(tbl);
        tbl[i].className = 'dropbtn green';
        console.log(i);
    });
}

function removeClass2(elmts) {
    for(var i= 0; i<elmts.length; i++)
        elmts[i].className = 'dropbtn';
}

//get an array of elements and remove a class
function removeClass(elmts) {
    for(var i= 0; i<elmts.length; i++)
    elmts[i].className = '';
}

//get an element and add a class
function addClass(elmt){
    elmt.className = 'active';
}