const url = "http://pokeapi.co/api/v2/"
const pokeNext = document.getElementById("pokeNext")
const pokeLast = document.getElementById("pokeLast")
const pokemonDex = document.getElementById("pokemonDex")
const pokeDesc = document.getElementById("pokeDesc")
const pokeName = document.getElementById("pokeName")
const pokeImg = document.getElementById("pokeImg")
const pokeClick = document.getElementById("pokeClick")
const pokeAbsorb = document.getElementById("pokeAbsorb")
const pokeTink = document.getElementById("pokeTink")
const info = document.getElementById("info")
const pokeChat = document.getElementById("pokeChat")
const pokeLogo = document.getElementById("pokeApiLogo")
//Displays weight of Pokémon
const pokeId = document.getElementById("pokeID")

//Displays type of Pokémon
const pokeType = document.getElementById("pokeType")

//Displays height of Pokémon
const pokeH = document.getElementById("pokeH")

//Displays weight of Pokémon
const pokeW = document.getElementById("pokeW")

let pokemonId = 1
let pokeDescId = 1

 const  pokeDex = async ()  => {

   let pDescription = await fetch(`${url}pokemon-species/${pokemonId}`)
   let pokeDescription = await pDescription.json()
   console.log(pokeDescription)
   console.log(pDescription.status)
    
    let response = await fetch(`${url}pokemon/${pokeDescription.name}`)
    console.log(response)
    let pokeInfo = await response.json()
    console.log(pokeInfo)
    const id = styleId(pokeInfo.id)
    pokeId.textContent = `No. ${id}`
    
    pokeName.textContent = pokeInfo.name
    let pokeHeight = pokeInfo.height / 10
    let pokeWeight = pokeInfo.weight / 10
    pokeDesc.textContent = `${pokeDescription.flavor_text_entries[pokeDescId].flavor_text} ▾` 

    pokeH.textContent = `HT ${pokeHeight} m`
    pokeW.textContent = `WT ${pokeWeight} kg`
    pokeType.textContent = pokeInfo.types[0].type.name
    
    //adds an image of the pokémon
    pokeImg.src = pokeInfo.sprites.other.dream_world.front_default  
    
    /* pokeImg.src = pokeInfo.pokesprites.front_default */

}

pokeDex(pokemonId, pokeDescId)

const playSound = () => {
        pokeClick.currentTime = 0
        pokeClick.play()
}

const playSoundTwo = () => {
        pokeAbsorb.currentTime = 0
        pokeAbsorb.play()
}
const playSoundTink = () => {
        pokeTink.currentTime = 0
        pokeTink.play()
}

pokeImg.addEventListener("click", () => {
        playSoundTwo()
        setTimeout( () => {
                pokemonId = Math.floor(Math.random() * 150) + 1
                /* pokemonId++ */
                console.log(pokemonId)
                if(pokemonId > 150) pokemonId = 1  
        
                pokeDex(pokemonId)
        }, 1000)
})

const styleId = (id) => {
        id += 1000
        id = id+""
        id = id.slice(1)
        return id
}

pokeDesc.addEventListener("click", () => {
        pokeDescId++
        if (pokeDescId > 5) pokeDescId = 1
        playSound()
        pokeDex(pokeDescId)
        
})

pokeLast.addEventListener("click", () => {
        pokemonId++
        if(pokemonId > 150) pokemonId = 1
        console.log("next")

        playSoundTink()
        pokeDex(pokemonId)
})

pokeLast.addEventListener("mouseenter", () => {
        pokeImg.classList.add("oneHover")
})

pokeLast.addEventListener("mouseleave", () => {
        pokeImg.classList.remove("oneHover")
})

pokeNext.addEventListener("click", () => {
        pokemonId--
        if(pokemonId > 150) pokemonId = 1
        if(pokemonId == 0) pokemonId = 150  
        console.log("last")

        playSoundTink()
        pokeDex(pokemonId)
})

pokeNext.addEventListener("mouseenter", () => {
        pokeImg.classList.add("oneHover")
})

pokeNext.addEventListener("mouseleave", () => {
        pokeImg.classList.remove("oneHover")
})


info.addEventListener("mouseenter", () => {
        pokeImg.classList.add("oneHover")
        pokeChat.style.display = "block" 
})

info.addEventListener("mouseleave", () => {
        setTimeout( () => {
                pokeChat.style.display = "none" 
                pokeImg.classList.remove("oneHover")
        }, 1000)  
})

pokeLogo.addEventListener("mouseenter", () => {
        pokeImg.classList.add("oneHover")
        pokeChat.style.display = "block"
})

pokeLogo.addEventListener("mouseleave", () => {
        setTimeout( () => {
                pokeChat.style.display = "none" 
                pokeImg.classList.remove("oneHover")
        }, 1000)
})


/* fetch("http://pokeapi.co/api/v2/pokemon/magikarp/")
    .then(res => res.json())
    .then(data => console.log(data.types[0].type.name))



const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    
    .then(res => res.json())
    .then(data => 
        document.getElementById("img").src = `${data.sprites.front_default}`)
        
    

        
        
        



fetch("https://pokeapi.co/api/v2/pokemon/charizard")
        .then(res => res.json())
        .then(data => document.getElementById("pokeID").textContent = `No. 00${data.id}`)



fetch("https://pokeapi.co/api/v2/pokemon/charizard")
        .then(res => res.json())
        .then(data => document.getElementById("pokeName").textContent = `${data.name}`)
 



fetch("https://pokeapi.co/api/v2/pokemon/charizard")
        .then(res => res.json())
        .then(data => document.getElementById("pokeH").textContent = `HT ${data.height}`)

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
        .then(res => res.json())
        .then(data => document.getElementById("pokeW").textContent = `WT ${data.weight}`)


fetch("http://pokeapi.co/api/v2/pokemon/6/")
        .then(res => res.json())
        .then(data => document.getElementById("pokeType").textContent = `${data.types[0].type.name}`)

*/

        

/* const description = fetch("https://pokeapi.co/api/v2/pokemon-species/6/")
    
        .then(res => res.json())
        .then(data => document.getElementById("pokeDesc").textContent = `${data.flavor_text_entries[1].flavor_text}`) */
/*

 */
/* const pokeData = await fetch("https://pokeapi.co/api/v2/pokemon-species/6/")
    .then(res => res.json())
    .then(data => data)


pokeDesc.addEventListener("click", () => {
        for (let i = 0; i > flavor_text_entries; i++) {
            console.log("ok")
        }
}) */