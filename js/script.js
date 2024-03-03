let alunos = [] //array
const addAluno = document.querySelector('#addAluno')

addAluno.addEventListener('click', function (){
    let in_nome   = document.querySelector('.nome').value
    let in_nota1  = parseFloat(document.querySelector('.nota1').value)
    let in_nota2  = parseFloat(document.querySelector('.nota2').value)
    let in_nota3  = parseFloat(document.querySelector('.nota3').value)
    let in_nota4  = parseFloat(document.querySelector('.nota4').value)
    // let in_faltas = parseFloat(document.querySelector('.faltas').value)

    if (in_nome   == "" ||
        in_nota1  == "" ||
        in_nota2  == "" ||
        in_nota3  == "" ||
        in_nota4  == "" ) {
        alert('Campo vazio, preencha corretamente.')
    } 
    
    else {
        let mediaAluno = (in_nota1 + in_nota2 + in_nota3 + in_nota4) / 4

    alunos.push ({
        nome: in_nome,
        nota1: in_nota1,
        nota2: in_nota2,
        nota3: in_nota3,
        nota4: in_nota4,
        media: mediaAluno
        // situacao: situacaoA,
    })

    //zerar input
    document.querySelector('.nome').value   = ""
    document.querySelector('.nota1').value  = ""
    document.querySelector('.nota2').value  = ""
    document.querySelector('.nota3').value  = ""
    document.querySelector('.nota4').value  = ""
    document.querySelector('.nota4').value  = ""
    // document.querySelector('.faltas').value = ""
    }

    //exibição
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
        </div>
        `
    ).join("")

       outputAlunos.innerHTML += exibirAlunos
    
    //calcular media da sala
    let somaMediasSala = alunos.reduce((total, aluno) => total + aluno.media, 0);
    let mediaSala = somaMediasSala / alunos.length;

    //alunos abaixo da média
    let alunosAbaixo = alunos.filter(aluno => aluno.media < mediaSala);

    outputResultados.innerHTML = `Média Geral: ${mediaSala.toFixed(1)}<br>`;
    outputResultados.innerHTML = `Alunos abaixo da média:<br>`;

    alunosAbaixo.forEach(aluno => {
        outputResultados.innerHTML += `${aluno.nome} - Média: ${aluno.media.toFixed(1)}<br>`;
    });
})