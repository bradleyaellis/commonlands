import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    difficulty: 0,
    level: 1,
    maxHealth: 0,
    maxInventory: 0,
    journeySteps: 0,
    experience: 0,
    encounterType: "character",
  },
  mutations: {
    setDifficulty(state, value) {
      switch (value) {
        case 1:
          state.maxInventory = 8;
          state.journeySteps = 7;
          break;
        case 2:
          state.maxInventory = 5;
          state.journeySteps = 10;
          break;
        case 3:
          state.maxInventory = 3;
          state.journeySteps = 12;
          break;
        default:
          console.log("Difficulty error");
      }
      console.log("SD,", value * 3);
      state.encounterType = "monster";
      state.difficulty = value;
    },
    chooseCharacter(state, value) {
      console.log("chooseCharacter");
      switch (value) {
        case 1:
          state.maxHealth = 100;
          break;
        case 2:
          state.maxHealth = 120;
          break;
        case 3:
          state.maxHealth = 90;
          break;
        default:
          console.log("Character error");
      }
      state.encounterType = "difficulty";
    },
  },
  actions: {
    setDifficulty(context, value) {
      context.commit("setDifficulty", value);
    },
    setClass(context, value) {
      console.log("setClass");
      context.commit("chooseCharacter", value);
    },
    setLevel() {
      this.state.maxHealth += 5 - this.state.difficulty;
      this.state.level++;
    },
  },
  modules: {},
});
