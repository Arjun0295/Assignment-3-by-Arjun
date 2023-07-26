class Smoothie {
    constructor(name, baseIngredients, additionalIngredients) {
        this.name = name;
        this.baseIngredients = baseIngredients;
        this.additionalIngredients = additionalIngredients;
    }

    getDescription() {
        return `Name on Smoothie Cup: ${this.name}\nBase Ingredients: ${this.baseIngredients.join(', ')}\nAdditional Ingredients: ${this.additionalIngredients.join(', ')}`;
    }
}

function createSmoothie() {
    const name = document.getElementById('smoothieName').value.trim();
    if (name === '') {
        alert("Please enter a name to be Entered on Your Cup !");
        return;
    }

    const baseIngredients = [];
    const checkboxes = document.querySelectorAll('input[name="baseIngredient"]:checked');

    if (checkboxes.length !== 2) {
        alert("Please select exactly two base ingredients.");
        return;
    }

    checkboxes.forEach(checkbox => {
        baseIngredients.push(checkbox.value);
    });

    const additionalIngredients = [];
    const additionalCheckboxes = document.querySelectorAll('input[name="ingredient"]:checked');

    additionalCheckboxes.forEach(checkbox => {
        additionalIngredients.push(checkbox.value);
    });

    const smoothie = new Smoothie(name, baseIngredients, additionalIngredients);
    const smoothieDescription = document.getElementById('smoothieDescription');
    smoothieDescription.innerHTML = `<h2>Smoothie Details</h2><pre>${smoothie.getDescription()}</pre>`;
}
