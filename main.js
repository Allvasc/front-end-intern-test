// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function () {
	// Elemento principal do formulário
	const contactForm = document.getElementById('contact');

	// Campos do formulário
	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');
	const messageInput = document.getElementById('message');

	// "addEventListener" instrui o navegador a executar uma função sempre
	// que um evento específico acontece. Nesse caso, a função abaixo será
	// executada toda vez que o botão de envio for pressionado.
	contactForm.addEventListener('submit', function () {
		// A propriedade "value" contém o valor atual de um input ou textarea
		const nameValue = nameInput.value;

		// A propriedade "length" contém o tamanho (em caracteres) de uma
		// uma string. Toda string contém essa propriedade.
		const nameLength = nameValue.length;

                // Validação do campo NOME
		if (nameValue === "") {
			window.alert("preencha o campo Nome");
			nameInput.focus();

		// Validação do campo EMAIL
		} else if (emailInput.value === "") {
			window.alert("preencha o campo Email");
			emailInput.focus();

		// Validação do campo MENSAGEM
		} else if (messageInput.value === "") {
			window.alert("preencha o campo Mensagem");
			messageInput.focus();

                //Mensagem de sucesso ao submeter o formulário.
		} else {
			window.alert(`${nameValue}, sua mensagem foi enviada com sucesso!`);
		}

	});
})();
