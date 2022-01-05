const apiKey = 'pk.eyJ1IjoiZ3JpbWNvcnBzZSIsImEiOiJja3Q2Z2UzMHcwaHV3MnZqcGFlOXc0Mzk4In0.m89TNNjiT2HlFa7y9irgeg';
const mymap = L.map('map',  {zoomControl: false}).setView([47.10238969424305, 15.42141136934842], 13);

new L.Control.Zoom({position: 'topright'}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);


let fus1_b =`
<h3>Andritzer Reichsstraße 25A</h3>
<div class="video-container">
    <div class="video">
        <!--<video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten01.mp4" autoplay controls></video>-->
        <iframe width="300" src="https://www.youtube.com/embed/tgbNymZ7vqY?modestbranding=1&showinfo=0" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    </div>
</div>
`

let fus2_b =`
<h3>Murauen Nahe Weinzödlbrücke</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten02.mp4" autoplay controls></video>
    </div>
</div>
`

let fus3_b =`
<h3>MFA-Areal</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten03.mp4" autoplay controls></video>
    </div>
</div>
`

let fus4_b =`
<h3>Statteggerstraße 41</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten04.mp4" autoplay controls></video>
    </div>
</div>
`

let fus5_b =`
<h3>Statteggerstraße 2</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten05.mp4" autoplay controls></video>
    </div>
</div>
`

let fus6_b =`
<h3>Statteggerstraße 49</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten06.mp4" autoplay controls></video>
    </div>
</div>
`

let fus7_b =`
<h3>Radegunder Straße 29</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten07.mp4" autoplay controls></video>
    </div>
</div>
`

let fus8_b =`
<h3>St.-Veiter-Straße 65</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten08.mp4" autoplay controls></video>
    </div>
</div>
`

let fus9_b =`
<h3>Rannachstraße 9</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten09.mp4" autoplay controls></video>
    </div>
</div>
`

let fus10_b =`
<h3>Andritzer Reichsstraße 172</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten10.mp4" autoplay controls></video>
    </div>
</div>
`

let fus11_b =`
<h3>Andritzer Reichsstraße 138</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten11.mp4" autoplay controls></video>
    </div>
</div>
`

let fus12_b =`
<h3>Andritzer Reichsstraße 37A</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten12.mp4" autoplay controls></video>
    </div>
</div>
`

let fus13_b =`
<h3>Andritzer Reichsstraße 28</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten13.mp4" autoplay controls></video>
    </div>
</div>
`

let fus14_b =`
<h3>Nordberggasse ca.</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten14.mp4" autoplay controls></video>
    </div>
</div>
`

let fus15_b =`
<h3>Plickweg</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten15.mp4" autoplay controls></video>
    </div>
</div>
`

let fus16_b =`
<h3>Gabriachtal</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten16.mp4" autoplay controls></video>
    </div>
</div>
`

let fus17_b =`
<h3>Andritzer Reichsstraße 161</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/freizeitundsport/Freizeitverhalten17.mp4" autoplay controls></video>
    </div>
</div>
`

// Freizeitgestaltung und Sport
var fus1 = L.marker([47.10231042161, 15.4245716984655]).bindPopup(fus1_b);
var fus2 = L.marker([47.106406151022675, 15.402008196611446]).bindPopup(fus2_b);
var fus3 = L.marker([47.107917810841194, 15.421622121739384]).bindPopup(fus3_b);
var fus4 = L.marker([47.11299600896821, 15.42301206962953]).bindPopup(fus4_b);
var fus5 = L.marker([47.106575109019126, 15.420875584256244]).bindPopup(fus5_b);
var fus6 = L.marker([47.113724002638754, 15.423533569629521]).bindPopup(fus6_b);
var fus7 = L.marker([47.10774161577057, 15.427211184974652]).bindPopup(fus7_b);
var fus8 = L.marker([47.113988899180484, 15.413543569629535]).bindPopup(fus8_b);
var fus9 = L.marker([47.116623695195976, 15.410873998465929]).bindPopup(fus9_b);
var fus10 = L.marker([47.1096246157156, 15.402217642647269]).bindPopup(fus10_b);
var fus11 = L.marker([47.11255959539982, 15.407338184974758]).bindPopup(fus11_b);
var fus12 = L.marker([47.10391868239123, 15.421178451555422]).bindPopup(fus12_b);
var fus13 = L.marker([47.10223489635806, 15.425895155528043]).bindPopup(fus13_b);
var fus14 = L.marker([47.10415014320223, 15.429356696611334]).bindPopup(fus14_b);
var fus15 = L.marker([47.1165433430677, 15.404322399489178]).bindPopup(fus15_b);
var fus16 = L.marker([47.11540820569971, 15.415164314764933]).bindPopup(fus16_b);
var fus17 = L.marker([47.11158468617597, 15.404151169629477]).bindPopup(fus17_b);

fus = [fus1, fus2, fus3, fus4, fus5, fus6, fus7, fus8, fus9, fus10, fus11,
    fus12, fus13, fus14, fus15, fus16, fus17];


let aus1_b =`
<h3>Grazer Straße 36b</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/architektur/Wohnbau_1.mp4" autoplay controls></video>
    </div>
</div>
`

let aus2_b =`
<h3>Viktor-Kaplan-Gasse 25</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/architektur/Wohnbau_2.mp4" autoplay controls></video>
    </div>
</div>
`

let aus3_b =`
<h3>Sankt-Gotthard-Straße 48</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/architektur/Wohnbau_3.mp4" autoplay controls></video>
    </div>
</div>
`

let aus4_b =`
<h3>Rotmoosweg</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/architektur/Wohnbau_4.mp4" autoplay controls></video>
    </div>
</div>
`

let aus5_b =`
<h3>Strasserhofweg</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/architektur/Wohnbau_5.mp4" autoplay controls></video>
    </div>
</div>
`

let aus6_b =`
<h3>St. Veiter Anger 8</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/architektur/Wohnbau_6.mp4" autoplay controls></video>
    </div>
</div>
`

let aus7_b =`
<h3>Andritzer Reichsstraße 57</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/architektur/Wohnbau_7.mp4" autoplay controls></video>
    </div>
</div>
`

let aus8_b =`
<h3>Andritzer Endhaltestelle</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/architektur/Wohnbau_8.mp4" autoplay controls></video>
    </div>
</div>
`

// Architektur und Stadtplanung
var aus1 = L.marker([47.10032621548987, 15.419380940792836]).bindPopup(aus1_b);
var aus2 = L.marker([47.10287261164761, 15.416865054283905]).bindPopup(aus2_b);
var aus3 = L.marker([47.112881301307844, 15.406866669629501]).bindPopup(aus3_b);
var aus4 = L.marker([47.111828794673166, 15.433904605211357]).bindPopup(aus4_b);
var aus5 = L.marker([47.11865699421076, 15.425955054284463]).bindPopup(aus5_b);
var aus6 = L.marker([47.11179291210432, 15.415155469629427]).bindPopup(aus6_b);
var aus7 = L.marker([47.10617731418391, 15.420569540548902]).bindPopup(aus7_b);
var aus8 = L.marker([47.103075468437225, 15.421676453259664]).bindPopup(aus8_b);

aus = [aus1, aus2, aus3, aus4, aus5, aus6, aus7, aus8];

let gug1_b =`
<h3>Andritzer Reichsstraße 114, gegenüber</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/garten/Garten und Grünraum 01.mp4" autoplay controls></video>
    </div>
</div>
`

// Gärten und Grünraum
var gug1 = L.marker([47.11075472147901, 15.410586602107857]).bindPopup(gug1_b);

gug = [gug1];



let kur1_b =`
<h3>zwischen Haberlandtweg und Geißlergasse</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/kirche/Kirche und Religion 01.mp4" autoplay controls></video>
    </div>
</div>
`

let kur2_b =`
<h3>St.-Veiter-Straße 86</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/kirche/Kirche und Religion 02.mp4" autoplay controls></video>
    </div>
</div>
`

let kur3_b =`
<h3>Friedhof</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/kirche/Kirche und Religion 03.mp4" autoplay controls></video>
    </div>
</div>
`

let kur4_b =`
<h3>Andritzer Reichsstraße 160</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/kirche/Kirche und Religion 04.mp4" autoplay controls></video>
    </div>
</div>
`

// Kirche und Religion
var kur1 = L.marker([47.10495427883876, 15.42240213664759]).bindPopup(kur1_b);
var kur2 = L.marker([47.116497575574996, 15.412247094119333]).bindPopup(kur2_b);
var kur3 = L.marker([47.115798630102844, 15.41081810757493]).bindPopup(kur3_b);
var kur4 = L.marker([47.11163724394448, 15.403438844201572]).bindPopup(kur4_b);

kur = [kur1, kur2, kur3, kur4];



let nuz1_b =`
<h3>Andritzer Reichsstraße 57</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/ns/NS-Zeit und 2. Weltkrieg 01.mp4" autoplay controls></video>
    </div>
</div>
`

let nuz2_b =`
<h3>Andritzer Reichsstraße 56</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/ns/NS-Zeit und 2. Weltkrieg 02.mp4" autoplay controls></video>
    </div>
</div>
`

let nuz3_b =`
<h3>Andritzer Reichsstraße, Nahe Sportplatz</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/ns/NS-Zeit und 2. Weltkrieg 03.mp4" autoplay controls></video>
    </div>
</div>
`

let nuz4_b =`
<h3>Gabriachtal,  Nahe Feldwirt</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/ns/NS-Zeit und 2. Weltkrieg 04.mp4" autoplay controls></video>
    </div>
</div>
`

let nuz5_b =`
<h3>Andritzer Reichsstraße, Nahe Sportplatz</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/ns/NS-Zeit und 2. Weltkrieg 05.mp4" autoplay controls></video>
    </div>
</div>
`

let nuz6_b =`
<h3>Viktor-Kaplan-Gasse 25</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/ns/NS-Zeit und 2. Weltkrieg 06.mp4" autoplay controls></video>
    </div>
</div>
`
// Nationalsozialismus und Zeiter Weltkrieg
var nuz1 = L.marker([47.10617731418391, 15.420569540548902]).bindPopup(nuz1_b);
var nuz2 = L.marker([47.10525686548251, 15.420965446004558]).bindPopup(nuz2_b);
var nuz3 = L.marker([47.109355337220535, 15.411566939511049]).bindPopup(nuz3_b);
var nuz4 = L.marker([47.11445740654081, 15.414267923996773]).bindPopup(nuz4_b);
var nuz5 = L.marker([47.10880947798625, 15.411051728990822]).bindPopup(nuz5_b);
var nuz6 = L.marker([47.10287261164761, 15.416865054283905]).bindPopup(nuz6_b);

nuz = [nuz1, nuz2, nuz3, nuz4, nuz5, nuz6];


let oee1_b =`
<h3>St. Veiter Straße 51</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/offentliche/Öffentl. Einrichtungen 01.mp4" autoplay controls></video>
    </div>
</div>
`
let oee2_b =`
<h3>Andritzer Reichsstraße/Ecke Stattegger Straße</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/offentliche/Öffentl. Einrichtungen 02.mp4" autoplay controls></video>
    </div>
</div>
`
let oee3_b =`
<h3>Andritzer Reichsstraße 28</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/offentliche/Öffentl. Einrichtungen 03.mp4" autoplay controls></video>
    </div>
</div>
`
let oee4_b =`
<h3>Grazer Straße 45</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/offentliche/Öffentl. Einrichtungen 04.mp4" autoplay controls></video>
    </div>
</div>
`
// Öffentliche Einrichtungen
var oee1 = L.marker([47.113355546820635, 15.416179612548316]).bindPopup(oee1_b);
var oee2 = L.marker([47.106579008585314, 15.420393754195867]).bindPopup(oee2_b);
var oee3 = L.marker([47.102065111250404, 15.42544651581415]).bindPopup(oee3_b);
var oee4 = L.marker([47.103452790673664, 15.421144306516052]).bindPopup(oee4_b);

oee = [oee1, oee2, oee3, oee4];


let sch1_b =`
<h3>Andritzer Reichsstraße 35c</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/schulzeit/Schulzeit 01.mp4" autoplay controls></video>
    </div>
</div>
`
let sch2_b =`
<h3>Prohaskagasse 9</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/schulzeit/Schulzeit 02.mp4" autoplay controls></video>
    </div>
</div>
`
let sch3_b =`
<h3>St.-Veiter-Straße 76</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/schulzeit/Schulzeit 03.mp4" autoplay controls></video>
    </div>
</div>
`
// Schulzeit
var sch1 = L.marker([47.102283552264915, 15.422158220227406]).bindPopup(sch1_b);
var sch2 = L.marker([47.10757198349785, 15.423590205462203]).bindPopup(sch2_b);
var sch3 = L.marker([47.11515226023562, 15.41242894797788]).bindPopup(sch3_b);

sch = [sch1, sch2, sch3];

let vum1_b =`
<h3>St. Gotthard Straße/St.-Veiter-Straße</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 01.mp4" autoplay controls></video>
    </div>
</div>
`
let vum2_b =`
<h3>St.-Veiter-Anger/Nepomukgasse</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 02.mp4" autoplay controls></video>
    </div>
</div>
`
let vum3_b =`
<h3>Annagraben</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 03.mp4" autoplay controls></video>
    </div>
</div>
`
let vum4_b =`
<h3>Grabenstraße 222</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 04.mp4" autoplay controls></video>
    </div>
</div>
`
let vum5_b =`
<h3>Andritzer Reichsstraße 57</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 05.mp4" autoplay controls></video>
    </div>
</div>
`
let vum6_b =`
<h3>Andritzer Hauptplatz</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 06.mp4" autoplay controls></video>
    </div>
</div>
`
let vum7_b =`
<h3>Weinzöttlstraße, Bereich Unterführung</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 07.mp4" autoplay controls></video>
    </div>
</div>
`
let vum8_b =`
<h3>St. Gotthard Straße Ende</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 08.mp4" autoplay controls></video>
    </div>
</div>
`
let vum9_b =`
<h3>Andritzer Reichsstraße 57-Nähe</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 09.mp4" autoplay controls></video>
    </div>
</div>
`
let vum10_b =`
<h3>Am Andritzbach</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 10.mp4" autoplay controls></video>
    </div>
</div>
`
let vum11_b =`
<h3>Andritzer Hauptplatz</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 11.mp4" autoplay controls></video>
    </div>
</div>
`
let vum12_b =`
<h3>St.-Veiter-Straße 104</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/verkehr/Verkehr und Mobilität 12.mp4" autoplay controls></video>
    </div>
</div>
`
// Verkehr und Mobilität
var vum1 = L.marker([47.11410140763248, 15.413243326807258]).bindPopup(vum1_b);
var vum2 = L.marker([47.112067402631176, 15.417814169833592]).bindPopup(vum2_b);
var vum3 = L.marker([47.12456820647211, 15.441886095508917]).bindPopup(vum3_b);
var vum4 = L.marker([47.09475472941888, 15.423262669108917]).bindPopup(vum4_b);
var vum5 = L.marker([47.105909004172, 15.420551679471986]).bindPopup(vum5_b);
var vum6 = L.marker([47.10278412641859, 15.421806509775369]).bindPopup(vum6_b);
var vum7 = L.marker([47.095332253241956, 15.421434631689234]).bindPopup(vum7_b);
var vum8 = L.marker([47.112488309168654, 15.407089513679148]).bindPopup(vum8_b);
var vum9 = L.marker([47.105806689527796, 15.420647562595853]).bindPopup(vum9_b);
var vum10 = L.marker([47.10492672545695, 15.41781783201194]).bindPopup(vum10_b);
var vum11 = L.marker([47.10326835192852, 15.42210486784492]).bindPopup(vum11_b);
var vum12 = L.marker([47.11785758723163, 15.412063498186697]).bindPopup(vum12_b);

vum = [vum1, vum2, vum3, vum4, vum5, vum6, vum7, vum8, vum9, vum10, vum11, vum12];


let wir1_b =`
<h3>Am Arlandgrund</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 01.mp4" autoplay controls></video>
    </div>
</div>
`
let wir2_b =`
<h3>Andritzer Reichsstraße 57-Nähe</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 02.mp4" autoplay controls></video>
    </div>
</div>
`
let wir3_b =`
<h3>St.-Gotthard-Straße 1</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 03.mp4" autoplay controls></video>
    </div>
</div>
`
let wir4_b =`
<h3>Radegunder Straße 2 und Kreuzungsbereich</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 04.mp4" autoplay controls></video>
    </div>
</div>
`
let wir5_b =`
<h3>Andritzer Reichsstraße 44</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 05.mp4" autoplay controls></video>
    </div>
</div>
`
let wir6_b =`
<h3>Andritzer Reichsstraße 51</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 06.mp4" autoplay controls></video>
    </div>
</div>
`
let wir7_b =`
<h3>Andritzer Reichsstraße 138</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 07.mp4" autoplay controls></video>
    </div>
</div>
`
let wir8_b =`
<h3>St. Veit, verschiedene Adressen</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 08.mp4" autoplay controls></video>
    </div>
</div>
`
let wir9_b =`
<h3>Andritzer Reichsstraße, Golfplatz</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 09.mp4" autoplay controls></video>
    </div>
</div>
`
let wir10_b =`
<h3>Weinzöttstraße 15 ca.</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 10.mp4" autoplay controls></video>
    </div>
</div>
`
let wir11_b =`
<h3>Ursprungweg 70</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 11.mp4" autoplay controls></video>
    </div>
</div>
`
let wir12_b =`
<h3>Weinzödlbrücke mit Schleppbahn</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 12.mp4" autoplay controls></video>
    </div>
</div>
`
let wir13_b =`
<h3>Stattegger Straße 5-7</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 13.mp4" autoplay controls></video>
    </div>
</div>
`
let wir14_b =`
<h3>Pedrettogasse/Baumgasse</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 14.mp4" autoplay controls></video>
    </div>
</div>
`
let wir15_b =`
<h3>Andritzbach im Bereich der MFA</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 15.mp4" autoplay controls></video>
    </div>
</div>
`
let wir16_b =`
<h3>Andritzer Reichsstraße 66</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 16.mp4" autoplay controls></video>
    </div>
</div>
`
let wir17_b =`
<h3>Ziegelstraße 20 ca</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wirtschaft/Wirtschaft 17.mp4" autoplay controls></video>
    </div>
</div>
`

// Wirtschaft
var wir1 = L.marker([47.09901140218748, 15.41494228527412]).bindPopup(wir1_b);
var wir2 = L.marker([47.106612259091044, 15.419984857939758]).bindPopup(wir2_b);
var wir3 = L.marker([47.113987649819286, 15.413294579994579]).bindPopup(wir3_b);
var wir4 = L.marker([47.1018221372248, 15.426052541437093]).bindPopup(wir4_b);
var wir5 = L.marker([47.104129946172336, 15.421490486564037]).bindPopup(wir5_b);
var wir6 = L.marker([47.105569731789004, 15.420379509617462]).bindPopup(wir6_b);
var wir7 = L.marker([47.112459581741795, 15.407278468018262]).bindPopup(wir7_b);
var wir8 = L.marker([47.11642309303267, 15.411562339430686]).bindPopup(wir8_b);
var wir9 = L.marker([47.11177822864794, 15.407116771841396]).bindPopup(wir9_b);
var wir10 = L.marker([47.103077143279684, 15.414613920832412]).bindPopup(wir10_b);
var wir11 = L.marker([47.11374965742488, 15.426116313811137]).bindPopup(wir11_b);
var wir12 = L.marker([47.10670753100572, 15.401768227906551]).bindPopup(wir12_b);
var wir13 = L.marker([47.10730458884316, 15.42193131980104]).bindPopup(wir13_b);
var wir14 = L.marker([47.11049434044689, 15.418330854663516]).bindPopup(wir14_b);
var wir15 = L.marker([47.11082766606424, 15.42171334967622]).bindPopup(wir15_b);
var wir16 = L.marker([47.109483889770644, 15.420501262880421]).bindPopup(wir16_b);
var wir17 = L.marker([47.100785483371055, 15.432403222680898]).bindPopup(wir17_b);

wir = [wir1, wir2, wir3, wir4, wir5, wir6, wir7, wir8, wir9, wir10, wir11, wir12, wir13, wir14, wir15, wir16, wir17];


let woh1_b =`
<h3>Statteggerstraße 5-7: Holzholen im Nachthemd</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 01.mp4" autoplay controls></video>
    </div>
</div>
`
let woh2_b =`
<h3>Andritzer Reichsstraße 57: als es noch keine Zentralheizung gab</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 02.mp4" autoplay controls></video>
    </div>
</div>
`
let woh3_b =`
<h3>Viktor-Kaplan-Gasse 25: der so genannte Sparherd</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 03.mp4" autoplay controls></video>
    </div>
</div>
`
let woh4_b =`
<h3>Andritzer Reichsstraße 128: Ein Bombentrichter als Müllhalde</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 04.mp4" autoplay controls></video>
    </div>
</div>
`
let woh5_b =`
<h3>Stattegger Straße/Andritzer Reichsstraße: als kaum jemand schon ein Telefon hatte</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 05.mp4" autoplay controls></video>
    </div>
</div>
`
let woh6_b =`
<h3>St.-Veiter-Straße 65: Zum Telefonieren beim Feldwirt</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 06.mp4" autoplay controls></video>
    </div>
</div>
`
let woh7_b =`
<h3>Beim Feldwirt: Wäschewasche im Gabriachbach</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 07.mp4" autoplay controls></video>
    </div>
</div>
`
let woh8_b =`
<h3>Stattegger Straße: Wäschewaschen im Andritzbach</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 08.mp4" autoplay controls></video>
    </div>
</div>
`
let woh9_b =`
<h3>Andritzer Reichsstraße 57: vom Plumpsklo und "Häuslräumern"</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 09.mp4" autoplay controls></video>
    </div>
</div>
`
let woh10_b =`
<h3>Statteggerstraße 5-7: Klo am Gang</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 10.mp4" autoplay controls></video>
    </div>
</div>
`
let woh11_b =`
<h3>Andritzer Reichsstraße 138: als Fäkalien noch am Feld als Dünger landeten</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 11.mp4" autoplay controls></video>
    </div>
</div>
`
let woh12_b =`
<h3>Falkenweg: die Dennig-Quelle</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="resources/videos/wohnverhaltniss/Wohnverhältnisse 12.mp4" autoplay controls></video>
    </div>
</div>
`


// Wirtschaft
var woh1 = L.marker([47.10760003691229, 15.42196627697922]).bindPopup(woh1_b);
var woh2 = L.marker([47.10601088861423, 15.42043538230511]).bindPopup(woh2_b);
var woh3 = L.marker([47.1027359281071, 15.416941859747736]).bindPopup(woh3_b);
var woh4 = L.marker([47.11211264525019, 15.408957060824621]).bindPopup(woh4_b);
var woh5 = L.marker([47.10633342862376, 15.420767718741887]).bindPopup(woh5_b);
var woh6 = L.marker([47.11395510027458, 15.413429881989153]).bindPopup(woh6_b);
var woh7 = L.marker([47.11412883702475, 15.41397908062604]).bindPopup(woh7_b);
var woh8 = L.marker([47.107523774077066, 15.421761288272407]).bindPopup(woh8_b);
var woh9 = L.marker([47.105902593364156, 15.420410233720908]).bindPopup(woh9_b);
var woh10 = L.marker([47.10708426947951, 15.421444165975817]).bindPopup(woh10_b);
var woh11 = L.marker([47.11248092778081, 15.407304496396504]).bindPopup(woh11_b);
var woh12 = L.marker([47.115888665071815, 15.402141099945242]).bindPopup(woh12_b);

woh = [woh1, woh2, woh3, woh4, woh5, woh6, woh7, woh8, woh9, woh10, woh11, woh12];

// create group and add markers
var currentGroup = L.layerGroup(fus).addTo(mymap);



// function to add layer to map
function addLayer(group) {
    if (currentGroup != group) {
        currentGroup.clearLayers();
        currentGroup = L.layerGroup(group);
        currentGroup.addTo(mymap);
    }
}

function openBubble(mark) {
    mark.openPopup();
}

//fus1.bindPopup(bubble2).openPopup();;






// todo adapt function to work
//function showMarkers(layer) {
//    if currentLayer != layers:
//        currentLayer.clearLayers();
//        layer.addTo(map)
        // todo open first bubble
//}


// Add popup

//marker2.bindPopup(bubble2);

// Add Polygon
const polygon = L.polygon([
  [47.109690378493866, 15.46287305253883],
  [47.102095743083275, 15.447938513860995],
  [47.095785529655075, 15.446050238855753],
  [47.0970710041553, 15.443131995665828],
  [47.096136116687255, 15.435922218373081],
  [47.09333135580022, 15.436265541101308],
  [47.09087706884326, 15.43077237744969],
  [47.094500024122475, 15.4230476160646],
  [47.09239640267678, 15.42030103423879],
  [47.09216266183121, 15.419442727418225],
  [47.098781, 15.413350],
  [47.108138753510026, 15.397529491490369],
  [47.10759290177646, 15.385155908087043],
  [47.1101777186816, 15.380992340700068],
  [47.112105397583655, 15.37712996000752],
  [47.118586836061496, 15.373126035333808],
  [47.113303, 15.378960],
  [47.113070, 15.392350],
  [47.125569, 15.399560],
  [47.134795, 15.399560],
  [47.131525, 15.413292],
  [47.127204, 15.416382],
  [47.127904, 15.424794],
  [47.126386, 15.424965],
  [47.124985, 15.428399],
  [47.126853, 15.430115],
  [47.127788, 15.438355],
  [47.126853, 15.446251],
  [47.130591, 15.456551],
  [47.130941, 15.464963],
  [47.128021, 15.467881],
  [47.126386, 15.477837],
  [47.123595, 15.473464],
  [47.120780, 15.473202],
  [47.119845, 15.469254],
  ], {
  color:'blue',
  fillColor:'blue',
  fillOpacity:0.2
}).addTo(mymap)
