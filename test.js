function calTotal(){
    const place_element = document.getElementById("place");
    const place_value = parseInt(place_element.value);
    const number_of_people = document.getElementById("numOfPeople").value;
    const total = place_value*number_of_people;
    const total_element = document.getElementById("total");
    total_element.textContent = "Total amount: "+total+"$";
}

function resetForm() {
    document.getElementById("place").selectedIndex = 0;
    document.getElementById("numOfPeople").value = '';
    document.getElementById("startDate").value = '';
    document.getElementById("endDate").value = '';
    document.getElementById("total").textContent = "Total amount: 0$";
}