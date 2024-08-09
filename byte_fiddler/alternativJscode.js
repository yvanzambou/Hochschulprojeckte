const wisch = document.querySelectorAll(".switch");
const td = document.querySelectorAll("td");
const lampe = document.querySelector(".lamp");
const zeiger = document.querySelector(".line");
const percent = document.querySelector(".percentage");
const led = document.querySelector(".lamp");
const isoTabelle = document.querySelector(".iso-tabelle");
const dark = document.querySelector(".dark-mode");
const dark_btn = document.querySelector(".switch_dark-mode");
const tacho = document.getElementById("tachometer");
const tacho_striche = document.querySelectorAll(".ii div b");
const tacho_ziffer = document.querySelectorAll(".ii div b [class^=\"num_\"]");

const bits = [
    { schalt: ".switch-8", bit: ".bit-8", schalter_bit: ".schalter-8", value: 128 },
    { schalt: ".switch-7", bit: ".bit-7", schalter_bit: ".schalter-7", value: 64 },
    { schalt: ".switch-6", bit: ".bit-6", schalter_bit: ".schalter-6", value: 32 },
    { schalt: ".switch-5", bit: ".bit-5", schalter_bit: ".schalter-5", value: 16 },
    { schalt: ".switch-4", bit: ".bit-4", schalter_bit: ".schalter-4", value: 8 },
    { schalt: ".switch-3", bit: ".bit-3", schalter_bit: ".schalter-3", value: 4 },
    { schalt: ".switch-2", bit: ".bit-2", schalter_bit: ".schalter-2", value: 2 },
    { schalt: ".switch-1", bit: ".bit-1", schalter_bit: ".schalter-1", value: 1 }
];

dark.addEventListener('click', () => {
    const darkLeft = (dark_btn.style.left == "0px");
    dark_btn.style.left = darkLeft ? "85px" : "0px";
    document.body.style.backgroundColor = darkLeft ? '#e9e9e9' : '#232525';
    tacho.style.backgroundColor = darkLeft ? '#d3d3d3' : '#171717';
    tacho_striche.forEach((e) => { e.style.backgroundColor = darkLeft ? 'black' : '#fff'; });
    tacho_ziffer.forEach((e) => { e.style.color = darkLeft ? 'black' : '#fff'; });
});


wisch.forEach((e) => {
    e.addEventListener('click', () => {
        e.style.left = (e.style.left == "0px") ? "40px" : "0px";
    });
});


bits.forEach(bit => {
    const schalt = document.querySelector(bit.schalt);
    const bitElement = document.querySelector(bit.bit);
    let bitValue = 0;

    schalt.addEventListener('click', () => {
        if (schalt.style.left == "0px") {
            bitElement.classList.remove("bin-0");
            bitElement.classList.add("bin-1");
            document.querySelector(bit.schalter_bit).classList.remove('schalter');
            document.querySelector(bit.schalter_bit).classList.add('schalter-active');
            bitValue = bit.value;
        } else {
            bitElement.classList.remove("bin-1");
            bitElement.classList.add("bin-0");
            document.querySelector(bit.schalter_bit).classList.remove('schalter-active');
            document.querySelector(bit.schalter_bit).classList.add('schalter');
            bitValue = 0;
        }
        start();
    });
});

const start = () => {
	let decimalSumme = bits.reduce((sum, bit) => sum + bit.bitValue, 0);
	console.log(decimalSumme)
	td[0].innerHTML = decimalSumme;
	td[1].innerHTML = "0x" + decimalSumme.toString(16);
	td[2].innerHTML = decToISOChar(decimalSumme);

	lampe.style.backgroundColor = byteToRGBColor(decimalSumme);

	function setTacho(value) {
		zeiger.style.transform = `rotate(${(value * (200 / 255)) - 100}deg)`;
		percent.textContent = `${(value * (100 / 255)).toFixed(1)}%`;

		var elem_zeiger = document.querySelector(".line");
		var new_style = document.createElement("style");
		var keyframes_line = "@keyframes pendulum {100% {transform: rotate(" + value * (200 / 255) - 100 + "deg);}}"
		new_style.innerHTML = keyframes_line;
		document.head.appendChild(new_style);
		elem_zeiger.classList.add("line");

	}
	setTacho(decimalSumme);
};


function byteToRGBColor(dec) {
	var red = (dec & 0xe0) >> 5;
	var green = (dec & 0x1c) >> 2;
	var blue = dec & 0x03;

	red = red * (255 / 7);
	green = green * (255 / 7);
	blue = blue * 85;

	return "rgb(" + Math.round(red) + ", " + Math.round(green) + ", " + blue + ")";
}


function decToISOChar(dec) {
	switch (dec) {
		case 0: return "NUL"; break;
		case 1: return "SOH"; break;
		case 2: return "STX"; break;
		case 3: return "ETX"; break;
		case 4: return "EOT"; break;
		case 5: return "ENQ"; break;
		case 6: return "ACK"; break;
		case 7: return "BEL"; break;
		case 8: return "BS"; break;
		case 9: return "HT"; break;
		case 10: return "LF"; break;
		case 11: return "VT"; break;
		case 12: return "FF"; break;
		case 13: return "CR"; break;
		case 14: return "SO"; break;
		case 15: return "SI"; break;
		case 16: return "DLE"; break;
		case 17: return "DC1"; break;
		case 18: return "DC2"; break;
		case 19: return "DC3"; break;
		case 20: return "DC4"; break;
		case 21: return "NAK"; break;
		case 22: return "SYN"; break;
		case 23: return "ETB"; break;
		case 24: return "CAN"; break;
		case 25: return "EM"; break;
		case 26: return "SUB"; break;
		case 27: return "ESC"; break;
		case 28: return "FS"; break;
		case 29: return "GS"; break;
		case 30: return "RS"; break;
		case 31: return "US"; break;
		case 32: return "SP"; break;
		case 127: return "DEL"; break;
		case 128: return "PAD"; break;
		case 129: return "HOP"; break;
		case 130: return "BPH"; break;
		case 131: return "NBH"; break;
		case 132: return "IND"; break;
		case 133: return "NEL"; break;
		case 134: return "SSA"; break;
		case 135: return "ESA"; break;
		case 136: return "HTS"; break;
		case 137: return "HTJ"; break;
		case 138: return "VTS"; break;
		case 139: return "PLD"; break;
		case 140: return "PLU"; break;
		case 141: return "RI"; break;
		case 142: return "SS2"; break;
		case 143: return "SS3"; break;
		case 144: return "DCS"; break;
		case 145: return "PU1"; break;
		case 146: return "PU2"; break;
		case 147: return "STS"; break;
		case 148: return "CCH"; break;
		case 149: return "MW"; break;
		case 150: return "SPA"; break;
		case 151: return "EPA"; break;
		case 152: return "SOS"; break;
		case 153: return "SGCI"; break;
		case 154: return "SCI"; break;
		case 155: return "CSI"; break;
		case 156: return "ST"; break;
		case 157: return "OSC"; break;
		case 158: return "PM"; break;
		case 159: return "APC"; break;
		case 160: return "NBSP"; break;
		case 164: return "€"; break;
		case 166: return "Š"; break;
		case 168: return "š"; break;
		case 173: return "SHY"; break;
		case 180: return "Ž"; break;
		case 184: return "ž"; break;
		case 188: return "Œ"; break;
		case 189: return "œ"; break;
		case 190: return "Ÿ"; break;
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
	for (let i = 0; i <= 255; i++) {
		isoTabelle.innerHTML += `<tr>
									<td class="board-right-body">`+ isoChar(i) + `</td>
									<td class="board-right-body">`+ decToBin(i) + `</td>
									<td class="board-right-body">`+ i + `</td>
									<td class="board-right-body">`+ zeichenName(i) + `</td>
								</tr>`;
	}
}

ertelleISO_Tabelle();
start();