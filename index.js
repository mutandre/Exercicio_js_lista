
function adicionar() {

      /** Atribuição de outras variavéis  */

      var nome = document.querySelector("#inserido").value;

      if (nome == null || nome==""){
  
          alert("Por favor, o campo precisa de informação!");
          document.querySelector("#inserido").focus();
          return false;
      }
      else {
  
          var entrada = document.querySelector("#list");
          
          /* Criar novos itens tanto li quanto texto nele será inserido*/
          var linovo = document.createElement("li");
          var txtnovo = document.createTextNode(nome);
  
  
          linovo.appendChild(txtnovo);
          entrada.appendChild(linovo);
  
          /* Aplicando espaçamento no novo item adicionado na lista */
          linovo.style.padding = "0.5rem 0 0.5rem 1rem";
          linovo.style.margin = "margin: 0.1rem 0";
          linovo.style.borderBottom = "1px solid #B2DBBF";
  
   
      }


}