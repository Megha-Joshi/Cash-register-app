var billInput = document.querySelector("#billamount");
var cashGiven = document.querySelector("#cashgiven");
var buttonCheck = document.querySelector("#check-btn");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes")
var availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]
buttonCheck.addEventListener("click", function valueValidation() {
	hideMessage();



	if (Number(billInput.value) > 0) {
		if (Number(cashGiven.value) >= Number(billInput.value)) {
			const amountToBeReturned = cashGiven.value - billInput.value;
			changeCalculation(amountToBeReturned);
		}
		if (Number(cashGiven.value) <= Number(billInput.value)) {
			showMessage("You gave me less cash than the bill, you plan on washing plates or something??");
		}
		if (Number(cashGiven.value) === Number(billInput.value)) {
			showMessage("There is nothing to return, you gave proper amount");
		}

	} else {
		showMessage("Please enter both the fields and they should be more than 0");
	}


});

function changeCalculation(returningAmount) {
	for (var i = 0; i < availableNotes.length; i++) {
		var numberOfNotes = Math.trunc(returningAmount / availableNotes[i]);
		returningAmount %= availableNotes[i];
		noOfNotes[i].innerText = numberOfNotes;
	}
}

function showMessage(messageShown) {
	message.style.display = "block";
	message.innerText = messageShown;
}

function hideMessage() {
	message.style.display = "none";
}