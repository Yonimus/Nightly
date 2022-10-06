const addnewmood = async (event) => {
        event.preventDefault();

        const happy = document.querySelector("#happy").checked; 
        const neutral = document.querySelector("#neutral").checked; 
        const sad = document.querySelector("#sad").checked; 
        const amazing = document.querySelector("#amazing").checked;

        const moodtext = document.querySelector(".textarea").value; 
   
        const cooked = document.querySelector("#cook").checked;
        const music = document.querySelector("#music").checked;
        const meditate = document.querySelector("#meditate").checked;
        const school = document.querySelector("#school").checked;
        const junk = document.querySelector("#junk").checked;
        const binge = document.querySelector("#binge").checked;




        if (happy || neutral || sad || amazing && moodtext ) {
        
            let mood, cooking, musicact, meditateact, schoolact, junkact, bingeact, id;


            if(happy){
                mood = "happy";
            } else if (neutral){
                mood = "neutral";
            } else if (sad){
                mood = "sad";
            } else if (amazing){
                mood = "amazing"
            }
            
            if(cooked){
                cooking = "cooked at home"
            } else {
                cooking = "NULL"
            }

            if(music){
               musicact ="listed to music"
            }

            if(meditate){
               meditateact ="Meditated"
            } 

            if(school){
                schoolact ='Learned Something New'
            } 

            if(junk){
                junkact="Ate junk food"
            } 

            if(binge){
               bingeact = "Binged a TV Show"
            } 
            
            id=[Math.floor(Math.random() * 100000)];

            console.log(mood)
            console.log(cooking)
            console.log(musicact)
            console.log(id)
            
            const response = await fetch('/api/mood', {
                method: 'POST',
                body: JSON.stringify({ mood, moodtext,cooking,musicact, schoolact, junkact, bingeact}),
                headers: { 'Content-Type': 'application/json' },
            });
            if(response.ok){
                document.location.replace('/cards')
            } else {
                alert('Failed to submit mood')
            }

    }};



    
const subm = document.querySelector("#button");


subm.addEventListener('click', addnewmood)

// ,musicact,meditateact,schoolact,junkact,bingeact