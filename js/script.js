let alunos = [] //array
const addAluno = document.querySelector('#addAluno')

addAluno.addEventListener('click', function (){
    let in_nome   = document.querySelector('.nome').value
    let in_nota1  = parseFloat(document.querySelector('.nota1').value)
    let in_nota2  = parseFloat(document.querySelector('.nota2').value)
    let in_nota3  = parseFloat(document.querySelector('.nota3').value)
    let in_nota4  = parseFloat(document.querySelector('.nota4').value)
    
    //checar inputs vazios
    if (in_nome == ""   ||
        isNaN(in_nota1) ||
        isNaN(in_nota2) ||
        isNaN(in_nota3) ||
        isNaN(in_nota4) ) {
            alert('Campo vazio, preencha corretamente.')
        }
    //checar inputs invalidos
    else if (in_nota1 > 100 || in_nota1 < 0 ||
             in_nota2 > 100 || in_nota2 < 0 ||
             in_nota3 > 100 || in_nota3 < 0 ||
             in_nota4 > 100 || in_nota4 < 0 ) {
                 alert('A nota inserida é inválida. Digite um valor de 0 a 100.')
                }
                
                //input valido
                else {
                    //media individual
                    let mediaAluno = (in_nota1 + in_nota2 + in_nota3 + in_nota4) / 4
                    
                    //calcular situacao do aluno
                    let situacaoAluno
                    if (mediaAluno >= 70) {
            situacaoAluno = "Aprovado"
        }
        else if (mediaAluno >= 50 && mediaAluno <= 70) {
            situacaoAluno = "Em recuperação"
        }
        else {
            situacaoAluno = "Reprovado"
        }
        
        //atribuir valores ao array
        alunos.push ({
            nome: in_nome,
            nota1: in_nota1,
            nota2: in_nota2,
            nota3: in_nota3,
            nota4: in_nota4,
            media: mediaAluno,
            situacao: situacaoAluno
        })

        //zerar input
        document.querySelector('.nome').value   = ""
        document.querySelector('.nota1').value  = ""
        document.querySelector('.nota2').value  = ""
        document.querySelector('.nota3').value  = ""
        document.querySelector('.nota4').value  = ""
    }

    //exibição dos alunos
    let outputAlunos = document.querySelector('#outputAlunos')
    let outputResultados = document.querySelector('#outputResultados')
    
    outputAlunos.innerHTML = ""
    
    const exibirAlunos = alunos.map(aluno => `
            <div class="aluno-out">
            <h3>${aluno.nome}</h3>
            <p> ${aluno.nota1}</p>
            <p> ${aluno.nota2}</p>
            <p> ${aluno.nota3}</p>
            <p> ${aluno.nota4}</p>
            <p> ${aluno.media.toFixed(1)}</p>
            <p> ${aluno.situacao}</p>
            </div>
            `
            ).join("")
            
            outputAlunos.innerHTML += exibirAlunos

});
//exibir resultados
const viewResult = document.querySelector('#viewResult')

viewResult.addEventListener('click', function () {

    if (alunos.length < 5) {
        alert('Alunos insuficientes. Registre no minino 5.')
    } 

    else {
        //calcular media da sala
        let somaMediasSala = alunos.reduce((total, aluno) => total + aluno.media, 0);
        let mediaSala = somaMediasSala / alunos.length;

        //alunos abaixo da media
        let alunosAbaixo = alunos.filter(aluno => aluno.media < mediaSala);
    
        //exibir
        outputResultados.innerHTML = `Média Geral: ${mediaSala.toFixed(1)}<br>`;
        outputResultados.innerHTML += `Alunos abaixo da média:<br>`;
    
        alunosAbaixo.forEach(aluno => {
            outputResultados.innerHTML += `${aluno.nome} - Média: ${aluno.media.toFixed(1)}<br>`;
        })
    }
})