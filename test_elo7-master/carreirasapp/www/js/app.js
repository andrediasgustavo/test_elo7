(function() {
// Initialize and configure Firebase
var config = {
  apiKey: "AIzaSyAwZA0LnkVBaKQyKlND1kmh3WUresley6Q",
  authDomain: "elo7-4c400.firebaseapp.com",
  databaseURL: "https://elo7-4c400.firebaseio.com",
  projectId: "elo7-4c400",
  storageBucket: "elo7-4c400.appspot.com",
  messagingSenderId: "271915530784"
};

firebase.initializeApp(config);

// get database
var text = firebase.database().ref();

// get cultura and input text on element

var culturaElement = document.getElementById('cultura');
var tituloCulturaElement = document.getElementById('tituloCultura');
var culturaTitulo = text.child('culturaTitulo');
var culturaTexto = text.child('culturaTexto');

culturaTitulo.on('value', function(value){
  tituloCulturaElement.innerText = value.val();
});
culturaTexto.on('value', function(value){
  culturaElement.innerText = value.val();
});

// get Criatividade and input text on element

var criatividadeTituloElement = document.getElementById('tituloCriatividade');
var criatividadeElement = document.getElementById('criatividade');
var criatividadeTexto = text.child('criatividadeTexto');
var criatividadeTitulo = text.child('criatividadeTitulo');

criatividadeTitulo.on('value', function(value){
  criatividadeTituloElement.innerText = value.val();
});

criatividadeTexto.on('value', function(value){
  criatividadeElement.innerText = value.val();
  var bold = criatividadeElement.innerHTML.replace("intervenção humana", "<b>intervenção humana</b>");
  document.getElementById('criatividade').innerHTML = bold
});

// get Colaboração and input text on element

var colaboracaoTituloElement = document.getElementById('tituloColaboracao');
var colaboracaoElement = document.getElementById('colaboracao');
var colaboracaoTexto = text.child('colaboracaoTexto');
var colaboracaoTitulo = text.child('colaboracaoTitulo');

colaboracaoTitulo.on('value', function(value){
  colaboracaoTituloElement.innerText = value.val();
});

colaboracaoTexto.on('value', function(value){
  colaboracaoElement.innerText = value.val();
  var bold = colaboracaoElement.innerHTML.replace("habilidades individuais.", "<b>habilidades individuais.</b>").replace("empreendedorismo", "<b>empreendedorismo</b>");
  document.getElementById('colaboracao').innerHTML = bold
});

// get Tecnologia and input text on element

var tecnologiaTituloElement = document.getElementById('tituloTecnologia');
var tecnologiaElement = document.getElementById('tecnologia');
var tecnologiaTexto = text.child('tecnologiaTexto');
var tecnologiaTitulo = text.child('tecnologiaTitulo');

tecnologiaTitulo.on('value', function(value){
  tecnologiaTituloElement.innerText = value.val();
});

tecnologiaTexto.on('value', function(value){
  tecnologiaElement.innerText = value.val();
  var bold = tecnologiaElement.innerHTML.replace("tecnologia", "<b>tecnologia</b>").replace("conectamos", "<b>conectamos</b>");
  document.getElementById('tecnologia').innerHTML = bold
});

// get conheca and input text on element

var conhecaElement = document.getElementById('conheca');
var conheca = text.child('conheca');

conheca.on('value', function(value){
  conhecaElement.innerText = value.val();
});

// get conectar and input text on element

var conectarElement = document.getElementById('conectar');
var conectar = text.child('conectar');

conectar.on('value', function(value){
  conectarElement.innerText = value.val();
});

// get links and input href on element

function getSimpleLink(idName, DBNode) {
  var links = text.child("links")
  var link = document.getElementById(idName);
  var node = links.child(DBNode);

  node.on('value', function(value){
    link.href = value.val();
  });
}

function getLink(nameClass, DBNode){
  var links = text.child("links")
  var link = document.getElementsByClassName(nameClass);
  var node = links.child(DBNode);

  node.on('value', function(value){
    for (var i in link) {
        link[i].href = value.val();
    }
  });
}

getSimpleLink('eventos', 'eventosLink');
getSimpleLink('facebook', 'facebook');
getSimpleLink('instagram', 'instagram');
getSimpleLink('googlePlus', 'googlePlus');
getSimpleLink('pinterest', 'twitter');
getSimpleLink('linkedin', 'linkedin');
getSimpleLink('blog', 'blog');
getLink('linkEngenharia', 'carreiraEngenhariaLink');
getLink('linkAtendimento', 'carreiraAtendimentoLink');
getLink('linkComunicacao', 'carreiraComunicacaoLink');
getLink('linkVendedores', 'carreiraVendedoresLink');
getLink('linkDesign', 'carreiraDesignLink');
getLink('linkProduto', 'carreiraProdutoLink');
getLink('linkTrust', 'carreiraTrustLink');
getLink('linkAdm', 'carreiraAdmLink');


}());
