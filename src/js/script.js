(function () {
	var botao = document.querySelector("#btn_sobre");
		mostra = document.querySelector("#sobre");

	botao.addEventListener("click", esconde_mostra, false);

	function esconde_mostra () {
		mostra.style.display = "block";
		botao.style.display = "none";
		
	}

}());

