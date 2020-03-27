console.log("user is signed in");

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        document.getElementById('text-email').innerHTML = user.email;
        var user = firebase.auth().currentUser; //Checks user ID
        var uid = user.uid; //Acquires unique user ID, which is used by the database to hold medical information

        const dayChosen = document.getElementById('dayChosen');
        const medicationName = document.getElementById('medicationName');
        const timeChosen = document.getElementById('timeChosen');
        const quantity = document.getElementById('quantity');

        const addBtn = document.getElementById('addBtn');

        const database = firebase.database();

        addBtn.addEventListener('click', e => {
            e.preventDefault();

            if (dayChosen.value == "All Days"){
                console.log("hi there");

                var rootRef = database.ref('/' + uid + '/' + "Monday" + '/' + timeChosen.value + '/' + 'MedicationStored');
                autoID = rootRef.push().key
                rootRef.child(autoID).set({
                    ///database.ref(rootRef).set({ 
                    medicationName: medicationName.value,
                    quantity: quantity.value
                });

                rootRef = database.ref('/' + uid + '/' + "Tuesday" + '/' + timeChosen.value + '/' + 'MedicationStored');
                autoID = rootRef.push().key
                rootRef.child(autoID).set({
                    ///database.ref(rootRef).set({ 
                    medicationName: medicationName.value,
                    quantity: quantity.value
                });

                rootRef = database.ref('/' + uid + '/' + "Wednesday" + '/' + timeChosen.value + '/' + 'MedicationStored');
                autoID = rootRef.push().key
                rootRef.child(autoID).set({
                    ///database.ref(rootRef).set({ 
                    medicationName: medicationName.value,
                    quantity: quantity.value
                });

                rootRef = database.ref('/' + uid + '/' + "Thursday" + '/' + timeChosen.value + '/' + 'MedicationStored');
                autoID = rootRef.push().key
                rootRef.child(autoID).set({
                    ///database.ref(rootRef).set({ 
                    medicationName: medicationName.value,
                    quantity: quantity.value
                });

                rootRef = database.ref('/' + uid + '/' + "Friday" + '/' + timeChosen.value + '/' + 'MedicationStored');
                autoID = rootRef.push().key
                rootRef.child(autoID).set({
                    ///database.ref(rootRef).set({ 
                    medicationName: medicationName.value,
                    quantity: quantity.value
                });

                rootRef = database.ref('/' + uid + '/' + "Saturday" + '/' + timeChosen.value + '/' + 'MedicationStored');
                autoID = rootRef.push().key
                rootRef.child(autoID).set({
                    ///database.ref(rootRef).set({ 
                    medicationName: medicationName.value,
                    quantity: quantity.value
                });

                rootRef = database.ref('/' + uid + '/' + "Sunday" + '/' + timeChosen.value + '/' + 'MedicationStored');
                autoID = rootRef.push().key
                rootRef.child(autoID).set({
                    ///database.ref(rootRef).set({ 
                    medicationName: medicationName.value,
                    quantity: quantity.value
                });

                
            }
            else{

                var rootRef = database.ref('/' + uid + '/' + dayChosen.value + '/' + timeChosen.value + '/' + 'MedicationStored');
                autoID = rootRef.push().key
                rootRef.child(autoID).set({
                    ///database.ref(rootRef).set({ 
                    medicationName: medicationName.value,
                    quantity: quantity.value
                });

            }
            
            
            window.alert("Medication Added");
        });
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