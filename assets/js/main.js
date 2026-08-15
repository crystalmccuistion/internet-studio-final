// Page object
class Page {
  constructor() {
    this.dialogue = "";
    this.speaker = null;
    this.scene = null;
    this.characters = [];
  }
}

// Sprite object
class Sprite {
  constructor() {
    this.character = null;
    this.description = "";
    this.image = "";
    this.position = { x: 0, y: 0 };
  }
}
// Scene object
class Scene {
  constructor() {
    this.name = "";
    this.music = null;
    this.background = null;
  }
}

// Game instance object
class Game {
  constructor() {
    this.run = function () {
      // setup
      this.index_text();
      this.hide_text();
      this.add_click_listener();
      // page 1
      this.show_speaker("m");
    };

    this.index_text = function () {
      // speakers
      this.speakers = document.querySelectorAll(".speaker");
      // dialogue
      this.dialogue_list = document.querySelectorAll(".dialogue");
      console.log("pages of dialogue = " + this.dialogue_list.length);
    };

    this.hide_text = function () {
      // hide dialogue
      for (let i = 1; i <= this.dialogue_list.length; i++) {
        this.dialogue_list[i - 1].style.display = "none";
      // show dialogue for first page
      this.dialogue_list[0].style.display = "block";
      }
      // hide speakers
      for (let i = 1; i <= this.speakers.length; i++) {
        this.speakers[i - 1].style.display = "none";
      }
    };

    this.add_click_listener = function () {
      let current_page_num = 1;
      document.addEventListener('click', function (event) {
        current_page_num++;
        this.goToPage(current_page_num);
      }.bind(this), { capture: true });
    };

    this.goToPage = function (page_num) {
      if (page_num > this.dialogue_list.length) {
        console.log('the end');
        return;
      }
      console.log('go to page ' + page_num);
      this.dialogue_list[page_num - 2].style.display = "none";
      this.dialogue_list[page_num - 1].style.display = "block";
    };

    this.show_speaker = function (speaker_id) {
      let speaker = document.getElementById(speaker_id);
      if (speaker) {
        speaker.style.display = "block";
      }
    };
  }
};

const game_instance = new Game();
game_instance.run()