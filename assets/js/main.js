function Game() {
  this.character_names = ['ExampleName1', 'ExampleName2'],
  this.run = function() {
    console.log("Hi! My name is " + this.character_names[0] + ".");
    console.log("Here's a second page. ");
  }
};

const game_instance = new Game();
game_instance.run()