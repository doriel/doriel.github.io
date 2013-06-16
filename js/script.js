window.setTimeout(function() {
        var descarregador = new Progress.bar({ 
        	id: "percentagem",
        	autoRemove: false,
        	backgroundSpeed: -5,
        	type: "discharge",
        	showPercentage: true });
        descarregador.renderTo(document.getElementById('carregador'));

        var percenta = 100;
        window.setInterval(function() {
            percenta = percenta - Math.floor(Math.random()*20);
            percenta = percenta <= 0 ? 100 : percenta;
            descarregador.update(percenta);

            if (percenta < 10) {
            	var elem1 = document.getElementById('para');
            	para.style.opacity = 0;
        	}
            
        }, 500);


        	

        
    }, 500)

function carregando(){
	var elem1 = document.getElementById('loading'),
		elem2 = document.getElementById('menu'),
		primeira = feid(elem1,8),
		segunda = feid(elem2,16);
				

		primeira.on();
		segunda.on();
			}
window.setTimeout(carregando,6000);

			