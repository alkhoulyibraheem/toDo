let title =  document.getElementById("title");
let time = document.getElementById("time");
let crea =document.getElementById("crea");
function allwo(){

    if (title.value!=='') {
        crea.disabled = false;
    }else{
        crea.disabled = true;
    }
}
title.onkeyup = allwo;

let box =document.getElementById("box");
let form =document.getElementById('form');

function addBox(e){
    e.preventDefault();

    let task = '<div class="box" id="fram">'+
                    '<div class="le">'+
                        '<div class="hi">'+
                            '<h2>'+title.value+'</h2>'+
                            time.value+
                        '</div>'+
                        '<button>waiting</button>'+
                    '</div>'+
                    '<div class="ri">'+
                        '<div class="done">'+
                            '<button><img src="check.png" alt=""></button>'+
                        '</div>'+
                        '<div class="delete">'+
                            '<button><img src="delete.png" alt=""></button>'+
                        '</div>'+
                    '</div>'+
                '</div>';
    box.innerHTML += task;

    let dele = document.getElementsByClassName('delete');
    for (let index = 0; index < dele.length; index++) {
        dele[index].onclick = function () {
            this.parentNode.parentNode.remove();
        }
        
    }
    title.value = "";
    crea.disabled = true;
}
form.onsubmit = addBox;

function done(x){
    document.getElementById('fram').style.border = "2px solid red";
}
document.getElementById('h').onclick = done