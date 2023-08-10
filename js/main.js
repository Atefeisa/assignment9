var nameInput = document.getElementById("name")
var urlInput = document.getElementById("url")
var submitBtn = document.getElementById("submitBtn")
var closeBtn = document.getElementById("closeBtn")

var bookMarks = []
currentIndex = 0






if (localStorage.getItem("dataList") != null) {
  bookMarks = JSON.parse(localStorage.getItem("dataList"))
  displayMark()
}



function addMark() {
if(checkName() == true && checkUrl() == true){
  var mark = {
    name: nameInput.value,
    url: urlInput.value,
  }

  bookMarks.push(mark)
  localStorage.setItem("dataList", JSON.stringify(bookMarks))
  displayMark()
  clearMark()

}else{
  document.querySelector("#boxModal").style.display = "block"
}
}





function displayMark() {
  var temp = ""
  for (var i = 0; i < bookMarks.length; i++) {
    temp += `<tr>

             <td>`+ i + `</td>

            <td>`+ bookMarks[i].name + `</td>
            <td>
                <a target="_blank" href="`+ bookMarks[i].url + `" class="btn btn-outline-primary"> Visit</a>
            </td>
            <td>
    
                <button onclick="deleteMark(`+ i + `)" class="btn btn-outline-danger">Delete</button>
            </td>
        </tr>`
  }
  document.getElementById("tableBody").innerHTML = temp
}




function deleteMark(index) {
  bookMarks.splice(index, 1)
  localStorage.setItem("dataList", JSON.stringify(bookMarks))
  displayMark()

}


function clearMark() {
  nameInput.value = ""
  urlInput.value = ""

}

















//------------------- VALIDATION--------------- 

nameInput.addEventListener("blur", checkName)

function checkName(){
  var regexname = /^\w{3,}(\s+\w+)*$/;

  if (regexname.test(nameInput.value) == true) {
    nameInput.classList.add("is-valid")
    nameInput.classList.remove("is-invalid")
    return true
  } else {
    nameInput.classList.add("is-invalid")
    nameInput.classList.remove("is-valid")
    return false
  }

}


 

urlInput.addEventListener("blur", checkUrl)

function  checkUrl() {
   var regexsite = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

  if (regexsite.test(urlInput.value) == true) {
    urlInput.classList.add("is-valid")
    urlInput.classList.remove("is-invaild")
    return true
  } else {
    urlInput.classList.add("is-invalid")
    urlInput.classList.remove("is-valid")
    return false
  }

}








closeBtn.addEventListener("click", closeModal)
function closeModal() {
  boxModal.style.display = "none"

}

boxModal.addEventListener('click', function (e) {
  if (e.target.getAttribute('id') == 'boxModal') {
    closeModal()
  }
})

document.addEventListener('keyup', function (e) {
  console.log(e.key);
  if (e.key == 'Escape') {
    closeModal()
  }
})















