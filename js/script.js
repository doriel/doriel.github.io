function carregando(){
				var elem1 = document.getElementById('loading'),
					elem2 = document.getElementById('menu'),
					primeira = feid(elem1,8),
					segunda = feid(elem2,16);
				

				primeira.on();
				segunda.on();
			}
			window.addEventListener('load', carregando, false);

			