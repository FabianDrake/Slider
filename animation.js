let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

    closeBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        menuBtnChange();//llama a la funcion(optional)
    });

      searchBtn.addEventListener("click", ()=>{ // Sidebar abre cuando picas el logo button buscar
        sidebar.classList.toggle("open");
        menuBtnChange(); //llama la funcion (optional)
    });

      // cambiar el botón de la barra lateral(optional)
    function menuBtnChange() {
        if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//remplaza los iconos clase
        }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//remplaza los iconos de la clase
        }
    }