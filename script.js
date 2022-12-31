anychart.onDocumentReady(function () {

  // add data
  var data = [
    ["4:00", -1],
    ["8:00", 0],
    ["12:00", 4],
    ["16:00", 8],
    ["20:00", 6],
    ["24:00", -2]
  ];

  // create a data set
  var dataSet = anychart.data.set(data);

  // map the data for all series
  var tempData = dataSet.mapAs({x: 0, value: 1});

  // apply theme
  anychart.theme(anychart.themes.darkEarth);

  // create a line chart
  var chart = anychart.line();

  // create the line, add name and color
  var temp = chart.line(tempData);
  temp.name("Temperature");
  temp.normal().stroke("#FF0000", 2.5);

  // add a legend
  chart.legend().enabled(true);

  // add a title
  chart.title("Forecast for Today");

  // specify where to display the chart
  chart.container("chart");

  // draw the resulting chart
  chart.draw();

});
  
let object = {
  coord: "44.767778, -93.2775",
  latilongi: {lat: 12.112, lng: 42.537}
};

// Initialize and add the map
function initMap() {
// The location of city_coord
const city_coord = { lat: 51.050, lng: 13.737 };
// The map, centered at city_coord
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 5,
  center: city_coord,
  styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            },
            {
                "weight": "1.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": "1.00"
            },
            {
                "lightness": "-20"
            },
            {
                "saturation": "0"
            },
            {
                "invert_lightness": true
            },
            {
                "weight": "1.00"
            },
            {
                "hue": "#fffe00"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fce805"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "weight": "1.00"
            },
            {
                "gamma": "1.00"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "1.00"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fce805"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "43"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "1.00"
            },
            {
                "gamma": "1.00"
            },
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            },
            {
                "hue": "#fffe00"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#646464"
            },
            {
                "lightness": 17
            }
        ]
    }
]
});
const map2 = new google.maps.Map(document.getElementById("map2"), {
  zoom: 4,
  center: object.latilongi,
});
// The marker, positioned at city_coord
const marker = new google.maps.Marker({
  position: city_coord,
  map: map,
});
}
// console.log(weather.coord);
window.initMap = initMap;