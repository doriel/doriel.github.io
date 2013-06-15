var feid = function(elemento, duracao){
	return{
		ele:elemento,
		duracao:duracao,
		on:function(){
			var l = this.ele,
			d = this.duracao,
			op = 'opacity'+' '+d+'s';
			l.style.transition = op;
			l.style.webkitTransition = op;//suporte ao Chrome | support for chrome
			l.style.opacity = 1;
		},
		off:function(){
			var l = this.ele;
			d = this.duracao,
			op = 'opacity'+' '+d+'s',
			time1x = d * 1000,
			l.style.transition = op;
			l.style.webkitTransition = op;//suporte ao Chrome | support for chrome
			l.style.opacity = 0;
			// Define display none
			function setNone(){
				l.style.display = "none";
			}
			window.setTimeout(setNone, time1x);
		}
	};
};