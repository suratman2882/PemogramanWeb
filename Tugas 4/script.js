// Function to add a new item
document.getElementById("item-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const newItemText = document.getElementById("item-input").value.trim();
  
    if (newItemText === "") {
      alert("Please enter an item.");
      return;
    }
  
    const itemList = document.getElementById("item-list");
  
    // Create a new item element
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;
  
    // Create a remove button for the item
    const removeButton = document.createElement("button");
    removeButton.className = "remove-item btn-link text-red";
    removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeButton.addEventListener("click", function() {
      itemList.removeChild(newItem);
    });
  
    // Add the item and remove button to the list
    newItem.appendChild(removeButton);
    itemList.appendChild(newItem);
  
    // Clear the input field after adding the item
    document.getElementById("item-input").value = "";
  });
  
  // Function to clear all items
  document.getElementById("clear").addEventListener("click", function() {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = ""; // Remove all items
  });
  