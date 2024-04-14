let gettitle = document.getElementById("title");
let getdescription = document.getElementById("description");
let getContact = document.getElementById("contact");

// Retrieve todo list from localStorage or initialize as an empty array
let todos = JSON.parse(localStorage.getItem("todo_items")) || [];

// Display the existing todo list
console.log(todos);

let submitHandler = () => {
  const list = {
    title: gettitle.value,
    description: getdescription.value,
    contact: getContact.value,
  };

  // Push the new item into the todos array
  todos.push(list);

  // Store the updated todos array back into localStorage
  localStorage.setItem("todo_items", JSON.stringify(todos));

  window.reload();
};

let display = document.getElementById("list");
todos.map((item, index) => {
  return (display.innerHTML += `<div class="bg-orange-100 p-2 w-80 text-gray-900">
  <h2 class="font-bold bg-orange-200 p-2">${item.title} </h2>
  <P class="p-2 "> ${item.description}</p>
  <div class="flex justify-between p-2 font-bold ">
  <P class=""> ${item.contact}</p>
  <button class="text-red-700 font-bold font-mono text-2xl border border-gray-300 px-2 rounded-md hover:bg-gray-800 duration-500"  onclick="delHandler(${index})">x</button>
 
  </div>
 </div>
  `);
});
let delHandler = (id) => {
  todos.splice(id, 1);
  localStorage.setItem("todo_items", JSON.stringify(todos));

  setTimeout(() => {
    location.reload();
  }, 1000);
};


// // edit candidate
// let editHandler = (id) => {
//     gettitle.value = todos[id].name;
//     getdescription.value = todos[id].description;
//   };
