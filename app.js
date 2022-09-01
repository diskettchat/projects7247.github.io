
var web="tx-basil.github.io"
function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  code.open();
  code.writeln(
    html.value +
      "<style>" +
      css.value +
      "</style>" +
      "<script>" +
      js.value +
      "</script>"
  );
  code.close();

  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
    
  };
}




function savePage(){
  window.location.href="?html="+document.getElementById("html").value.replace(/\n/g,"%0A")+"&css="+document.getElementById("css").value.replace(/\n/g,"%0A")+"&js="+document.getElementById("js").value.replace(/\n/g,"%0A")
  
  
  alert("Save the link!");
}

function publishPage(){
  
  
  window.open(web+"/publish?html="+document.getElementById("html").value.replace(/\n/g,"%0A")+"&css="+document.getElementById("css").value.replace(/\n/g,"%0A")+"&js="+document.getElementById("js").value.replace(/\n/g,"%0A"), '_blank').focus();
}

//+"?css="+document.getElementById("css").value+"?js="+document.getElementById("js").value



let params = new URLSearchParams(location.search);


document.getElementById("html").value=params.get('html')
document.getElementById("css").value=params.get('css')

document.getElementById("js").value=params.get('js')

compile();
