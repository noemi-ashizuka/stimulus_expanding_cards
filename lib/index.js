import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
import CardsController from "./controllers/cards_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
window.Stimulus.register("cards", CardsController);
