// Inisialisasi elemen
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Fungsi untuk menambahkan tugas
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Anda belum memasukkan task");
        return;
    }

    // Buat elemen list item baru
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Tombol edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function() {
        const newTaskText = prompt("Masukkan Task", span.textContent);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            span.textContent = newTaskText;
        } else {
            alert("Task tidak boleh kosong");
        }
    });

    // Tambah tombol hapus dan edit ke item list
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Tambah item ke task list
    taskList.appendChild(li);

    // Kosongkan input
    taskInput.value = "";
});
