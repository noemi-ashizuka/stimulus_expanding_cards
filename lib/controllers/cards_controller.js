import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card"]
  connect() {
    console.log(this.cardTargets);
  }

  open(event) {
    this.cardTargets.forEach((card) => {
      card.classList.remove("active")
    })
    event.target.classList.add("active")
  }
}
