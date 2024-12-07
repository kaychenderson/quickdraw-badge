let egressos = [];

document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('main section').forEach(section => section.classList.add('hidden'));
        const sectionId = button.getAttribute('data-section');
        document.getElementById(sectionId).classList.remove('hidden');
    });
});

document.getElementById('formCadastrar').addEventListener('submit', e => {
    e.preventDefault();
    const novoEgresso = {
        matricula: document.getElementById('matricula').value,
        nome: document.getElementById('nome').value,
        curso: document.getElementById('curso').value,
        anoConclusao: document.getElementById('anoConclusao').value,
        statusProfissional: document.getElementById('statusProfissional').value,
        localDeTrabalho: document.getElementById('localDeTrabalho').value,
        email: document.getElementById('email').value,
    };
    egressos.push(novoEgresso);
    alert('Egresso cadastrado com sucesso!');
    e.target.reset();
});

document.getElementById('formBuscar').addEventListener('submit', e => {
    e.preventDefault();
    const matricula = document.getElementById('matriculaBusca').value;
    const egresso = egressos.find(e => e.matricula === matricula);
    const resultado = document.getElementById('resultadoBusca');
    resultado.innerHTML = egresso ? `
        <p><strong>Nome:</strong> ${egresso.nome}</p>
        <p><strong>Curso:</strong> ${egresso.curso}</p>
        <p><strong>Ano de Conclusão:</strong> ${egresso.anoConclusao}</p>
        <p><strong>Status Profissional:</strong> ${egresso.statusProfissional}</p>
        <p><strong>Local de Trabalho:</strong> ${egresso.localDeTrabalho}</p>
        <p><strong>E-mail:</strong> ${egresso.email}</p>
    ` : '<p>Egresso não encontrado.</p>';
});

document.getElementById('formExcluir').addEventListener('submit', e => {
    e.preventDefault();
    const matricula = document.getElementById('matriculaExcluir').value;
    const index = egressos.findIndex(e => e.matricula === matricula);
    if (index !== -1) {
        egressos.splice(index, 1);
        alert('Egresso excluído com sucesso!');
    } else {
        alert('Egresso não encontrado!');
    }
});

document.querySelector('[data-section="listar"]').addEventListener('click', () => {
    const listaEgressos = document.getElementById('listaEgressos');
    listaEgressos.innerHTML = egressos.length ? egressos.map(e => `
        <div>
            <p><strong>Matrícula:</strong> ${e.matricula}</p>
            <p><strong>Nome:</strong> ${e.nome}</p>
        </div>
    `).join('') : '<p>Nenhum egresso cadastrado.</p>';
});
