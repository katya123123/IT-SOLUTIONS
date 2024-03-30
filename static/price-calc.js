const calculators = {};

document.querySelectorAll(".price-option").forEach((el) => {
  el.addEventListener("click", function () {
    const calculatorID = this.closest("[data-calculator]").dataset.calculator;
    const questionID = this.dataset.question;
    const value = parseFloat(this.dataset.value);
    const singleSelect = this.dataset.singleSelect === "true";

    // Initialize calculator object
    if (!calculators[calculatorID]) {
      calculators[calculatorID] = {};
    }

    // Reset other options if single select
    if (singleSelect) {
      document
        .querySelectorAll(
          `[data-calculator="${calculatorID}"] [data-question="${questionID}"].selected`
        )
        .forEach((el) => {
          el.classList.remove("selected");
        });
      calculators[calculatorID][questionID] = [];
    }

    // Toggle selected class
    if (!calculators[calculatorID][questionID]) {
      calculators[calculatorID][questionID] = [];
    }

    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
      const index = calculators[calculatorID][questionID].indexOf(value);
      if (index > -1) {
        calculators[calculatorID][questionID].splice(index, 1);
      }
    } else {
      this.classList.add("selected");
      calculators[calculatorID][questionID].push(value);
    }

    // Calculate total
    let total = 0;
    Object.keys(calculators[calculatorID]).forEach((key) => {
      calculators[calculatorID][key].forEach((val) => (total += val));
    });

    // Display total
    const totalSpan = document.querySelector(`[data-total="${calculatorID}"]`);
    totalSpan.textContent = ` ${total.toLocaleString()}`;
  });
});

document.querySelectorAll(".price-option-input").forEach((el) => {
  el.addEventListener("click", function () {
    const calculatorID = this.closest("[data-calculator]").dataset.calculator;
    const questionID = this.dataset.question;
    const value = parseFloat(this.dataset.value);
    const singleSelect = this.dataset.singleSelect === "true";

    // Initialize calculator object
    if (!calculators[calculatorID]) {
      calculators[calculatorID] = {};
    }

    // Reset other options if single select
    if (singleSelect) {
      document
        .querySelectorAll(
          `[data-calculator="${calculatorID}"] [data-question="${questionID}"].selected`
        )
        .forEach((el) => {
          el.classList.remove("selected");
        });
      calculators[calculatorID][questionID] = [];
    }

    // Toggle selected class
    if (!calculators[calculatorID][questionID]) {
      calculators[calculatorID][questionID] = [];
    }

    if (this.classList.contains("selected")) {
      const index = calculators[calculatorID][questionID].indexOf(value);
      if (index > -1) {
        calculators[calculatorID][questionID].splice(index, 1);
      }
    } else {
      this.classList.add("selected");
      calculators[calculatorID][questionID].push(value);
    }

    // Calculate total
    let total = 0;
    Object.keys(calculators[calculatorID]).forEach((key) => {
      calculators[calculatorID][key].forEach((val) => (total += val));
    });

    // Display total
    const totalSpan = document.querySelector(`[data-total="${calculatorID}"]`);
    totalSpan.textContent = ` ${total.toLocaleString()}`;
  });
});
