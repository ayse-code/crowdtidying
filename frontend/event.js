var tid = setInterval(function () {
    if (document.readyState !== 'complete') return;
    clearInterval(tid);
    var mymap = 
L.map
('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYW5uYWxlbmEwMzExIiwiYSI6ImNraDd0cjZlajA3czgydHFxaWI0aTM3cGQifQ.5EoHIU_cJQ4Mavv703rsMw'
    }).addTo(mymap);
    var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
}, 100)