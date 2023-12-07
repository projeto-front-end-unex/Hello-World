async function fetchVagas(termo, card) {
  const response = await fetch(`http://localhost:3000/api/jobs/${termo}`);
  const jobsData = await response.json(); 
  const jobsContainer = document.getElementById('jobs-container');
  
  setCardStyle(card)
  
  jobsContainer.innerHTML = ''  
  
  jobsData.forEach(vaga =>{
    jobsContainer.innerHTML += `
      <div class="col">
        <div class="job-card">
          <h2 class="job-title">${vaga.title}</h2>
          <p class="job-content">${vaga.description}</p>
          <div class="job-details">
            <div class="row align-items-center">
              <div class="col-auto">
                <div class="row company-details align-items-center">
                  <div class="col-auto">
                    <div class="logo-container">
                      <img src="${vaga.companyLogo}" alt="Logo da Empresa">
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="company-name">
                      <p>${vaga.company}</p>
                    </div>
                    <div class="location">
                      <p><i class="bx bxs-map"></i> ${vaga.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="company-name text-end">
                  <p>Salário</p>
                </div>
                <div class="text-end">
                  <p>${vaga.salary}</p>
                </div>
              </div>
            </div>
          </div>
          <a href="${vaga.links[0].href}" target="_blank" class="job-overlay"></a>
        </div>
      </div>
     `
     jobsContainer.scrollIntoView();
  })  
}

function setCardStyle(card){
  const allCards = document.querySelectorAll('.Cardselect')
  
  allCards.forEach(item => {
    item.classList.remove('Cardselect')
    const maleta = item.querySelector('.maleta img')
    maleta.src = 'assets/img/svg/maleta.svg'
  })
  
  card.classList.add('Cardselect')
  const maleta = card.querySelector('.maleta img')
  maleta.src = 'assets/img/svg/maleta_selecionada.svg'
}
