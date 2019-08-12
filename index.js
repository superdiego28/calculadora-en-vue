(function(){
	var Aplicacion = new Vue({
		el: "#Contenedor",
		data: {
			resultado: 0,
			ParteA: '',
			TipoO : '',
			ParteB : 0
		},
		methods: {
			Limpiar : function(){
				this.resultado = 0;
				this.ParteB = 0;
				this.ParteA = '';
				this.TipoO = '';					
			},
			Asignar : function(parametro){
				this.ParteA += parametro;	
				this.resultado = parseFloat(this.ParteA);
			},
			Operacion : function(Op){										
				if(Op === '='){
					if(this.TipoO === '/'){
						this.resultado = this.ParteB / parseFloat(this.ParteA);
					}
					if(this.TipoO === '*'){
						this.resultado = this.ParteB * parseFloat(this.ParteA);
					}
					if(this.TipoO === '+'){
						this.resultado = this.ParteB + parseFloat(this.ParteA);							
					}
					if(this.TipoO === '-'){
						this.resultado = this.ParteB - parseFloat(this.ParteA);
					}	
					this.ParteB = this.resultado;
				}else{
					this.TipoO = Op;
					this.ParteB = parseFloat(this.ParteA) || this.ParteB;							
				}
				this.ParteA = '';
			}
		}
	});
})();