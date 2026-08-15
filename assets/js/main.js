// game instance
function Game() {
  this.character_names = ['ExampleName1', 'ExampleName2'];

  this.run = function() {
    this.index_dialogue();
    this.hide_dialogue();
    this.addClickListener();
  }

  this.index_dialogue = function() {
    this.dialogue_list = document.querySelectorAll(".dialogue");
    console.log("pages of dialogue = " + this.dialogue_list.length);
  }

  this.hide_dialogue = function() {
    for (let i = 1; i <= this.dialogue_list.length; i++) {
      this.dialogue_list[i-1].style.display = "none";
      // show first page of dialogue
      this.dialogue_list[0].style.display = "block";
    }
  }

  this.addClickListener = function() {
    let current_page_num = 1;
    document.addEventListener('click', function(event) {
      current_page_num ++;
      this.goToPage(current_page_num);
    }.bind(this), {capture: true});
  }

  this.goToPage = function(page_num) {
    if (page_num > this.dialogue_list.length) {
      console.log('the end');
      return;
    }
      console.log('go to page ' + page_num);
      this.dialogue_list[page_num-2].style.display = "none";
      this.dialogue_list[page_num-1].style.display = "block";
  }
};

const game_instance = new Game();
game_instance.run()