// DOM Style Color & Background
function darkmode(){
    var nav = document.getElementsByClassName("navigation")
    nav[0].style.color = "#f0f8ff"

    var listnav = nav[0].getElementsByTagName("a")
    for (let i = 0; i < listnav.length; i++){
        listnav[i].style.color = "#f0f8ff"
        listnav[i].addEventListener("mouseover", function(){
            listnav[i].style.color = "#f0f8ff"
        });
        listnav[i].addEventListener("mouseleave", function(){
            listnav[i].style.color = "#f0f8ff"
        });
    }

    var kol = document.getElementsByClassName("koleksi")
    kol[0].getElementsByClassName("heading")[0].getElementsByClassName("head1")[0].style.color = "#f0f8ff"
}

// DOM Style Color & Background
function lightmode(){
    var nav = document.getElementsByClassName("navigation")
    nav[0].style.color = "#800000"

    var listnav= nav[0].getElementsByTagName("a")
    for (let i = 0; i < listnav.length; i++){
        listnav[i].style.color = "#800000"
        listnav[i].addEventListener("mouseover", function(){
            listnav[i].style.color = "#f0f8ff"
        });
        listnav[i].addEventListener("mouseleave", function(){
            listnav[i].style.color = "#800000"
        });
    }

    var kol = document.getElementsByClassName("koleksi")
    kol[0].getElementsByClassName("heading")[0].getElementsByClassName("head1")[0].style.color = "#800000"
}

window.onload = function(){
    alert("Selamat Datang di HS Art Gallery")

    var toggle = document.getElementById('toggle');

    toggle.addEventListener('input', Event => {
        var isChecked = Event.target.checked;
        if (isChecked) {
            // DOM Add CLassList 
            document.body.classList.add('dark-theme');
            darkmode();
        } else {
            // DOM Remove CLassList
            document.body.classList.remove('dark-theme');
            lightmode();
        }
    });

    var button = document.getElementsByClassName("head1")[0];
    var box = document.getElementsByClassName('box')[0];
    var boks = box.getElementsByClassName('poto');
    button.addEventListener("click", function(){
        if(boks[0].style.display == "none"){
            box.style.margin = "0px 0px 20px 0px";
            for(let i = 0; i<boks.length; i++){
                boks[i].style.display = "flex"
            }
        }else{
            box.style.margin = "0";
            for(let i = 0; i<boks.length; i++){
                boks[i].style.display = "none"
            }
        }
    });
    var name = document.getElementsByClassName('nama');
    for(let i = 0; i<boks.length; i++){
        boks[i].addEventListener('mouseover', function(){
            name[i].style.display = "block";
        });
        boks[i].addEventListener('mouseleave', function(){
            name[i].style.display = "none";
        });
    }
}
