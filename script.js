function toggleHeader() {
    document.getElementById("navigation").classList.toggle("open");
  }

//Liquids converter
document.getElementById('flOzToConvert').addEventListener('input', function(e){
    let flOz = e.target.value;//Get the value
    const ml = flOz * 29.574; //Convert to ml
    document.getElementById('flOzToMl').innerText = Math.floor(ml);
})
document.getElementById('mlToConvert').addEventListener('input', function(e){
    let ml = e.target.value;//Get the value
    const flOz = ml / 29.574; //Convert to fl oz
    document.getElementById('mlToFlOz').innerText = Math.round(flOz*100)/100;//Round to decimal
})

//Oz converter
document.getElementById('ozToConvert').addEventListener('input', function(e){
    let oz = e.target.value; //Get the value
    const gr = oz * 28.35; //Convert to gr
    document.getElementById('ozToGr').innerText = Math.floor(gr);
})
document.getElementById('grToConvert').addEventListener('input', function(e){
    let gr = e.target.value; //Get the value
    const oz = gr / 28.35; //Convert to oz
    document.getElementById('grToOz').innerText = Math.round(oz*100)/100//Round to decimal
})

//Cups converter
document.getElementById('cupToConvert').addEventListener('input', function(e){
    let cup = e.target.value; //Get the value

    document.getElementById('cupContent').addEventListener('input', function(e){
        let cupContent = e.target.options[e.target.selectedIndex].text; //Get the value
        switch (cupContent) {
            case 'liquid':
                let liquid = Math.floor(cup * 250);
                document.getElementById('cupToUnit').innerText = liquid + " ml";
            break;
            case 'flour':
                let flour = Math.floor(cup * 128);
                document.getElementById('cupToUnit').innerText = flour + " gr";
            break;
            case 'sugar':
                let sugar = Math.floor(cup * 200);
                document.getElementById('cupToUnit').innerText = sugar + " gr";
            break;
            case 'brown sugar':
                let brownSugar = Math.floor(cup * 220);
                document.getElementById('cupToUnit').innerText = brownSugar + " gr";
            break;
            case 'butter':
                let butter = Math.floor(cup * 227);
                document.getElementById('cupToUnit').innerText = butter + " gr";
            break;
            case 'chocolate chips':
                let chocolatechips = Math.floor(cup * 152);
                document.getElementById('cupToUnit').innerText = chocolatechips + " gr";
            break;
            case 'chopped nuts':
                let choppednuts = Math.floor(cup * 122);
                document.getElementById('cupToUnit').innerText = choppednuts + " gr";
            break;
            default:
                document.getElementById('cupToUnit').innerText = "0 unité";
            break;
        }
    })
})

//Spoons converter
document.getElementById('tspToConvert').addEventListener('input', function(e){
    let tsp = e.target.value; //Get the value
    const milliLiter = tsp * 5; //Convert to ml
    const tbsp = tsp / 3; //Convert to tbsp
    document.getElementById('tspToMl').innerText = Math.floor(milliLiter);
    document.getElementById('tspToTbsp').innerText = Math.round(tbsp*100)/100; //Round to decimal
})
document.getElementById('tbspToConvert').addEventListener('input', function(e){
    let tbsp = e.target.value; //Get the value
    const milliLiter = tbsp * 15; //Convert to ml
    const tsp = tbsp * 3; //Convert to tsp
    document.getElementById('tbspToMl').innerText = Math.floor(milliLiter);
    document.getElementById('tbspToTsp').innerText = Math.round(tsp*100)/100; //Round to decimal
})

//Temperature converter
document.getElementById('fToConvert').addEventListener('input', function(e){
    let fahrenheit = e.target.value; //Get the value
    const celsius = (fahrenheit - 32) * 5/9; //Convert to celsius
    document.getElementById('fToC').innerText = Math.round(celsius*100)/100; //Round to decimal
})
document.getElementById('cToConvert').addEventListener('input', function(e){
    let celsius = e.target.value; //Get the value
    const fahrenheit = (celsius * 9/5) + 32; //Convert to fahreinheit
    document.getElementById('cToF').innerText = Math.round(fahrenheit*100)/100; //Round to decimal
})