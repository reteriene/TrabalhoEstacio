function copiarTexto() {

    var texto = document.getElementById("meuTexto");

    var areaTransferencia = document.createElement("textarea");

    areaTransferencia.value = texto.textContent;

    document.body.appendChild(areaTransferencia);

    areaTransferencia.select();

    document.execCommand("copy");

    document.body.removeChild(areaTransferencia);

  }
 