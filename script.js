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
                const bioDiv = document.createElement('div');
                bioDiv.classList.add('bio');
                astronautDiv.appendChild(bioDiv);
                
                const profileImg = document.createElement('img');
            }
        });
    });
});