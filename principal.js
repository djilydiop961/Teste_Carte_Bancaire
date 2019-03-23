
//	<script type="text/javascript">
/*
	**********************************classe Banque************************************
*/
		class Banque {
			constructor(numerocarte) {
				this.verifi = new verificateur(numerocarte);
			}
			
		}

/*
	</script>

	<script type="text/javascript">
*/
/*
	******************************classe verificateur**********************************
	******************chargé de vérifier la nature d'une carte*************************
*/
		class verificateur{
			constructor(numerocarte){
				this.numerocarte = numerocarte;
			}
			Vérifiercarte() {};
		}
/*
	******************************classe VISA**********************************
	*********************qui etend la class verificateur***********************
*/
		class visa extends verificateur {
			constructor(numerocarte){
				super(numerocarte);
			}
			Vérifiercarte() {
				//const deb = "15253678229654123"; 
				const deb =this.numerocarte[0]+this.numerocarte[1];
				if ( this.numerocarte.length == 15 && deb === "14" || deb === "15") {
					//document.write("visa");
					return true;
				}else{
					//document.write("autre");
					return false;
				}
			}
		}
/*
	******************************classe MASTERCARD**********************************
	***********************qui etend la class verificateur***************************
*/
		class mastercard extends verificateur {
			constructor(numerocarte){
				super(numerocarte);
			}
			Vérifiercarte() {
				//const deb = "15253678229654123"; 
				const deb =this.numerocarte[0]+this.numerocarte[1];
				if ( this.numerocarte.length == 16 && deb === "41" || deb === "40") {
					//document.write("mastercard");
					return true;
				}else{
					//document.write("autre");
					return false;
				}
			}
		}
		/*
	******************************classe AMERICAN_EXPRESS**********************************
	*************************qui etend la class verificateur*******************************
*/
		class american_express extends verificateur {
			constructor(numerocarte){
				super(numerocarte);
			}
			Vérifiercarte() {
				//const deb = "15253678229654123"; 
				const deb =this.numerocarte[0]+this.numerocarte[1];
				if ( this.numerocarte.length == 17 && deb === "29" || deb === "30") {
					//document.write("mastercard");
					return true;
				}else{
					//document.write("autre");
					return false;
				}
			}
		}


	
