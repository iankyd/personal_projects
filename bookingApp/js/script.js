$(document).ready(function(){

    var noTickets;
    var inputDate;

    // Function: Returns Today's Date In 'YYYY-MM-DD' Format
    function getCurrentDate(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10)
        {
            dd='0'+dd;
        } 
        if(mm<10)
        {
            mm='0'+mm;
        } 
        return today = yyyy+'-'+mm+'-'+dd;
    }

    // Function: Create Theater
    function createTheater() {
        $('div#theater').append('<ul class="seats"></ul>');
        
        for(var seat = 1; seat <=100; seat++){
            $("div#theater > ul").append(`<li class="seat" seatNumber="${seat}">SeatNo-${seat}</li>`);
        }
        $('div#theater').show();
        addListenerToSeat();
    }
    //Function: change seat color on click
    function addListenerToSeat(){
        $('li.seat').click(function(){
          let  seatTemp= $('li.seat').attr('seatNumber');
            alert(seatTemp);
            $('li[seatnumber="seatTemp"]').css("background-color","grey");
        });
    }


    // Function: Validate User Input
    function validateUserInput() {
        let status = true;
        $('div#userDetails > div > input.username').each(function(){
            var username = $(this).val();
            if(username == ''){
                alert('Nam bhar ma****...');
                status = false;
            }
        });
        return status;
    }

    function createUserDetailsElement() {
        for(var user  = 1; user <= noTickets; user++){
            var userDetailsNode = `<div id="user-${user}">
                                    <p>Fill user - ${user} Details</p>
                                    <input class="username" id="user-${user}-name" type="text" name="name" placeholder="Name"></input>
                                    <input class="useremail" id="user-${user}-email" name="email" type="text" placeholder="Email"></input>
                                    <input class="usermobile" id="user-${user}-number" name="number" type="number" placeholder="Mobile"></input>
                                    </div>`
            $('div#userDetails').append(userDetailsNode);
        }
        var submitUserDetailsBtn = `<button id="submitUserDetails">Submit</button>`;
        $('div#userDetails').append(submitUserDetailsBtn);
        $("div#userDetails").show();

        $('button#submitUserDetails').click(function(){
            const validate = validateUserInput();
            if(validate){
                createTheater();
                $("div#userDetails").hide();
            }
        });
    }
    // Adding Minium Attribute To Date Picker Element
    $('input#date').attr('min', getCurrentDate());
    $('input#date').attr('value', getCurrentDate());

    $("button#getTicketsNo").click(function(){
        noTickets = $('select#noTickets').val();
        $('div.tickets').hide();
        $('div.date').show();
    });

    $("button#getDate").click(function(){
        inputDate = $('input#date').val();
        $('div.date').hide();
        createUserDetailsElement();
    });

});