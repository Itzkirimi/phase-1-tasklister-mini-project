document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form#create-task-form")
  const inputDesc = document.querySelector('form > input#new-task-description')

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(inputDesc.value)
  })
});
// delete button
const deleteBtn = document.createElement('button')
deleteBtn.innerText = '❌'
newLi.append(deleteBtn)


//delete button function
deleteBtn.addEventListener("click", (e) => {
  const removingLi = e.target.parentNode
  removingLi.remove()
  newLi.remove()
})