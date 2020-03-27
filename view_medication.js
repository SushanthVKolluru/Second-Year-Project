firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.

        document.getElementById('text-email').innerHTML = user.email;
        const database = firebase.database();
        var user = firebase.auth().currentUser; //Checks user ID
        
        const MondayMorningList = document.querySelector('#MondayMorningList');
        const MondayMiddayList = document.querySelector('#MondayMiddayList');
        const MondayAfternoonList = document.querySelector('#MondayAfternoonList');
        const MondayEveningList = document.querySelector('#MondayEveningList');

        const TuesdayMorningList = document.querySelector('#TuesdayMorningList');
        const TuesdayMiddayList = document.querySelector('#TuesdayMiddayList');
        const TuesdayAfternoonList = document.querySelector('#TuesdayAfternoonList');
        const TuesdayEveningList = document.querySelector('#TuesdayEveningList');

        const WednesdayMorningList = document.querySelector('#WednesdayMorningList');
        const WednesdayMiddayList = document.querySelector('#WednesdayMiddayList');
        const WednesdayAfternoonList = document.querySelector('#WednesdayAfternoonList');
        const WednesdayEveningList = document.querySelector('#WednesdayEveningList');

        const ThursdayMorningList = document.querySelector('#ThursdayMorningList');
        const ThursdayMiddayList = document.querySelector('#ThursdayMiddayList');
        const ThursdayAfternoonList = document.querySelector('#ThursdayAfternoonList');
        const ThursdayEveningList = document.querySelector('#ThursdayEveningList');

        const FridayMorningList = document.querySelector('#FridayMorningList');
        const FridayMiddayList = document.querySelector('#FridayMiddayList');
        const FridayAfternoonList = document.querySelector('#FridayAfternoonList');
        const FridayEveningList = document.querySelector('#FridayEveningList');

        const SaturdayMorningList = document.querySelector('#SaturdayMorningList');
        const SaturdayMiddayList = document.querySelector('#SaturdayMiddayList');
        const SaturdayAfternoonList = document.querySelector('#SaturdayAfternoonList');
        const SaturdayEveningList = document.querySelector('#SaturdayEveningList');

        const SundayMorningList = document.querySelector('#SundayMorningList');
        const SundayMiddayList = document.querySelector('#SundayMiddayList');
        const SundayAfternoonList = document.querySelector('#SundayAfternoonList');
        const SundayEveningList = document.querySelector('#SundayEveningList');

        notificationTime(database, user, "Monday", "Morning", "MondayMorningTime");
        notificationTime(database, user, "Monday", "Midday", "MondayMiddayTime");
        notificationTime(database, user, "Monday", "Afternoon", "MondayAfternoonTime");
        notificationTime(database, user, "Monday", "Evening", "MondayEveningTime");

        notificationTime(database, user, "Tuesday", "Morning", "TuesdayMorningTime");
        notificationTime(database, user, "Tuesday", "Midday", "TuesdayMiddayTime");
        notificationTime(database, user, "Tuesday", "Afternoon", "TuesdayAfternoonTime");
        notificationTime(database, user, "Tuesday", "Evening", "TuesdayEveningTime");

        notificationTime(database, user, "Wednesday", "Morning", "WednesdayMorningTime");
        notificationTime(database, user, "Wednesday", "Midday", "WednesdayMiddayTime");
        notificationTime(database, user, "Wednesday", "Afternoon", "WednesdayAfternoonTime");
        notificationTime(database, user, "Wednesday", "Evening", "WednesdayEveningTime");

        notificationTime(database, user, "Thursday", "Morning", "ThursdayMorningTime");
        notificationTime(database, user, "Thursday", "Midday", "ThursdayMiddayTime");
        notificationTime(database, user, "Thursday", "Afternoon", "ThursdayAfternoonTime");
        notificationTime(database, user, "Thursday", "Evening", "ThursdayEveningTime");

        notificationTime(database, user, "Friday", "Morning", "FridayMorningTime");
        notificationTime(database, user, "Friday", "Midday", "FridayMiddayTime");
        notificationTime(database, user, "Friday", "Afternoon", "FridayAfternoonTime");
        notificationTime(database, user, "Friday", "Evening", "FridayEveningTime");

        notificationTime(database, user, "Saturday", "Morning", "SaturdayMorningTime");
        notificationTime(database, user, "Saturday", "Midday", "SaturdayMiddayTime");
        notificationTime(database, user, "Saturday", "Afternoon", "SaturdayAfternoonTime");
        notificationTime(database, user, "Saturday", "Evening", "SaturdayEveningTime");

        notificationTime(database, user, "Sunday", "Morning", "SundayMorningTime");
        notificationTime(database, user, "Sunday", "Midday", "SundayMiddayTime");
        notificationTime(database, user, "Sunday", "Afternoon", "SundayAfternoonTime");
        notificationTime(database, user, "Sunday", "Evening", "SundayEveningTime");
        
        viewMed(database, user, "Monday", "Morning", "MondayMorningHasMedication", MondayMorningList);
        viewMed(database, user, "Monday", "Midday", "MondayMiddayHasMedication", MondayMiddayList);
        viewMed(database, user, "Monday", "Afternoon", "MondayAfternoonHasMedication", MondayAfternoonList);
        viewMed(database, user, "Monday", "Evening", "MondayEveningHasMedication", MondayEveningList);

        viewMed(database, user, "Tuesday", "Morning", "TuesdayMorningHasMedication", TuesdayMorningList);
        viewMed(database, user, "Tuesday", "Midday", "TuesdayMiddayHasMedication", TuesdayMiddayList);
        viewMed(database, user, "Tuesday", "Afternoon", "TuesdayAfternoonHasMedication", TuesdayAfternoonList);
        viewMed(database, user, "Tuesday", "Evening", "TuesdayEveningHasMedication", TuesdayEveningList);

        viewMed(database, user, "Wednesday", "Morning", "WednesdayMorningHasMedication", WednesdayMorningList);
        viewMed(database, user, "Wednesday", "Midday", "WednesdayMiddayHasMedication", WednesdayMiddayList);
        viewMed(database, user, "Wednesday", "Afternoon", "WednesdayAfternoonHasMedication", WednesdayAfternoonList);
        viewMed(database, user, "Wednesday", "Evening", "WednesdayEveningHasMedication", WednesdayEveningList);

        viewMed(database, user, "Thursday", "Morning", "ThursdayMorningHasMedication", ThursdayMorningList);
        viewMed(database, user, "Thursday", "Midday", "ThursdayMiddayHasMedication", ThursdayMiddayList);
        viewMed(database, user, "Thursday", "Afternoon", "ThursdayAfternoonHasMedication", ThursdayAfternoonList);
        viewMed(database, user, "Thursday", "Evening", "ThursdayEveningHasMedication", ThursdayEveningList);

        viewMed(database, user, "Friday", "Morning", "FridayMorningHasMedication", FridayMorningList);
        viewMed(database, user, "Friday", "Midday", "FridayMiddayHasMedication", FridayMiddayList);
        viewMed(database, user, "Friday", "Afternoon", "FridayAfternoonHasMedication", FridayAfternoonList);
        viewMed(database, user, "Friday", "Evening", "FridayEveningHasMedication", FridayEveningList);

        viewMed(database, user, "Saturday", "Morning", "SaturdayMorningHasMedication", SaturdayMorningList);
        viewMed(database, user, "Saturday", "Midday", "SaturdayMiddayHasMedication", SaturdayMiddayList);
        viewMed(database, user, "Saturday", "Afternoon", "SaturdayAfternoonHasMedication", SaturdayAfternoonList);
        viewMed(database, user, "Saturday", "Evening", "SaturdayEveningHasMedication", SaturdayEveningList);

        viewMed(database, user, "Sunday", "Morning", "SundayMorningHasMedication", SundayMorningList);
        viewMed(database, user, "Sunday", "Midday", "SundayMiddayHasMedication", SundayMiddayList);
        viewMed(database, user, "Sunday", "Afternoon", "SundayAfternoonHasMedication", SundayAfternoonList);
        viewMed(database, user, "Sunday", "Evening", "SundayEveningHasMedication", SundayEveningList);

    } else {
        // No user is signed in.
        document.getElementById('login-ul').style.display = "none";
        window.alert("Please sign in to view this page:");
        window.location.href = 'login.html';
    }
});


function logout() {
    firebase.auth().signOut();
}

function notificationTime(database, user, day, timeOfDay, DOMRef) {
    var uid = user.uid;
    var ref = database.ref('/' + uid + '/' + day + '/' + timeOfDay);

    ref.on("value", function (snapshot) {

        var hour = snapshot.val().Hour;
        var minute = snapshot.val().Minute;
        if (minute == 0) {
            var minute = "00";
        }
        if (minute == 1) {
            var minute = "02";
        }
        if (minute == 2) {
            var minute = "02";
        }
        if (minute == 3) {
            var minute = "03";
        }
        if (minute == 4) {
            var minute = "04";
        }
        if (minute == 5) {
            var minute = "05";
        }
        if (minute == 6) {
            var minute = "06";
        }
        if (minute == 7) {
            var minute = "07";
        }
        if (minute == 8) {
            var minute = "08";
        }
        if (minute == 9) {
            var minute = "09";
        }

        if(hour == 0){
            var hour = "00";
        }
        if (hour == 1) {
            var hour = "02";
        }
        if (hour == 2) {
            var hour = "02";
        }
        if (hour == 3) {
            var hour = "03";
        }
        if (hour == 4) {
            var hour = "04";
        }
        if (hour == 5) {
            var hour = "05";
        }
        if (hour == 6){
            var hour = "06";
        }
        if (hour == 7) {
            var hour = "07";
        }
        if(hour == 8){
            var hour = "08";
        }
        if(hour == 9){
            var hour = "09";
        }

        var timeOutput = "Notification Time: " + hour + " : " + minute;
        document.getElementById(DOMRef).innerHTML = timeOutput;
    });

}

function viewMed(database, user, day, timeOfDay, DOMIfEmpty, DOMIfFull) {

    var uid = user.uid;
    var ref = database.ref('/' + uid + '/' + day + '/' + timeOfDay);
    var medOutput;

    ref.on("value", function (snapshot) {

        var isStored = snapshot.child("MedicationStored").hasChildren();

        if (isStored) {

            snapshot.child("MedicationStored").forEach(function (childSnapshot) {

                //console.log(childSnapshot.key);

                let li = document.createElement('li');
                li.className = "list-group-item";
                let name = document.createElement('span');
                name.style.display = "block";
                let quantity = document.createElement('span');

                let cross = document.createElement('button');
                cross.className = "close";
                cross.type = "button";


                li.setAttribute('data-id', childSnapshot.key);

                name.textContent = childSnapshot.val().medicationName;

                quantity.textContent = "Quantity: " + childSnapshot.val().quantity;
                cross.textContent = 'x';

                li.appendChild(name);
                li.appendChild(quantity);
                li.appendChild(cross);

                DOMIfFull.appendChild(li);

                //deleting data:
                cross.addEventListener('click', (e) => {

                    e.stopPropagation();

                    var response = window.confirm("Press ok to confirm you want to delete this medication:");
                    if (response) {

                        while (DOMIfFull.firstChild) {
                            DOMIfFull.removeChild(DOMIfFull.lastChild);
                        }

                        let id = e.target.parentElement.getAttribute('data-id');

                        var deleteRef = database.ref('/' + uid + '/' + day + '/' + timeOfDay + "/MedicationStored/" + id);
                        console.log(deleteRef);
                        deleteRef.remove();
                    }
                })
            });
        }
        else {
            medOutput = "No medication is being stored in this box."
            document.getElementById(DOMIfEmpty).innerHTML = medOutput;
        }
        
    });

}