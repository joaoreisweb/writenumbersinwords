//////////////////////////////////////////////////////////////
////////////////////////////////////////////FORMATA OS NÚMEROS
///////////////////////NORMA NP9 de 2006 - Escrita dos números
//////////////////////////////////////////////////////////////
////
//// v.1 11.04.2012
////
////created by: João Reis
////www.joaoreis.pt
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// ------- Methods -------
function numero(nGet, tabela) {
	var decimal = false;
	var arrTemp;
	var nL = nGet;
	var nR = "";

	var tTemp = "";
	var tResult = "";
	var espaço;
	var rL;
	var rR;
	var numCasas = 3;

	var separadorDecimal = /[\.\,]/;
	
	//verifica se existem casas decimais
	if (nGet.search(separadorDecimal) != -1) {
		nGet = nGet.replace(".",",");
		decimal = true;
		arrTemp = nGet.split(separadorDecimal,nGet.length);
		nL = arrTemp[0];
		nR = arrTemp[1];
	}

	//conta quantos trios existem
	var cNumL = parseFloat(Math.ceil(String(nL).length / numCasas));
	var cNumR = parseFloat(Math.ceil(String(nR).length / numCasas));

	//numeros do lado esquerdo
	if (String(nL).length > 4 || tabela == true) {
		for (var iL=0; iL<cNumL; iL++) {
			//acrescenta um espaço de 3 em 3
			espaço = " ";
			//se for o ultimo retirar o espaço
			if (iL==cNumL-1) {
				espaço = "";
			}

			//conta o primeiro trio
			rL = parseInt(numCasas-(((numCasas*cNumL)-String(nL).length)));

			if (iL==0) {
				//devolve a contagem do primeiro trio
								tTemp = String(nL).substr(0,rL);
			} else {
								//devolve todas as centenas depois do primeiro trio
								tTemp = String(nL).substr(rL+(numCasas*(iL-1)),numCasas);
			}
							//acrescenta no resultado final
							tResult +=  tTemp + espaço;
		}
	} else {
		tResult = nL;
	}


	//numeros do lado direito, se existirem casas decimais
	if (decimal) {
		if (String(nR).length == 1) {
			nR=String(Number(Number(nR)*10));
		}
		if (String(nR).length > 4 || tabela == true) {
			for (var iR=0; iR<cNumR; iR++) {
				//acrescenta um espaço de 3 em 3
				if (iR==0) {
					espaço = ",";
				} else {
					espaço = " ";
				}

				//se for o ultimo retirar o espaço
				if (iR==cNumR && cNumR==1) {
					espaço = "";
				}

				//devolve todas as centenas depois do primeiro trio
				tTemp = String(nR).substr(numCasas*iR,numCasas);

				//acrescenta no resultado final
				tResult +=  espaço + tTemp;
			}
		} else {
			espaço = ",";
			tResult +=  espaço + nR;
		}
	};

	//devolve o resultado final
	return tResult;
};

