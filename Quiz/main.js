function vpergunta1(botaoClicado,opcaoSelecionada){
    if(opcaoSelecionada =='c1'){
        var respCerta= document.getElementById('c1');
        respCerta.style.backgroundColor ="blue";
        document.getElementById('resp1').innerHTML="Parabens voce acertou! :)";
    } else{
        var respCerta= document.getElementById('c1');
         respCerta.style.backgroundColor ="blue";
         botaoClicado.style.backgroundColor ="red";
         document.getElementById('resp1').innerHTML="Ops voce errou :(";

        }
    }
function vpergunta2(botaoClicado,opcaoSelecionada){
    if(opcaoSelecionada =='c1'){
        var respCerta= document.getElementById('d1');
        respCerta.style.backgroundColor ="yellow";
        document.getElementById('resp2').innerHTML="Parabens voce acertou! :)";
    }else{
        var respCerta= document.getElementById('d1');
         respCerta.style.backgroundColor ="blue";
         botaoClicado.style.backgroundColor ="red";
         document.getElementById('resp2').innerHTML="Ops voce errou :(";
        }
        }