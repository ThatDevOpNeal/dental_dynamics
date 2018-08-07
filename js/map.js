function map_init() {
    const location = { lat: 42.048631, lng: -87.746566 };
    
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: location
    });

    let marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Dental Dynamics'
    });
}