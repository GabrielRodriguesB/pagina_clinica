let botaoMais = document.getElementById('botao__mais');
let menuSecaoBotao = document.querySelectorAll('.menu__secao-botao');
let corFundo= document.getElementById('fundo');
let bloqueioY= document.getElementById('bloqueio');
let acionou=false;

botaoMais.addEventListener('click', ()=>{


		if(!acionou) {

				menuSecaoBotao[0].classList.remove('hidden');
				menuSecaoBotao[1].classList.remove('hidden');
				menuSecaoBotao[2].classList.remove('secao__mais');	
				corFundo.classList.add('container');
				bloqueioY.classList.add('bloqueio');
				acionou=true;
		} else {

			menuSecaoBotao[0].classList.add('hidden');
			menuSecaoBotao[1].classList.add('hidden');
			menuSecaoBotao[2].classList.add('secao__mais');
			corFundo.classList.remove('container');
			bloqueioY.classList.remove('bloqueio');
			acionou=false;
		}
	
	
})




	
