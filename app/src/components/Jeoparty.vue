// template made by Taucher Thomas
// Reworked by Lackner Lukas for use with vuejs

<script lang="ts">
	export default {
		props: ['categories']
	}
</script>

<template>
<body>
<div class="grid-container">
	<div v-for="(item, index) in categories">
		<div :class=" 'kat' + index">{{ item }}</div>
	</div>
  	<div class="item1"><a class="button blue" href="/question">	question</a></div>
	<div class="item2"><button class="button blue">	question</button></div>
	<div class="item3"><button class="button blue">	question</button></div>
	<div class="item4"><button class="button blue">	question</button></div>
	<div class="item5"><button class="button blue">	question</button></div>
	<div class="item6"><button class="button green">	question</button></div>
	<div class="item7"><button class="button green">	question</button></div>
	<div class="item8"><button class="button green">	question</button></div>
	<div class="item9"><button class="button green">	question</button></div>
	<div class="item10"><button class="button green">	question</button></div>
	<div class="item11"><button class="button orange">	question</button></div>
	<div class="item12"><button class="button orange">	question</button></div>
	<div class="item13"><button class="button orange">	question</button></div>
	<div class="item14"><button class="button orange">	question</button></div>
	<div class="item15"><button class="button orange">	question</button></div>
	<div class="item16"><button class="button red">		question</button></div>
	<div class="item17"><button class="button red">		question</button></div>
	<div class="item18"><button class="button red">	question</button></div>
	<div class="item19"><button class="button red">	question</button></div>
	<div class="item20"><button class="button red">	question</button></div>
	<div class="item21"><button class="button dark_blue">	question</button></div>
	<div class="item22"><button class="button dark_blue">	question</button></div>
	<div class="item23"><button class="button dark_blue">	question</button></div>
	<div class="item24"><button class="button dark_blue">	question</button></div>
	<div class="item25"><button class="button dark_blue">	question</button></div>
</div>

</body>
</template>

<style>
.green {background-color: #438945;} /*Grün*/
.blue {background-color: #3cbcc3;} /*Blau*/
.red {background-color: #e40c2b;} /*Rot*/
.dark_blue {background-color: #5626c4;} /*Gelb*/
.orange {background-color: #FFA500;} /*Orange*/
	
.item1 { grid-area: question1; }
.item2 { grid-area: question2; }
.item3 { grid-area: question3; }
.item4 { grid-area: question4; }
.item5 { grid-area: question5; }
.item6 { grid-area: question6; }
.item7 { grid-area: question7; }
.item8 { grid-area: question8; }
.item9 { grid-area: question9; }
.item10 { grid-area: question10; }
.item11 { grid-area: question11; }
.item12 { grid-area: question12; }
.item13 { grid-area: question13; }
.item14 { grid-area: question14; }
.item15 { grid-area: question15; }
.item16 { grid-area: question16; }
.item17 { grid-area: question17; }
.item18 { grid-area: question18; }
.item19 { grid-area: question19; }
.item20 { grid-area: question20; }
.item21 { grid-area: question21; }
.item22 { grid-area: question22; }
.item23 { grid-area: question23; }
.item24 { grid-area: question24; }
.item25 { grid-area: question25; }
.item26 { grid-area: kat1; }
.item27 { grid-area: kat2; }
.item28 { grid-area: kat3; }
.item29 { grid-area: kat4; }
.item30 { grid-area: kat5; }

.grid-container {
	  display: grid;
	  grid-template-areas:
		'kat1 kat2 kat3 kat4 kat5'
		'question1 question6 question11 question16 question21'
		'question2 question7 question12 question17 question22'
		'question3 question8 question13 question18 question23'
		'question4 question9 question14 question19 question24'
		'question5 question10 question15 question20 question25';
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