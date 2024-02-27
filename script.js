// to expand the boxes when radio button is clicked

document.addEventListener("DOMContentLoaded", function() {
    const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Hide all size and color options
            document.querySelectorAll('.unit2_flex2').forEach(div => {
                div.style.display = 'none';
            });
            // Show size and color options for the selected unit
            if (this.checked) {
                this.closest('.unit2class').querySelector('.unit2_flex2').style.display = 'block';c
            }
        });
    });

    // Initially trigger change on checked input to display its options
    document.querySelector('input[type="radio"][name="unit"]:checked').dispatchEvent(new Event('change'));
});



// <!-- to add color -->

    document.addEventListener('DOMContentLoaded', function() {
        const radioButtons = document.querySelectorAll('.unit2class input[type="radio"]');
    
        radioButtons.forEach(function(radio) {
            radio.addEventListener('click', function() {
                // Remove pink borders from all units
                document.querySelectorAll('.unit2class').forEach(function(unit) {
                    unit.classList.remove('unit1_class');
                });
    
                // Add pink border to the current unit's parent .unit2class container
                this.closest('.unit2class').classList.add('unit1_class');
            });
        });
    });
   
