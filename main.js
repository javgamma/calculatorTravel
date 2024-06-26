    const container = document.createElement('div');
    const form = document.createElement('form');
    const labelCity = document.createElement('label');
    const inputCity = document.createElement('input');
    const datalistCity = document.createElement('datalist');
    const labelNights = document.createElement('label');
    const inputNights = document.createElement('input');
    const labelDaysCar = document.createElement('label');
    const inputDaysCar = document.createElement('input');
    const button = document.createElement('button');
    const resultDiv = document.createElement('div');

    labelCity.textContent = 'Ciudad: ';
    inputCity.setAttribute('type', 'text');
    inputCity.setAttribute('name', 'city');
    inputCity.setAttribute('list', 'cities');
    inputCity.required = true;

    
    labelCity.textContent = 'Ciudad: ';
    inputCity.setAttribute('type', 'text');
    inputCity.setAttribute('name', 'city');
    inputCity.setAttribute('list', 'cities');
    inputCity.required = true;

    datalistCity.setAttribute('id', 'cities');
    datalistCity.innerHTML = `
        <option value="Barcelona"></option>
        <option value="Madrid"></option>
        <option value="Sevilla"></option>
        <option value="Valencia"></option>
    `;

    labelNights.textContent = 'Número de noches: ';
    inputNights.setAttribute('type', 'text');
    inputNights.setAttribute('name', 'nights');
    inputNights.required = true;

    labelDaysCar.textContent = 'Días de alquiler del coche: ';
    inputDaysCar.setAttribute('type', 'text');
    inputDaysCar.setAttribute('name', 'daysCar');
    inputDaysCar.required = true;

    button.setAttribute('type', 'submit');
    button.textContent = 'Calcular Coste';


    form.appendChild(labelCity);
    form.appendChild(inputCity);
    form.appendChild(datalistCity);
    form.appendChild(document.createElement('br'));
    form.appendChild(labelNights);
    form.appendChild(inputNights);
    form.appendChild(document.createElement('br'));
    form.appendChild(labelDaysCar);
    form.appendChild(inputDaysCar);
    form.appendChild(document.createElement('br'));
    form.appendChild(button);

    container.appendChild(form);
    container.appendChild(resultDiv);

    document.body.appendChild(container);

 
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.backgroundColor = '#f0f0f0';
    container.style.backgroundColor = '#fff';
    container.style.padding = '20px';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = '10px';

    labelCity.style.fontSize = '14px';
    labelNights.style.fontSize = '14px';
    labelDaysCar.style.fontSize = '14px';
    
    inputCity.style.padding = '8px';
    inputNights.style.padding = '8px';
    inputDaysCar.style.padding = '8px';

    inputCity.style.border = '1px solid #ccc';
    inputNights.style.border = '1px solid #ccc';
    inputDaysCar.style.border = '1px solid #ccc';

    inputCity.style.borderRadius = '4px';
    inputNights.style.borderRadius = '4px';
    inputDaysCar.style.borderRadius = '4px';

    button.style.padding = '10px';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.backgroundColor = '#28a745';
    button.style.color = '#fff';
    button.style.cursor = 'pointer';

   


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const city = inputCity.value;
        const nights = parseInt(inputNights.value);
        const daysCar = parseInt(inputDaysCar.value);

        const totalCost = calcularCoste(city, nights, daysCar);

        resultDiv.textContent = `El coste total del viaje es: ${totalCost}€`;
        resultDiv.style.marginTop = '20px';
        resultDiv.style.fontSize = '16px';
        resultDiv.style.fontWeight = 'bold';
    });


function calcularCoste(city, nights, daysCar) {
    const hotelCost = costeHotel(nights);
    const flightCost = costeAvion(city, nights);
    const carCost = costeCoche(daysCar);

    return hotelCost + flightCost + carCost;
}


function costeHotel(nights) {
    const costPerNight = 140;
    return nights * costPerNight;
}


function costeAvion(city, nights) {
    const flightCosts = {
        'barcelona': 90,
        'madrid': 90,
        'sevilla': 50,
        'valencia': 40
    };

    let costPerFlight = flightCosts[city.toLowerCase()];
    if (costPerFlight === undefined) {
        throw new Error('Ciudad no válida');
    }

    if (nights >= 3) {
        costPerFlight *= 0.9;
    }

    return costPerFlight;
}

function costeCoche(days) {
    const costPerDay = 40;
    let totalCost = days * costPerDay;

    if (days >= 7) {
        totalCost -= 50;
    } else if (days >= 3) {
        totalCost -= 20;
    }

    return totalCost;
}

