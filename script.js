let firstTry = true;

function encriptar(){

    let textoAntiguo = document.getElementById('text').value;
    let textoNuevo = "";

    if(textoAntiguo.length > 0){
        for(let i = 0;i<textoAntiguo.length;i++){
            switch(textoAntiguo[i].toLowerCase()){
                case "a":
                    textoNuevo += "ai";
                    break;
                case "e":
                    textoNuevo += "enter";
                    break;
                case "i":
                    textoNuevo += "imes";
                    break;
                case "o":
                    textoNuevo += "ober";
                    break;
                case "u":
                    textoNuevo += "ufat";
                    break;
                default:
                    textoNuevo += textoAntiguo[i];
                    break;
            }
        }

        if(firstTry){
            document.getElementById('mona').remove();
            document.getElementById('warning').remove();
            firstTry = false;
            document.getElementById('copy').removeAttribute('hidden');
        }
        
        document.getElementById('traduccion').innerHTML = textoNuevo;
        document.getElementById('text').value = '';
    }
}

function desencriptar(){

    let textoAntiguo = document.getElementById('text').value;
    let textoNuevo = "";

    if(textoAntiguo.length > 0){
        
        let posicionAuxiliar;
        let aux;

        for(let i=0;i<textoAntiguo.length;i++){
            posicionAuxiliar = i;
            aux = "";
        
            switch(textoAntiguo[i].toLowerCase()){
                case "a":
                    if(textoAntiguo[i+1] == 'i'){
                        textoNuevo += "a";
                        i++;
                    }else{
                        textoNuevo += textoAntiguo[i];
                    }
                    break;
                case "e":
                    aux = buscarPalabraEncriptada("enter", aux, textoAntiguo, posicionAuxiliar);
                    if(aux == "enter"){
                        textoNuevo += "e";
                        i += aux.length-1;
                    }else{
                        textoNuevo += textoAntiguo[i];
                    }
                    break;
                case "i":
                    aux = buscarPalabraEncriptada("imes", aux, textoAntiguo, posicionAuxiliar);
                    if(aux == "imes"){
                        textoNuevo += "i";
                        i += aux.length-1;
                    }else{
                        textoNuevo += textoAntiguo[i];
                    }
                    break;
                case "o":
                    aux = buscarPalabraEncriptada("ober", aux, textoAntiguo, posicionAuxiliar);
                    if(aux == "ober"){
                        textoNuevo += "o";
                        i += aux.length-1;
                    }else{
                        textoNuevo += textoAntiguo[i];
                    }
                    break;
                case "u":
                    aux = buscarPalabraEncriptada("ufat", aux, textoAntiguo, posicionAuxiliar);
                    if(aux == "ufat"){
                        textoNuevo += "u";
                        i += aux.length-1;
                    }else{
                        textoNuevo += textoAntiguo[i];
                    }
                    break;
                default:
                    textoNuevo += textoAntiguo[i];
            }
        }

        if(firstTry){
            document.getElementById('mona').remove();
            document.getElementById('warning').remove();
            firstTry = false;
            document.getElementById('copy').removeAttribute('hidden');
        }
        document.getElementById('traduccion').innerHTML = textoNuevo;
        document.getElementById('text').value = '';
    }
}

function buscarPalabraEncriptada(palabraBuscada, aux, texto, posicion){
    for(let j=0;j<palabraBuscada.length;j++){
        if(texto[posicion] == palabraBuscada[j]){ 
            aux += texto[posicion];
            posicion++;
        }
    }
    return aux;
}

function copiar(){
    document.getElementById('traduccion').select();
    document.execCommand('copy');
}