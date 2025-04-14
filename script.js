
        function updatePrice() {
            var name = document.getElementById('name').value;
            if (name === "") {
                alert("Please enter your name.");
                return;
            }
            const priceDisplay = document.getElementById('price');
            const reason = document.getElementById('reason');
            const selectedPrice = reason.value;
            priceDisplay.textContent = selectedPrice ? `Reason:${selectedPrice}` : '';
            document.getElementById('submit').style.display = selectedPrice ? 'block' : 'none';
           
            
        }

         function form_display(){
            const reason = document.getElementById('reason');
            const selectedReasion = reason.value;
            Name= document.getElementById('name').value
            output_form= document.getElementById('form')
            output_form.innerHTML = `<button id="WhatsApp" onclick="alert('क्या आपने फॉर्म सबमिट किया और पेमेंट सफलता पूर्वक हो गया है | तो आप उसकी स्क्रीन्शोर्ट (screenshort )सेव कर ले और व्हात्साप करेने के लिए ओके पे क्लिक करे ')" class="submit-button button"  style="display:block"><a href=" https://wa.me/+917004928007?text=helo %20 sir %20 i'm%20${Name}%20 and %20 I'm %20 hear %20to%20get %20 advice|solution%20on%${selectedReasion} "  target="_blank">Send payment Screenshort on WhatsApp</a>
            </button><br><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1vSG0M3pnV1mEdvoKJ0bUD_tOru7x1bx7wo1jrSFc6VPAwg/viewform?embedded=true" width="640" height="1199" frameborder="0" marginheight="0" marginwidth="0">Loading…
            </iframe>
        `
          
        }
          
    
    function close_form(){
        output_form= document.getElementById('form')
        output_form.style.display = 'block'
        
    }
    
