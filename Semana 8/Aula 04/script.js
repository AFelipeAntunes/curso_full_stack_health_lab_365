document.addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('services') === null) {
        localStorage.setItem('services', JSON.stringify({}));
    }

    displayServices();

    document.getElementById('priceForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let service = document.getElementById('service').value;
        let price = document.getElementById('price').value;

        let services = JSON.parse(localStorage.getItem('services'));
        services[service] = price;
        localStorage.setItem('services', JSON.stringify(services));

        displayServices();
    });
});

function displayServices() {
    let services = JSON.parse(localStorage.getItem('services'));
    let servicesDiv = document.getElementById('services');
    servicesDiv.innerHTML = '';

    for(let service in services) {
        servicesDiv.innerHTML += `<p>${service}: ${services[service]}</p>`;
    }
}
