    const form = document.getElementById('cadastro');
    const nome = [];
    const cpf = [];
    const telefone = [];
    let linhas = '';

    form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    });

    function adicionaLinha() {
    const inputSeuNome = document.getElementById('seu-nome');
    const inputSeuCpf = document.getElementById('seu-cpf');
    const inputSeuTelefone = document.getElementById('seu-telefone');

    if (nome.includes(inputSeuNome.value)) {
        alert(`O nome: ${inputSeuNome.value} já foi inserido.`);
        (cpf.includes(inputSeuCpf.value)) 
            alert(`O Cpf: ${inputSeuCpf.value} já foi inserido.`);
            (telefone.includes(inputSeuTelefone.value)) 
            alert(`O Telefone: ${inputSeuTelefone.value} já foi inserido.`);
    } else {
        nome.push(inputSeuNome.value);
        cpf.push(inputSeuCpf.value);
        telefone.push(inputSeuTelefone.value);

        let linha = '<tr>';
        linha += `<td> ${inputSeuNome.value}</td>`;
        linha += `<td> ${inputSeuCpf.value}</td>`;
        linha += `<td> ${inputSeuTelefone.value}</td>`;
        linhas += linha; 
    }

    inputSeuNome.value = '';
    inputSeuCpf.value = '';
    inputSeuTelefone.value = '';
    }

    function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    }
