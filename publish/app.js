var web="/home/chronos/u-193b94573f18e9ccbe3a66bcd2ce34a91db2c0f3/MyFiles/tx-basil/"

function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;
  let params = new URLSearchParams(location.search);
  code.open();
  code.writeln(
    params.get('html') +
      "<style>" +
      params.get('css') +
      "</style>" +
      "<script>" +
      params.get('js') +
      "</script>"
  );
  code.close();
    
}
function savePage(){
  window.location.href=web+"index.html?html="+document.getElementById("html").value.replace(/\n/g,"%0A")+"&css="+document.getElementById("css").value.replace(/\n/g,"%0A")+"&js="+document.getElementById("js").value.replace(/\n/g,"%0A")
  
  
  alert("Save the link!");
}

function publishPage(){
  
  
  alert(web+"/index.html?html="+document.getElementById("html").value.replace(/\n/g,"%0A")+"&css="+document.getElementById("css").value.replace(/\n/g,"%0A")+"&js="+document.getElementById("js").value.replace(/\n/g,"%0A"));
}
compile();