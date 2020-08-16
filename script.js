window.addEventListener('load', function() {
    
    const btnDropdown = document.getElementById('btn-dropdown');
    const dropdownContent = document.getElementById('dropdown-content');

    btnDropdown.addEventListener('click', function() {

        let displayValue = dropdownContent.style.visibility;
        
        if(displayValue == "hidden") {
            dropdownContent.style.visibility = "visible";
        } else {
            dropdownContent.style.visibility = "hidden";
        }
         
    });


});
