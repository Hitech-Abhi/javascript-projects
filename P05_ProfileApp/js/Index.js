console.log('This is Project - 5');
// Data is an array of objects which contains information about the candidates

const data = [
    {
        name: 'Shubham',
        age: 18,
        city: 'Bihar',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
        name: 'Niraj',
        age: 22,
        city: 'Uttar Pradesh',
        language: 'Javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    {
        name: 'Aishwariya',
        age: 47,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
        name: 'Rehan',
        age: 23,
        city: 'Kolkata',
        language: 'Go',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
]

//cvIterator
function cvIterator(profiles) {
    let nextIndex = 0;

    return{
        next: function name() {
           return nextIndex<profiles.length ?
           {value: profiles[nextIndex++], done: false} :
           {done:true}
        }
    }
}
const candidates = cvIterator(data);
nextCV();

//Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV );

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src = '${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
            <li class="list-group-item">Name: ${currentCandidate.name}</li>
            <li class="list-group-item">${currentCandidate.age} years old</li>
            <li class="list-group-item">lives in ${currentCandidate.city}</li>
            <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
            <li class="list-group-item">Uses ${currentCandidate.framework}</li>
        </ul>`
    }
    else{
        alert('End of candidate applications')
        window.location.reload();
    }
}
