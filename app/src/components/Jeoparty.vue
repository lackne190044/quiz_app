<template>
<body style="background-color: #1d1d2c; color: #f7f4e9; font-family:verdana">

<div class="grid-container">
	<div class="kat1">Kategorie 1</div>
	<div class="kat2">Kategorie 2</div>
	<div class="kat3">Kategorie 3</div>
	<div class="kat4">Kategorie 4</div>
	<div class="kat5">Kategorie 5</div>
  	<div class="frage1"><button class="button blue">	Frage</button></div>
	<div class="frage2"><button class="button green">	Frage</button></div>
	<div class="frage3"><button class="button orange">	Frage</button></div>
	<div class="frage4"><button class="button red">		Frage</button></div>
	<div class="frage5"><button class="button yellow">	Frage</button></div>
	<div class="frage6"><button class="button blue">	Frage</button></div>
	<div class="frage7"><button class="button green">	Frage</button></div>
	<div class="frage8"><button class="button orange">	Frage</button></div>
	<div class="frage9"><button class="button red">		Frage</button></div>
	<div class="frage10"><button class="button yellow">	Frage</button></div>
	<div class="frage11"><button class="button blue">	Frage</button></div>
	<div class="frage12"><button class="button green">	Frage</button></div>
	<div class="frage13"><button class="button orange">	Frage</button></div>
	<div class="frage14"><button class="button red">	Frage</button></div>
	<div class="frage15"><button class="button yellow">	Frage</button></div>
	<div class="frage16"><button class="button blue">	Frage</button></div>
	<div class="frage17"><button class="button green">	Frage</button></div>
	<div class="frage18"><button class="button orange">	Frage</button></div>
	<div class="frage19"><button class="button red">	Frage</button></div>
	<div class="frage20"><button class="button yellow">	Frage</button></div>
	<div class="frage21"><button class="button blue">	Frage</button></div>
	<div class="frage22"><button class="button green">	Frage</button></div>
	<div class="frage23"><button class="button orange">	Frage</button></div>
	<div class="frage24"><button class="button red">	Frage</button></div>
	<div class="frage25"><button class="button yellow">	Frage</button></div>
</div>

</body>
</template>

<style>
.green {background-color: #438945;} /*Grün*/
.blue {background-color: #3cbcc3;} /*Blau*/
.red {background-color: #e40c2b;} /*Rot*/
.yellow {background-color: #5626c4;} /*Gelb*/
.orange {background-color: #FFA500;} /*Orange*/
	
.item1 { grid-area: frage1; }
.item2 { grid-area: frage2; }
.item3 { grid-area: frage3; }
.item4 { grid-area: frage4; }
.item5 { grid-area: frage5; }
.item6 { grid-area: frage6; }
.item7 { grid-area: frage7; }
.item8 { grid-area: frage8; }
.item9 { grid-area: frage9; }
.item10 { grid-area: frage10; }
.item11 { grid-area: frage11; }
.item12 { grid-area: frage12; }
.item13 { grid-area: frage13; }
.item14 { grid-area: frage14; }
.item15 { grid-area: frage15; }
.item16 { grid-area: frage16; }
.item17 { grid-area: frage17; }
.item18 { grid-area: frage18; }
.item19 { grid-area: frage19; }
.item20 { grid-area: frage20; }
.item21 { grid-area: frage21; }
.item22 { grid-area: frage22; }
.item23 { grid-area: frage23; }
.item24 { grid-area: frage24; }
.item25 { grid-area: frage25; }
.item26 { grid-area: kat1; }
.item27 { grid-area: kat2; }
.item28 { grid-area: kat3; }
.item29 { grid-area: kat4; }
.item30 { grid-area: kat5; }

.grid-container {
	  display: grid;
	  grid-template-areas:
		'kat1 kat2 kat3 kat4 kat5'
		'frage1 frage2 frage3 frage4 frage5'
		'frage6 frage7 frage8 frage9 frage10'
		'frage11 frage12 frage13 frage14 frage15'
		'frage16 frage17 frage18 frage19 frage20'
		'frage21 frage22 frage23 frage24 frage25';
	  gap: 10px;
	  
	  padding: 10px;
  
}

.grid-container > div {
  	
  	text-align: center;
  	font-size: 30px;
}
	
.button {		
	border: hidden;
	 border-radius: 10px;
	 padding: 8% 25%;
	 text-align: center;
	 text-decoration: none;
	 display: inline-block;
	 font-size: 30px;
	 margin: 4px 4px;
	 cursor: pointer;
	 transition-duration: 1s;
	font-family:verdana;
}
</style>