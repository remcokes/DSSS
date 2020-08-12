var map;
            var InforObj = [];
            var centerCords = {
                lat: 52.488964,
                lng: 5.403289
            };
            var markersOnMap = [{
                    placeName: "Amstelmeer",
                    LatLng: [{
                        lat: 52.868485,
                        lng: 4.909358
                    }]
                },
                {
                    placeName: "De Brace",
                    LatLng: [{
                        lat: 52.935119,
                        lng: 4.998743
                    }]
                },
                {
                    placeName: "Herkingen",
                    LatLng: [{
                        lat: 51.706779,
                        lng: 4.081442
                    }]
                },
                {
                    placeName: "Houtribdijk",
                    LatLng: [{
                        lat: 52.631445,
                        lng: 5.408872
                    }]
                },
                {
                    placeName: "Ouddorp Haven",
                    LatLng: [{
                        lat: 51.776567,
                        lng: 3.868136
                    }]
                },
                {
                    placeName: "Het Kuitje",
                    LatLng: [{
                        lat: 52.935712,
                        lng: 4.792094
                    }]
                },
                {
                    placeName: "De Houw",
                    LatLng: [{
                        lat: 53.084384,
                        lng: 5.382285
                    }]
                },
                {
                    placeName: "Strand Horst",
                    LatLng: [{
                        lat: 52.285880,
                        lng: 5.543463
                    }]
                }
            ];

            window.onload = function () {
                initMap();
            };

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 18;

function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 8,
                    center: centerCords
                });
                addMarkerInfo();
            }


            function addMarkerInfo() {
                for (var i = 0; i < markersOnMap.length; i++) {
                    var contentString = '<div id="content"><p>' + markersOnMap[i].placeName + '</p></div>';

                    const marker = new google.maps.Marker({
                        position: markersOnMap[i].LatLng[0],
                        label: labels[labelIndex++ % labels.length],
                        map: map
                    });

                    const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                        maxWidth: 200
                    });

                    marker.addListener('click', function () {
                        closeOtherInfo();
                        infowindow.open(marker.get('map'), marker);
                        InforObj[0] = infowindow;
                    });
                }
            }

            function closeOtherInfo() {
                if (InforObj.length > 0) {
                    InforObj[0].set("marker", null);
                    InforObj[0].close();
                    InforObj.length = 0;
                }
            }   