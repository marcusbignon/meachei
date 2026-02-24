  function initMap() {

      const pontos = [
    { 
      nome: "Hospital Unimed Ferj", 
      endereco: "Av. Ayrton Senna, 2550", 
      bairro: "Barra da Tijuca", 
      cidade: "Rio de Janeiro / RJ", 
      lat: -22.988613542203655, 
      lng: -43.3639059934306
    },
    { 
      nome: "Hospital Américas", 
      endereco: "Av. Jorge Curi, 550", 
      bairro: "Barra da Tijuca", 
      cidade: "Rio de Janeiro / RJ", 
      lat: -22.989957568378788,
      lng: -43.370196907561365
    },
    { 
      nome: "Hospital Samaritano Barra", 
      endereco: "Av. Jorge Curi, 550", 
      bairro: "Barra da Tijuca", 
      cidade: "Rio de Janeiro / RJ",
      lat: -22.990974862607857, 
      lng: -43.37000378875021
    },
    { 
      nome: "Hospital Vitória", 
      endereco: "Av. Jorge Curi, 550", 
      bairro: "Barra da Tijuca", 
      cidade: "Rio de Janeiro / RJ", 
      lat: -22.992703257531176,
      lng: -43.37055095943126  
    },
    { 
      nome: "Hospital Municipal Lourenço Jorge", 
      endereco: "Av. Ayrton Senna, 2.000", 
      bairro: "Barra da Tijuca", 
      cidade: "Rio de Janeiro / RJ", 
      lat: -22.979532347922113,
      lng: -43.36556182123631 
    },
    { 
      nome: "Hospital Barra D'Or",
      endereco: "Av. Nelson Mufarrej Filho, 255", 
      bairro: "Barra da Tijuca", 
      cidade: "Rio de Janeiro / RJ",
      lat: -22.983934913723544,
      lng: -43.36295639879679
    }
  ];

    const userLocation = {
        lat: -22.987182588937785,
        lng: -43.35571356696625
    };

    const map = new google.maps.Map(document.getElementById("map"), {
      center: userLocation,
      zoom: 15
    });

    userMarker = new google.maps.Marker({
      position: userLocation,
      map: map,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      }
    });

    const userInfoWindow = new google.maps.InfoWindow({
      content: `
        <div>
          <strong>Você está aqui!</strong>
        </div>
      `
    });

    userInfoWindow.open({
      anchor: userMarker,
      map,
    });

    const infoWindow = new google.maps.InfoWindow();

    pontos.forEach(p => {

      const marker = new google.maps.Marker({
        position: { lat: p.lat, lng: p.lng },
        map: map,
        title: p.nome,
        icon: {
          url: "pin.png"
        }
      });

      marker.addListener("click", () => {
        infoWindow.setContent(`
          <div>
            <b>${p.nome}</b><br/><br/>
            Endereço: ${p.endereco}<br/>
            ${p.bairro}<br/>
            ${p.cidade}<br/>
          </div>
        `);

        infoWindow.open({
          anchor: marker,
          map,
        });

      });

    });

  }