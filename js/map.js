//markerss is the layer for all marker points of each projects
var markers = new L.LayerGroup(); 
//polygons is the layer for area boundaries of each projects
var polygons = new L.LayerGroup();
	
		var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
	
		var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

		var map = L.map('map', {
			center: [41.65, -87.45],
			zoom: 11,
			layers: [grayscale]
		});

        //Build Array of project object
        var projectsInfo = [
            {title:"Before the City there was the Sand", imgSrc:"images/design/cardPriviews/1.png", shortDescription:"This design project is part of a research initiative that investigates how to retrofit cities and neighborhoods through green infrastructure to address urban flooding. The research explores the hydro-geologic history of the Chicago-Calumet region and studies how native sub-soils that have been paved-over are an important part of better stormwater design across the area.", url:"design-1-Calumet-City-IL-Before-the-City-there-was-the-Sand"},
            {title:"Return to the Land", imgSrc:"images/design/cardPriviews/2.png", shortDescription:"This 250-acre neighborhood design is part of a research project that investigates how to retrofit cities and neighborhoods through green infrastructure to address urban flooding.", url:"design-2-Midlothian-IL-Return-to-the-Land"},
            {title:"Interface - depave and decompact", imgSrc:"images/design/cardPriviews/3.png", shortDescription:"Interface addresses the condition of impervious surfaces and compacted soil that contribute to significant flooding in the South Side Chicago neighborhoods of Grand Boulevard and Washington Park.", url:"design-3-interface-South-Chicago-Depave-and-Decompact"},
            {title:"Chicago Chinatown<br> Rethinking the Ground in Public Space", imgSrc:"images/design/cardPriviews/5.png", shortDescription:"This project proposes pavement alternatives that greatly increase rainwater absorption, lower urban heat island, and enhance the vibrant food and shopping culture of Chinatown.", url:"design-5-Chicago-Chinatown-Rethinking-the-Ground-in-Public-Space"},
            {title:"Rethinking Calumet Narrative", imgSrc:"images/design/cardPriviews/6.png", shortDescription:"Rethinking Calumet investigates the conditions that have stagnated the region and propose innovative strategies to establish environmental and social systems that work for the people who live there. ", url:"design-6-Rethink-Calumet"},
            {title:"FIELD WORK : <br> INVESTIGATION IN CHICAGO AND THE CALUMET", imgSrc:"images/research/research_2_thumbnail.png", shortDescription:"Our team, guided by Quaternary geologists has been ‘unearthing’ historic soils maps, soil borings, and water well and engineering reports to assemble a more accurate story of the geologic history of the region, and to characterize the soils here today.", url:"research-3-Soils-Fieldwork"},
            {title:"DEPAVE CHICAGO", imgSrc:"images/research/research_5_thumbnail.png", shortDescription:"Depave Chicago is an ongoing design research project aimed at transforming the ground surfaces of post-industrial, infrastructure-intense cities into more ecologically and socially just environments.", url:"research-6-Depave-Chicago"},
            {title:"CHICAGO STREET SURFACE ARE TRIBUTARIES", imgSrc:"images/research/research_6_thumbnail.png", shortDescription:"By redesigning our streets to slow and capture rainwater, we can keep water OUT of the underground system. Water Lab has been investigating a series of surface-based block-wide approaches that keep water of the street pipes.", url:"research-7-Street-Surfaces-Are-Tributaries"},
        ]

        //Customize Popup
        // var customPopup = function(i){
        //     return `<h5>${projectsInfo[i].title}</h5><br/><img src='${projectsInfo[i].imgSrc}' alt='maptime logo gif' width='50px'/><p>${projectsInfo[i].shortDescription}</p><a href='${projectsInfo[i].url}'>View Details</a>`;
        // }
        // var customPopup = `<h5>${projectsInfo[0].title}</h5><br/><img src='${projectsInfo[0].imgSrc}' alt='maptime logo gif' width='50px'/><p>${projectsInfo[0].shortDescription}</p><a href='${projectsInfo[0].url}'>View Details</a>`;
        var customOptions = 
        {
            'maxWidth':300,
            'minWidth':300
        }
        //ADD PROJECT MAKERS
        var projects = [];
        for(var i = 0; i < MARKER_JSON["features"].length;i++) {
            point = MARKER_JSON["features"][i]["geometry"]["coordinates"];
            let customPopup = `<h5>${projectsInfo[i].title}</h5><br/><img src='${projectsInfo[i].imgSrc}' alt='this is an alternative name' width='50px'/><p>${projectsInfo[i].shortDescription}</p><a href='${projectsInfo[i].url}'>View Details</a>`;
            L.circle([point[1], point[0]], 300, {color: 'green',fillColor: 'green',weight:1,fillOpacity: 0.3}).addTo(markers).bindPopup(customPopup,customOptions);
        }

        map.addLayer(markers);

        //ADD PROJECT AREA
        var latlngs = []
        for(var i = 0; i < PLOYGON_JSON["features"].length;i++) {
            var feature = PLOYGON_JSON["features"][i];
            latlngs[i] = [];
            for(var j = 0; j < feature.geometry.coordinates[0].length;j++){
                latlngs[i].push(new L.LatLng(feature.geometry.coordinates[0][j][1],feature.geometry.coordinates[0][j][0]));
            }
            console.log(latlngs[i]);
        }
        var areas = new L.polygon(latlngs, {
            color:'green',
            weight:2,
            smoothFactor:0
        }).addTo(polygons).bindPopup('This is a preview!');
        // map.addLayer(areas);

        var baseLayers = {
			"Grayscale": grayscale,
			"Streets": streets
		};

        var overlays = {
            "Projects Points":markers,
            "Projects Areas":areas
        }

        L.control.layers(baseLayers, overlays).addTo(map);
