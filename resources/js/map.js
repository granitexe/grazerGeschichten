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

//let bubble1 =

let bubble2 =`
<h3>Andritz Spar</h3>
<div class="video-container">
    <div class="video">
        <video width="300" src="video.mp4" autoplay controls></video>
    </div>
</div>
`

// Freizeitgestaltung und Sport
var fus1 = L.marker([47.10231042161, 15.4245716984655]).bindPopup(bubble2);
var fus2 = L.marker([47.106406151022675, 15.402008196611446]).bindPopup(bubble2);
var fus3 = L.marker([47.107917810841194, 15.421622121739384]).bindPopup(bubble2);
var fus4 = L.marker([47.11299600896821, 15.42301206962953]).bindPopup(bubble2);
var fus5 = L.marker([47.106575109019126, 15.420875584256244]).bindPopup(bubble2);
var fus6 = L.marker([47.113724002638754, 15.423533569629521]).bindPopup(bubble2);
var fus7 = L.marker([47.10774161577057, 15.427211184974652]).bindPopup(bubble2);
var fus8 = L.marker([47.113988899180484, 15.413543569629535]).bindPopup(bubble2);
var fus9 = L.marker([47.116623695195976, 15.410873998465929]).bindPopup(bubble2);
var fus10 = L.marker([47.1096246157156, 15.402217642647269]).bindPopup(bubble2);
var fus11 = L.marker([47.11255959539982, 15.407338184974758]).bindPopup(bubble2);
var fus12 = L.marker([47.10391868239123, 15.421178451555422]).bindPopup(bubble2);
var fus13 = L.marker([47.10223489635806, 15.425895155528043]).bindPopup(bubble2);
var fus14 = L.marker([47.10415014320223, 15.429356696611334]).bindPopup(bubble2);
var fus15 = L.marker([47.1165433430677, 15.404322399489178]).bindPopup(bubble2);
var fus16 = L.marker([47.11540820569971, 15.415164314764933]).bindPopup(bubble2);
var fus17 = L.marker([47.11158468617597, 15.404151169629477]).bindPopup(bubble2);

fus = [fus1, fus2, fus3, fus4, fus5, fus6, fus7, fus8, fus9, fus10, fus11,
    fus12, fus13, fus14, fus15, fus16, fus17];

// Architektur und Stadtplanung
var aus1 = L.marker([47.10032621548987, 15.419380940792836]);
var aus2 = L.marker([47.10287261164761, 15.416865054283905]);
var aus3 = L.marker([47.112881301307844, 15.406866669629501]);
var aus4 = L.marker([47.111828794673166, 15.433904605211357]);
var aus5 = L.marker([47.11865699421076, 15.425955054284463]);
var aus6 = L.marker([47.11179291210432, 15.415155469629427]);
var aus7 = L.marker([47.10617731418391, 15.420569540548902]);
var aus8 = L.marker([47.103075468437225, 15.421676453259664]);

aus = [aus1, aus2, aus3, aus4, aus5, aus6, aus7, aus8];

// Gärten und Grünraum
var gug1 = L.marker([47.11075472147901, 15.410586602107857]);

gug = [gug1];

// Kirche und Religion
var kur1 = L.marker([47.10495427883876, 15.42240213664759]);
var kur2 = L.marker([47.116497575574996, 15.412247094119333]);
var kur3 = L.marker([47.115798630102844, 15.41081810757493]);
var kur4 = L.marker([47.11163724394448, 15.403438844201572]);

kur = [kur1, kur2, kur3, kur4];

// Nationalsozialismus und Zeiter Weltkrieg
var nuz1 = L.marker([47.10617731418391, 15.420569540548902]);
var nuz2 = L.marker([47.10525686548251, 15.420965446004558]);
var nuz3 = L.marker([47.109355337220535, 15.411566939511049]);
var nuz4 = L.marker([47.11445740654081, 15.414267923996773]);
var nuz5 = L.marker([47.10880947798625, 15.411051728990822]);
var nuz6 = L.marker([47.10287261164761, 15.416865054283905]);

nuz = [nuz1, nuz2, nuz3, nuz4, nuz5, nuz6];

// Öffentliche Einrichtungen
var oee1 = L.marker([47.113355546820635, 15.416179612548316]);
var oee2 = L.marker([47.106579008585314, 15.420393754195867]);
var oee3 = L.marker([47.102065111250404, 15.42544651581415]);
var oee4 = L.marker([47.103452790673664, 15.421144306516052]);

oee = [oee1, oee2, oee3, oee4];

// Schulzeit
var sch1 = L.marker([47.102283552264915, 15.422158220227406]);
var sch2 = L.marker([47.10757198349785, 15.423590205462203]);
var sch3 = L.marker([47.11515226023562, 15.41242894797788]);

sch = [sch1, sch2, sch3];


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
