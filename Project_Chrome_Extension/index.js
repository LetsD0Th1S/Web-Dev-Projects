const inputEl = document.querySelector("#input-el")
const addBtnEl = document.querySelector("#input-btn")
const deleteBtnEl = document.querySelector("#delete-btn")
const saveBtnEl = document.querySelector("#save-btn")
const ulEl = document.querySelector("#ul-el")

let myLeads = []
let savedLeads = []
const getLocalLeads = JSON.parse(localStorage.getItem("myLeads"))


if (getLocalLeads){
   myLeads = getLocalLeads
   render(myLeads)
}

function render(leads){
   ulEl.innerHTML = ''
   for (i = 0; i < leads.length; i++){
      let listItem = document.createElement("li")
      let anchorItem = document.createElement("a")
      let myLead = leads[i]
      anchorItem.setAttribute("href",`https://${myLead}`)
      anchorItem.setAttribute("target","_blank")
         anchorItem.textContent = myLead
         listItem.appendChild(anchorItem)
         ulEl.appendChild(listItem)
   }
}

// Button used to save the link that you insert into the input field
addBtnEl.addEventListener("click", function(){
   if(!myLeads.includes(inputEl.value)){
      myLeads.push(inputEl.value)
      localStorage.setItem("myLeads",JSON.stringify(myLeads))
      render(myLeads)
   }
   else{
      alert(` The provided link "${inputEl.value}" already exists`)
   }
   inputEl.value = ''
})

// Button used to save tabs of the current chrome window
saveBtnEl.addEventListener("click", function (){
   
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads",JSON.stringify(myLeads))
      render(myLeads)
   })
})

// Button used to clear any links that were previously stored
deleteBtnEl.addEventListener("dblclick",function(){
   localStorage.clear()
   myLeads = []
   ulEl.innerHTML = ''
}
)





