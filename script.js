// TODO: add code here

window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json) => {
            const astronautArray = json;
            const astronautContainer = document.getElementById('container');
            let astronautDocFragment= document.createDocumentFragment();
            astronautArray.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
            for(const astronaut of astronautArray) {
                const astronautDiv = document.createElement('div');
                astronautDiv.classList.add('astronaut');
                astronautDocFragment.appendChild(astronautDiv);
                astronautDiv.innerHTML = `<div class="bio">

                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
          
                <ul>
          
                   <li>Hours in space: ${astronaut.hoursInSpace}</li>
          
                   <li${astronaut.active ? ' style= "color:green;"' : ''}>Active: ${astronaut.active}</li>
          
                   <li>Skills: ${astronaut.skills.join(', ')}</li>
          
                </ul>
          
             </div>
          
             <img class="avatar" src="${astronaut.picture}">`
            }
            astronautContainer.appendChild(astronautDocFragment);
            const header = document.querySelectorAll('h1')[0];
            header.innerText = `Astronauts: ${astronautArray.length}`;
        });
    });
});