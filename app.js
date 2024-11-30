// To store our data in the browse we use localstorage
function storeTask() {
    localStorage.setItem("data", list.innerHTML)
}



const input = document.getElementById('input-box')
const list = document.getElementById('list')



// this function is run when we click on button
function addTask() {
    if (input.value == "") {
        alert("Add Your Task")

    }

    else {
        let a = document.createElement('li')   //yha par list create hogi (mtlb task add hoga new ....click krne par)
        a.innerHTML = input.value
        list.appendChild(a)

        //for deleting the task
        let b = document.createElement('span')
        b.innerHTML = '\u00d7'                             //u00d7 multiply sign ka unicode hai (jisko we are using as an icon to remove task from list)
        a.appendChild(b)
    }

    input.value = ""              //likhne k badd task automatically text remove ho jaye button se

    storeTask()
}





//this function is for checked and unchecked the list items and remove the task from list
let x = function (e) {

    //this is for toggle (whether check or unchek )
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')

        storeTask()
    }

    //this is for remove task from list
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()

        storeTask()
    }

}

list.addEventListener('click', x)



// function to show the store task in the browser
function showTask() {
    list.innerHTML = localStorage.getItem("data")
}

showTask()











