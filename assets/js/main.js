var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];


/*Sección superior*/
var cabecera=document.createElement("section")
cabecera.setAttribute("class","titulo");

var titulo =document.createElement("div")
titulo.setAttribute("class","titulo");

var primerTitulo=document.createElement("h1");
primerTitulo.setAttribute("id","mayor")
var texto=document.createTextNode('Love Love Panda Desu')
primerTitulo.appendChild(texto);

var padre=document.getElementsByTagName("body")[0];
	titulo.appendChild(primerTitulo);
	cabecera.appendChild(titulo);
	padre.appendChild(cabecera);

var segundoTitulo=document.createElement("p");
segundoTitulo.setAttribute("id","menor")
var segundoTexto=document.createTextNode("The best place for panda lovers");
segundoTitulo.appendChild(segundoTexto);
titulo.appendChild(segundoTitulo);

/*Primera Imagen*/
var seccionPrimerPanda=document.createElement("section");
seccionPrimerPanda.setAttribute("class","panda1");

var divPrimerPanda=document.createElement("div");
divPrimerPanda.setAttribute("class","panda1");

seccionPrimerPanda.appendChild(divPrimerPanda);






