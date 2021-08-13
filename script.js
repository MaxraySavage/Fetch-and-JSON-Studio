// TODO: add code here

window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((response) => {
        response.json().then((json) => {
            const astronautArray = json;
            console.log(astronautArray[0]);
            const astronautContainer = document.getElementById('container');
            let astronautDocFragment= document.createDocumentFragment();
            for(const astronaut of astronautArray) {
                const astronautDiv = document.createElement('div');
                astronautDiv.classList.add('astronaut');
                astronautDocFragment.appendChild(astronautDiv);
                astronautDiv.innerHTML = `<div class="bio">

                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
          
                <ul>
          
                   <li>Hours in space: ${astronaut.hoursInSpace}</li>
          
                   <li>Active: ${astronaut.active}</li>
          
                   <li>Skills: ${astronaut.skills.join(', ').slice(0, -2)}</li>
          
                </ul>
          
             </div>
          
             <img class="avatar" src="${astronaut.picture}">`
            }
            astronautContainer.appendChild(astronautDocFragment);
        });
    });
});