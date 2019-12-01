$(document).ready(function () {

    let name = document.querySelector('#name');
    let code = document.querySelector('#code');
    let address = document.querySelector('#address');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let userName = document.querySelector('#userName');
    //show information
    let tableUsers = document.querySelector('#tableUsers');
    //button to add, delete,edit,save information
    let addUsers = document.querySelector('#addUsers');
    let deleteUsers = document.querySelector('#deleteUsers');
    let editUsers = document.querySelector('#editUsers');
    let saveUsers = document.querySelector('#saveUsers');

    let index = 0;

    let users = JSON.parse(localStorage.getItem('usersData')) || [];
    render(users, tableUsers);

 

    function render(items = [], listItems) {

        listItems.innerHTML = items.map((item, i) => {
            return `<tr>
                <td><input type="checkbox" value="1" data-code ="${item.code}"> </td> 
                
                <td> ${item.code}</td>
                <td> ${item.name}</td>
                <td> ${item.address}</td>
                <td> ${item.email}</td>
                <td> ${item.userName}</td> 
            </tr>`
        }).join('');
        // console.log(xx)

    }
    function addUser() {
        let user = {
            name: name.value,
            code: code.value,
            address: address.value,
            email: email.value,
            password: password.value,
            userName: userName.value
        };
    
        users.push(user);
        render(users, tableUsers);
        localStorage.setItem('usersData', JSON.stringify(users));
        $('#formUser').trigger("reset");
        name.focus();
    }

    function deleteUser() {
        let boxCheck = [];
        document.querySelectorAll('input[data-code]').forEach(item => {
            if (item.checked == true) {
                boxCheck.push(item.dataset.code);
            }
        });
        if (boxCheck.length == 0) {
            alert('Please select more than 1 person');
        }
        else {
            for (let i = 0; i < users.length; i++) {
                for (let j = 0; j < boxCheck.length; j++) {
                    if (users[i].code == boxCheck[j]) {
                        users.splice(i, 1);
                        continue;
                    }
                }
            }
            // console.log(users);
            render(users, tableUsers);
            localStorage.clear();
            localStorage.setItem('usersData', JSON.stringify(users));
        }
    }
    function editUser() {
        let boxCheck = [];
        let editData;
       
        document.querySelectorAll('input[data-code]').forEach(item => {
            if (item.checked == true) {
                boxCheck.push(item.dataset.code);
            }
        });
        if (boxCheck.length != 1) {
            alert('Please select only 1 person');
        }
        else {
            //console.log(boxCheck[0]);
            for (let i = 0; i < users.length; i++) {
                if (users[i].code == boxCheck[0]) {
                   // console.log(users[i]);
                    name.value = users[i].name;
                    code.value = users[i].code;
                    address.value = users[i].address;
                    email.value = users[i].email;
                    userName.value = users[i].userName;
                    password.value = '';
                    index = i;
                    break;
                }
            }
            saveUsers.disabled= false;
           
    
        }
    }
    function saveUser() {

        let newUser = {
            name: name.value,
            code: code.value,
            address: address.value,
            email: email.value,
            password: password.value,
            userName: userName.value
        };
       // console.log(index);
        users.splice(index, 1);
        //console.log(users);
        users.splice(index, 0, newUser);
         //console.log(users);
        localStorage.clear();
        localStorage.setItem('usersData', JSON.stringify(users));
        render(users, tableUsers);
         $('#formUser').trigger("reset");
        name.focus();
        saveUsers.disabled= true;
    }
     // addUsers.addEventListener('click', addUser);
    deleteUsers.addEventListener('click', deleteUser);
    editUsers.addEventListener('click', editUser);
    saveUsers.addEventListener('click', saveUser);
    $('#formUser').submit(function(e){
        e.preventDefault();
    }).validate({
        rules: {

            "name": {
                required: true,
                minlength: 5
            },
            "code": {
                required: true,
                minlength: 4
            },
            "email": {
                required: true
            }

        },
        messages: {
            "name": {
                required: "Name not be emty",
                minlength: "Name greater than 5 characters"
            },
            "code": {
                required: "Code not be emty",
                minlength: "Code greater than 5 characters"
            },
            "email": {
                required: "Email not be emty",
            }

        },
        submitHandler: function() {
            addUser();
        }
    })
});