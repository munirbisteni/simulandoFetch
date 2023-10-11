           /*      
            <tr class="linhaImpar">
            <td>123456</td>
            <td>João Silva</td>
            </tr>
            */
           
            // simulando um fetch real num serviço de GET.
            let fetchAlunos = () =>{
                let alunos = [];
                const mariaJulia = {ra:'321321321', nome: 'Maria Julia'};
                const munir = {ra:'123123123', nome: 'Munir Bisteni'};
                alunos.push(mariaJulia);
                alunos.push(munir);

                return alunos;
            }

            let carregarAlunos = () =>{
                const alunosObtidos = fetchAlunos();
                preencherTabela(alunosObtidos);    
            }

            let preencherTabela = (alunos) =>{
                // precisamos acrescentar as linhas 
                // na tabela alunos...
                // cada linha representa um elemento no array do
                //parametro alunos que chegou na funcao.
                let tbody = document.getElementById("tblAlunosDados");
                let count = 0;
                let linha = "";
                let estiloLinha = "linhaPar";
                
                tbody.innerHTML = "";
                alunos.forEach(aluno => {
                    count %2 === 0 ? estiloLinha = "linhaPar" : estiloLinha = "linhaImpar";
                    linha = `<tr class="${estiloLinha}"> <td>${aluno.ra}</td> <td>${aluno.nome}</td> </tr>`;
                    tbody.innerHTML += linha;
                    count ++;
                });     
            }