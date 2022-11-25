//Receives a callback function as an argument  
  function receivesAFunction(callback){
    hydration();
    callback();
  }
  //Hydration
  function hydration(){
    console.log("Drink 2 glasses of water");
  }

  //Breakfast announcement
  function callback(){
    console.log("Breakfast is ready")
  }



  //Returns a named function
  function cake(){
    console.log("A slice of chocolate cake has 371 calories")
  }


  function iceCream(){
    console.log("Ice-cream has 207 calories per scoop")
  }

  function returnsANamedFunction(dessert){
    let flavour;

    if (dessert === cake) {
        flavour = 'chocolate';
    }
    else if (dessert === iceCream){
        flavour = 'vanilla';
    }
    else {
        flavour = 'cola';
    }

    hydration(dessert);

    let statement = function (){
        console.log (`Life without ${dessert} seems boring to me!`);
    };

    return statement;
  }


  //Returns an Anonymous function
function returnsAnAnonymousFunction(){
    return ()=>{console.log("name")}
}