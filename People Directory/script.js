let getAllPeople;
const totalPeopleElmt = document.querySelector('#totalPeople');
const peopleRenderElmt = document.querySelector('#peopleRender');
const keywordSearchElmt = document.querySelector('#keywordSearch');
const loadingElmt = document.querySelector('#loading');
const noResultsElmt = document.querySelector('#noResults');

function fetchData() {
    loadingElmt.classList.remove('d-none'); // Show loading indicator
    fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
            getAllPeople = data.users;
            renderData(getAllPeople);
        })
        .catch((err) => {
            console.error("Failed to fetch data:", err);
            peopleRenderElmt.innerHTML = `<div class="col-12"><div class="alert alert-danger">Could not load user data. Please try again later.</div></div>`;
        })
        .finally(() => {
            loadingElmt.classList.add('d-none'); // Hide loading indicator
        });
}

function searchPeople() {
    const term = keywordSearchElmt.value.toLowerCase();
    
    if (!term) {
        renderData(getAllPeople); // If search is empty, show all
        return;
    }
    
    // Filter based on multiple fields
    const searchedPeople = getAllPeople.filter(p => {
        const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
        return (
            fullName.includes(term) ||
            p.email.toLowerCase().includes(term) ||
            p.company.name.toLowerCase().includes(term) ||
            p.company.title.toLowerCase().includes(term)
        );
    });
    
    renderData(searchedPeople);
}

function renderData(users) {
    totalPeopleElmt.textContent = users.length;

    // Handle no results
    if (users.length === 0) {
        noResultsElmt.classList.remove('d-none');
        peopleRenderElmt.classList.add('d-none');
    } else {
        noResultsElmt.classList.add('d-none');
        peopleRenderElmt.classList.remove('d-none');
    }

    peopleRenderElmt.innerHTML = users.map(u => `
        <div class="col-sm-6 col-lg-4 col-xl-3 mb-5 mt-5">
            <div class="card h-100 text-center">
                <div class="d-flex justify-content-center">
                    <img src="${u.image}" class="card-img-top" alt="${u.firstName}">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${u.firstName} ${u.lastName}</h5>
                    <p class="card-text text-muted">
                        <i class="fa-solid fa-location-dot"></i> ${u.address.city}, ${u.address.state}
                    </p>
                    <div class="company-info mt-auto">
                        <strong>${u.company.name}</strong><br/>
                        <span class="badge bg-primary">${u.company.title}</span>
                    </div>
                    <hr>
                    <div class="text-start">
                         <p class="card-text mb-1"><i class="fa-solid fa-envelope"></i> ${u.email}</p>
                         <p class="card-text"><i class="fa-solid fa-phone"></i> ${u.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initial fetch
fetchData();