const wisch = document.querySelectorAll(".switch");
const td = document.querySelectorAll("td");

var schalter_bit8 = document.querySelector(".schalter-8");
var schalter_bit7 = document.querySelector(".schalter-7");
var schalter_bit6 = document.querySelector(".schalter-6");
var schalter_bit5 = document.querySelector(".schalter-5");
var schalter_bit4 = document.querySelector(".schalter-4");
var schalter_bit3 = document.querySelector(".schalter-3");
var schalter_bit2 = document.querySelector(".schalter-2");
var schalter_bit1 = document.querySelector(".schalter-1");

var lampe = document.querySelector(".lamp");

const zeiger = document.querySelector(".line");
const percent = document.querySelector(".percentage");
const led = document.querySelector(".lamp");

const isoTabelle = document.querySelector(".iso-tabelle");

const dark = document.querySelector(".dark-mode");
const dark_btn = document.querySelector(".switch_dark-mode");
const tacho = document.getElementById("tachometer");
const tacho_striche = document.querySelectorAll(".ii div b");
const tacho_ziffer = document.querySelectorAll(".ii div b [class^=\"num_\"]");
dark.addEventListener('click', () => {
		if (dark_btn.style.left == "0px") {
			dark_btn.style.left = "85px";
			document.body.style.backgroundColor = '#e9e9e9';
			tacho.style.backgroundColor = '#d3d3d3';
			tacho_striche.forEach((e) => {e.style.backgroundColor = 'black';});
			tacho_ziffer.forEach((e) => {e.style.color = 'black';});
		} else {
			dark_btn.style.left = "0px";
			document.body.style.backgroundColor = '#232525';
			tacho.style.backgroundColor = '#171717';
			tacho_striche.forEach((e) => {e.style.backgroundColor = '#fff';});
			tacho_ziffer.forEach((e) => {e.style.color = '#fff';});
		}
	});


wisch.forEach((e) => {
	e.addEventListener('click', () => {
		if (e.style.left == "0px") {
			e.style.left = "40px";
		} else {
			e.style.left = "0px";
		}
	});
});


		//###################### Bit 8 ######################
	const schalt8 = document.querySelector(".switch-8");
	const bit8 = document.querySelector(".bit-8");
	let bit_8 = 0;
	schalt8.addEventListener('click', () => {
		if (schalt8.style.left == "0px") {
			bit8.classList.remove("bin-0");
			bit8.classList.add("bin-1");
			schalter_bit8.classList.remove('schalter');
			schalter_bit8.classList.add('schalter-active');
			bit_8 = 128;
		} else {
			bit8.classList.remove("bin-1");
			bit8.classList.add("bin-0");
			schalter_bit8.classList.remove('schalter-active');
			schalter_bit8.classList.add('schalter');
			bit_8 = 0;
		}
	});

	//###################### Bit 7 ######################
	const schalt7 = document.querySelector(".switch-7");
	const bit7 = document.querySelector(".bit-7");
	let bit_7 = 0;
	schalt7.addEventListener('click', () => {
		if (schalt7.style.left == "0px") {
			bit7.classList.remove("bin-0");
			bit7.classList.add("bin-1");
			schalter_bit7.classList.remove('schalter');
			schalter_bit7.classList.add('schalter-active');
			bit_7 = 64;
		} else {
			bit7.classList.remove("bin-1");
			bit7.classList.add("bin-0");
			schalter_bit7.classList.remove('schalter-active');
			schalter_bit7.classList.add('schalter');
			bit_7 = 0;
		}
	});

	//###################### Bit 6 ######################
	const schalt6 = document.querySelector(".switch-6");
	const bit6 = document.querySelector(".bit-6");
	let bit_6 = 0;
	schalt6.addEventListener('click', () => {
		if (schalt6.style.left == "0px") {
			bit6.classList.remove("bin-0");
			bit6.classList.add("bin-1");
			schalter_bit6.classList.remove('schalter');
			schalter_bit6.classList.add('schalter-active');
			bit_6 = 32;
		} else {
			bit6.classList.remove("bin-1");
			bit6.classList.add("bin-0");
			schalter_bit6.classList.remove('schalter-active');
			schalter_bit6.classList.add('schalter');
			bit_6 = 0;
		}
	});

	//###################### Bit 5 ######################
	const schalt5 = document.querySelector(".switch-5");
	const bit5 = document.querySelector(".bit-5");
	let bit_5 = 0;
	schalt5.addEventListener('click', () => {
		if (schalt5.style.left == "0px") {
			bit5.classList.remove("bin-0");
			bit5.classList.add("bin-1");
			schalter_bit5.classList.remove('schalter');
			schalter_bit5.classList.add('schalter-active');
			bit_5 = 16;
		} else {
			bit5.classList.remove("bin-1");
			bit5.classList.add("bin-0");
			schalter_bit5.classList.remove('schalter-active');
			schalter_bit5.classList.add('schalter');
			bit_5 = 0;
		}
	});

	//###################### Bit 4 ######################
	const schalt4 = document.querySelector(".switch-4");
	const bit4 = document.querySelector(".bit-4");
	let bit_4 = 0;
	schalt4.addEventListener('click', () => {
		if (schalt4.style.left == "0px") {
			bit4.classList.remove("bin-0");
			bit4.classList.add("bin-1");
			schalter_bit4.classList.remove('schalter');
			schalter_bit4.classList.add('schalter-active');
			bit_4 = 8;
		} else {
			bit4.classList.remove("bin-1");
			bit4.classList.add("bin-0");
			schalter_bit4.classList.remove('schalter-active');
			schalter_bit4.classList.add('schalter');
			bit_4 = 0;
		}
	});

	//###################### Bit 3 ######################
	const schalt3 = document.querySelector(".switch-3");
	const bit3 = document.querySelector(".bit-3");
	let bit_3 = 0;
	schalt3.addEventListener('click', () => {
		if (schalt3.style.left == "0px") {
			bit3.classList.remove("bin-0");
			bit3.classList.add("bin-1");
			schalter_bit3.classList.remove('schalter');
			schalter_bit3.classList.add('schalter-active');
			bit_3 = 4;
		} else {
			bit3.classList.remove("bin-1");
			bit3.classList.add("bin-0");
			schalter_bit3.classList.remove('schalter-active');
			schalter_bit3.classList.add('schalter');
			bit_3 = 0;
		}
	});

	//###################### Bit 2 ######################
	const schalt2 = document.querySelector(".switch-2");
	const bit2 = document.querySelector(".bit-2");
	let bit_2 = 0;
	schalt2.addEventListener('click', () => {
		if (schalt2.style.left == "0px") {
			bit2.classList.remove("bin-0");
			bit2.classList.add("bin-1");
			schalter_bit2.classList.remove('schalter');
			schalter_bit2.classList.add('schalter-active');
			bit_2 = 2;
		} else {
			bit2.classList.remove("bin-1");
			bit2.classList.add("bin-0");
			schalter_bit2.classList.remove('schalter-active');
			schalter_bit2.classList.add('schalter');
			bit_2 = 0;
		}
	});

	//###################### Bit 1 ######################
	const schalt1 = document.querySelector(".switch-1");
	const bit1 = document.querySelector(".bit-1");
	let bit_1 = 0;
	schalt1.addEventListener('click', () => {
		if (schalt1.style.left == "0px") {
			bit1.classList.remove("bin-0");
			bit1.classList.add("bin-1");
			schalter_bit1.classList.remove('schalter');
			schalter_bit1.classList.add('schalter-active');
			bit_1 = 1;
		} else {
			bit1.classList.remove("bin-1");
			bit1.classList.add("bin-0");
			schalter_bit1.classList.remove('schalter-active');
			schalter_bit1.classList.add('schalter');
			bit_1 = 0;
		}
	});

const start = () => {
	setInterval(() => {

		let decimalSumme = bit_8 + bit_7 + bit_6 + bit_5 + bit_4 + bit_3 + bit_2 + bit_1;
	td[0].innerHTML = decimalSumme;
	td[1].innerHTML = "0x"+decimalSumme.toString(16);
	td[2].innerHTML = decToISOChar(decimalSumme);

	lampe.style.backgroundColor = byteToRGBColor(decimalSumme);

		function setTacho(value) {
			zeiger.style.transform = `rotate(${(value * (200/255))-100}deg)`;
			percent.textContent = `${(value * (100/255)).toFixed(1)}%`;

			var elem_zeiger = document.querySelector(".line");
			var new_style = document.createElement("style");
			var keyframes_line = "@keyframes pendulum {100% {transform: rotate("+value * (200/255)-100+"deg);}}"
			new_style.innerHTML = keyframes_line;
			document.head.appendChild(new_style);
			elem_zeiger.classList.add("line");
			
		}
		setTacho(decimalSumme);
	}, 250)
};


function byteToRGBColor(dec) {
	var red = (dec & 0xe0) >> 5;
	var green = (dec & 0x1c) >> 2;
	var blue = dec & 0x03;

	red = red * (255/7);
	green = green * (255/7);
	blue = blue * 85;

	return "rgb("+Math.round(red)+", "+Math.round(green)+", "+blue+")";
}


	function decToISOChar(dec) {
		switch (dec) {
			case 0: return "NUL";break;
	        case 1: return "SOH";break;
	        case 2: return "STX";break;
	        case 3: return "ETX";break;
	        case 4: return "EOT";break;
	        case 5: return "ENQ";break;
	        case 6: return "ACK";break;
	        case 7: return "BEL";break;
	        case 8: return "BS";break;
	        case 9: return "HT";break;
	        case 10: return "LF";break;
	        case 11: return "VT";break;
	        case 12: return "FF";break;
	        case 13: return "CR";break;
	        case 14: return "SO";break;
	        case 15: return "SI";break;
	        case 16: return "DLE";break;
	        case 17: return "DC1";break;
	        case 18: return "DC2";break;
	        case 19: return "DC3";break;
	        case 20: return "DC4";break;
	        case 21: return "NAK";break;
	        case 22: return "SYN";break;
	        case 23: return "ETB";break;
	        case 24: return "CAN";break;
	        case 25: return "EM";break;
	        case 26: return "SUB";break;
	        case 27: return "ESC";break;
	        case 28: return "FS";break;
	        case 29: return "GS";break;
	        case 30: return "RS";break;
	        case 31: return "US";break;
	        case 32: return "SP";break;
	        case 127: return "DEL";break;
	        case 128: return "PAD";break;
	        case 129: return "HOP";break;
	        case 130: return "BPH";break;
	        case 131: return "NBH";break;
	        case 132: return "IND";break;
	        case 133: return "NEL";break;
	        case 134: return "SSA";break;
	        case 135: return "ESA";break;
	        case 136: return "HTS";break;
	        case 137: return "HTJ";break;
	        case 138: return "VTS";break;
	        case 139: return "PLD";break;
	        case 140: return "PLU";break;
	        case 141: return "RI";break;
	        case 142: return "SS2";break;
	        case 143: return "SS3";break;
	        case 144: return "DCS";break;
	        case 145: return "PU1";break;
	        case 146: return "PU2";break;
	        case 147: return "STS";break;
	        case 148: return "CCH";break;
	        case 149: return "MW";break;
	        case 150: return "SPA";break;
	        case 151: return "EPA";break;
	        case 152: return "SOS";break;
	        case 153: return "SGCI";break;
	        case 154: return "SCI";break;
	        case 155: return "CSI";break;
	        case 156: return "ST";break;
	        case 157: return "OSC";break;
	        case 158: return "PM";break;
	        case 159: return "APC";break;
	        case 160: return "NBSP";break;
	        case 164: return "€";break;
	        case 166: return "Š";break;
	        case 168: return "š";break;
	        case 173: return "SHY";break;
	        case 180: return "Ž";break;
	        case 184: return "ž";break;
	        case 188: return "Œ";break;
	        case 189: return "œ";break;
	        case 190: return "Ÿ";break;
	        default: return String.fromCharCode(dec);
		}
	}


function zeichenName(dec) {
	if (dec <= 32 || dec >= 127 && dec <= 160 || dec == 173) {
		return decToISOChar(dec);
	}
	return "";
}

function isoChar(dec) {
	if (dec >= 33 && dec <= 126 || dec >= 161 && dec <= 164 || dec == 165 || dec == 166 || dec == 167 || dec >= 168 && dec <= 180 && dec != 173 || dec >= 181 && dec <= 184 || dec >= 185) {
		return decToISOChar(dec);
	}
	return "";
}


function ertelleISO_Tabelle() {

	function decToBin(dec) {
		return (dec >>> 0).toString(2);
	}

	for(var i = 0; i <= 255; i++) {
		isoTabelle.innerHTML +=	`<tr>
									<td class="board-right-body">`+isoChar(i)+`</td>
									<td class="board-right-body">`+decToBin(i)+`</td>
									<td class="board-right-body">`+i+`</td>
									<td class="board-right-body">`+zeichenName(i)+`</td>
								</tr>`;
	}
}


ertelleISO_Tabelle();
start();