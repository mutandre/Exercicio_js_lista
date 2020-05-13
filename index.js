/*const btn_texto= document.querySelector(".task-list__action")
 
function alt (ligando){

    if (ligando==true){
      linovo.classList.add("task-list__item");
    }
    else{
      linovo.classList.add ("task-list__item--done")
    }
      

}
*/



function adicionar() {

      /** Atribuição de outras variavéis  */
    
      var nome = document.querySelector("#inserido").value;
      if (nome == null || nome==""){
  
         /* alert("Por favor, o campo precisa de informação!");*/
          document.querySelector("#inserido").focus();
          return false;
      }
      else {
  
        var entrada = document.querySelector("#list");
      
      /* Criação de botões e inserção de texto */ 
        const btn = document.createElement("BUTTON");
        const t = document.createTextNode("..");

        /* Criar novos itens tanto li quanto texto nele será inserido*/
        var linovo = document.createElement("li");
        var txtnovo = document.createTextNode(nome);
  
  
        document.body.appendChild(btn);
        btn.appendChild(t);

        linovo.appendChild(txtnovo);
        linovo.appendChild(btn);

        entrada.appendChild(linovo);
  
        /* Aplicando espaçamento no novo item adicionado na lista */
 
        linovo.classList.add("task-list__item");
        btn.classList.add("task-list__action")
         
        /* Limpar campo e inserir o focus novamente*/
        document.querySelector("#inserido").value="";
        document.querySelector("#inserido").focus();

      }


}