function showCard() {
  let name = document.getElementById("userName").value;
  let age = document.getElementById("userAge").value;
  let email = document.getElementById("userEmail").value;
  let position = document.getElementById("userPosition").value;
  document.getElementById("card").innerHTML = `<div
            class="bg-white border border-gray-200 rounded-lg shadow-sm py-8"
          >
            <div class="flex flex-col gap-1 items-center">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900">${name}</h5>
              <span class="text-sm text-gray-500">Age: ${age}</span
              ><span class="text-sm text-gray-500">Email: ${email}</span
              ><span class="text-sm text-gray-500">Position: ${position}</span>
            </div>`;
}
