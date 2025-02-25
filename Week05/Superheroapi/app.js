const apiUrl = "https://corsproxy.io/https://superheroapi.com/api/7f36fd40e4c952ec4f15923eb33d9398/search/";
const heroInput = document.getElementById('hero-input');

async function supersearch() {

    const heroName = heroInput.value.trim();
    const url = `${apiUrl}${heroName}`;
    console.log(url)
    if (heroName == "") {
        alert("Please enter a superhero name!")
        // Show the error message
        return; // Stop the function from making the API call
    }
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    if (!alphanumericRegex.test(heroName)) {
        alert("Please enter a valid SuperHero Name!")
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.error) {
                alert("Superhero not found!")
                console.log(data.error)
            } else {
                // Assuming the API returns a list of heroes, you can display the first one
                const hero = data.results[0];
                console.log(hero)
                displayHeroInfo(hero);
            }
        })
        .catch(error => {
            console.error('There was an error fetching the superhero data:', error);
            alert("Superhero not found!")
        });
}


function displayHeroInfo(hero){
    const superimage = document.getElementById("image")
    const Intelligence = document.getElementById("int")
    const Strength=document.getElementById("Stre")
    const Speed=document.getElementById("Sp")
    const Durability=document.getElementById("Dur")
    const Power=document.getElementById("Pow")
    const Combat=document.getElementById("Com")
    const Name=document.getElementById("Name")
    const Egos=document.getElementById("Ego")
    const Aliases=document.getElementById("Alia")
    const Birth=document.getElementById("PoB")
    const Appearance=document.getElementById("Fa")
    const Publisher=document.getElementById("Pub")
    const Alignment=document.getElementById("Align")
    const Gender=document.getElementById("Gen")
    const Race=document.getElementById("Race")
    const Height=document.getElementById("Height")
    const Weight=document.getElementById("Weight")
    const Eye =document.getElementById("Ec")
    const Hair = document.getElementById("hc")
    const Occupation=document.getElementById("Ocp")
    const Base =document.getElementById("BoO")
    const Affiliation=document.getElementById("Ga")
    const Relatives=document.getElementById("Relatives")

    superimage.src = hero.image.url
    Intelligence.innerHTML = hero.powerstats.intelligence
    Strength.innerHTML = hero.powerstats.strength
    Speed.innerHTML = hero.powerstats.speed
    Durability.innerHTML = hero.powerstats.durability
    Power.innerHTML = hero.powerstats.power
    Combat.innerHTML = hero.powerstats.combat
    Name.innerHTML = hero.biography['full-name']
    Egos.innerHTML = hero.biography['alter-egos']
    Aliases.innerHTML = hero.biography.aliases
    Birth.innerHTML = hero.biography['place-of-birth']
    Appearance.innerHTML = hero.biography['first-appearance']
    Publisher.innerHTML = hero.biography.publisher
    Alignment.innerHTML = hero.biography.alignment
    Gender.innerHTML = hero.appearance.gender
    Race.innerHTML = hero.appearance.race
    Height.innerHTML = hero.appearance.height
    Weight.innerHTML = hero.appearance.weight
    Eye.innerHTML = hero.appearance['eye-color']
    Hair.innerHTML = hero.appearance['hair-color']
    Occupation.innerHTML = hero.work.occupation
    Base.innerHTML = hero.work.base
    Affiliation.innerHTML = hero.connections['group-affiliation']
    Relatives.innerHTML = hero.connections.relatives
}