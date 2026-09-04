// let taskInput = document.getElementById("taskInput");

// let btn = document.getElementById("addTaskBtn");

// let list = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateEmptyMessage() {
    if(tasks.length === 0){
        $("#emptyMessage").removeClass("hidden");
    }else{
        $("#emptyMessage").addClass("hidden");
    }
}

function updateStats() {
    let total = tasks.length;
    
    let completed = tasks.filter(function(task) {
        return task.completed === true;
    }).length;
    
    let pending = total - completed;

    $("#totalTasks").text("Total: " + total);
    $("#completedTasks").text("Completed: " + completed);
    $("#pendingTasks").text("Pending: " + pending);
}

let currentFilter = "all";

function filterTasks() {
    let searchText = $("#searchInput").val().toLowerCase();
    let visibleTasks = 0;   

    $("#taskList li").each(function() {
        let taskText = $(this).find("span").text().toLowerCase();
        
        let currentTask = tasks.find(function(item) {
            return item.text.toLowerCase() === taskText;
        });

        let searchMatch = taskText.includes(searchText);

        let statusMatch;

        if(currentFilter === "all") {
            statusMatch = true;
        }
        else if(currentFilter === "active") {
            statusMatch = currentTask.completed === false;
        }
        else if(currentFilter === "completed") {
            statusMatch = currentTask.completed === true;
        }

        if(searchMatch && statusMatch) {
            $(this).show();
            visibleTasks++;
        } else {
            $(this).hide();
        }
    });

    if(visibleTasks === 0 && tasks.length > 0) {
        $("#noMatchMessage").removeClass("hidden");
    } else {
        $("#noMatchMessage").addClass("hidden");
    }
}

function createTask(task){
    let taskItem = $("<li></li>");

        let span = $("<span>");
        span.text(task.text);
        span.addClass("font-medium");

        let deleteBtn = $("<button></button>");
        deleteBtn.text("Delete");
        deleteBtn.addClass("bg-white border-blue-700 text-blue-500 hover:bg-red-700 hover:text-white rounded-3xl px-6 p-4 font-semibold ml-7");
        
        deleteBtn.on("click", function() {
            let text = $(this).parent().find("span").text();

            tasks = tasks.filter(function(item) {
                return item.text !== text;
            });

            localStorage.setItem("tasks", JSON.stringify(tasks));
            $(this).parent().remove();
            updateStats();
            updateEmptyMessage();
            filterTasks();
        });


        let completeBtn = $("<button></button>");
        completeBtn.text("Complete");
        completeBtn.addClass("bg-white border-blue-700 text-blue-500 hover:bg-green-700 hover:text-white rounded-3xl px-6 p-4 font-semibold ml-7 ");

        if(task.completed) {
            taskItem.addClass("line-through opacity-50");
            completeBtn.text("Undo");
        }

        completeBtn.on("click", function() {
            $(this).parent().toggleClass("line-through opacity-50");

            let text = $(this).parent().find("span").text();

            let currentTask = tasks.find(function(item) {
                return item.text.toLowerCase() === text.toLowerCase();
            });

            
            if($(this).parent().hasClass("line-through")){
                $(this).text("Undo");
                currentTask.completed = true;
            }
            else {
                $(this).text("Complete");
                currentTask.completed = false;
            }
            localStorage.setItem("tasks", JSON.stringify(tasks));
            updateStats();
            filterTasks();
        })

        
        taskItem.append(span);
        taskItem.append(deleteBtn);
        taskItem.append(completeBtn);
        $("#taskList").append(taskItem);

}


function addTask() {
    
    let taskInput = $("#taskInput").val().trim();

    if(taskInput === ""){
        alert("Please enter a task");
    }else {
        
        let newTask = {
            text: taskInput,
            completed: false
        };
        
        tasks.push(newTask);
        
        createTask(newTask);
        
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        $("#taskInput").val("");
    }
    updateStats();
    updateEmptyMessage();
    filterTasks();
}

$("#addTaskBtn").on("click", function() {
    addTask();
});

$("#taskInput").on("keydown", function(event) {

    if(event.key === "Enter") {
        addTask();
    }

});


function loadTasks() {
    tasks.forEach(function(task) {
        createTask(task);
    });
    updateStats();
    updateEmptyMessage();
}

$("#searchInput").on("input", function() {
    // let searchText = $(this).val().toLowerCase();

    // $("#taskList li").each(function() {
    //     let taskText = $(this).find("span").text().toLowerCase();
    //     if(taskText.includes(searchText)) {
    //         $(this).show();
    //     }else {
    //         $(this).hide();
    //     }
    // });

    filterTasks();
})

// $("#allBtn").on("click", function() {
//     $("#taskList li").show();
//     currentFilter = "all";

//     $("#allBtn, #activeBtn, #completedBtn").removeClass("bg-blue-700 text-white");
//     $(this).addClass("bg-blue-700 text-white");

//     filterTasks();
// })


// $("#activeBtn").on("click", function() {

//     $("#taskList li").each(function() {

//         let text = $(this).find("span").text();

//         let currentTask = tasks.find(function(item) {
//             return item.text === text;
//         });

//         if(currentTask.completed === false) {
//             $(this).show();
//         } else {
//             $(this).hide();
//         }

//     });

//     currentFilter = "active";

//     $("#allBtn, #activeBtn, #completedBtn").removeClass("bg-blue-700 text-white");
//     $(this).addClass("bg-blue-700 text-white");

//     filterTasks();
// });

// $("#completedBtn").on("click", function() {

//     $("#taskList li").each(function() {

//         let text = $(this).find("span").text();

//         let currentTask = tasks.find(function(item) {
//             return item.text === text;
//         });

//         if(currentTask.completed === true) {
//             $(this).show();
//         } else {
//             $(this).hide();
//         }

//     });

//     currentFilter = "completed";

//     $("#allBtn, #activeBtn, #completedBtn").removeClass("bg-blue-700 text-white");
//     $(this).addClass("bg-blue-700 text-white");

//     filterTasks();
// });


function setActiveFilter(button) {

    $("#allBtn, #activeBtn, #completedBtn")
        .removeClass("bg-blue-700 text-white")
        .addClass("bg-white text-blue-500");

    $(button)
        .removeClass("bg-white text-blue-500")
        .addClass("bg-blue-700 text-white");
}


$("#allBtn").on("click", function() {

    currentFilter = "all";

    setActiveFilter(this);

    filterTasks();
});


$("#activeBtn").on("click", function() {

    currentFilter = "active";

    setActiveFilter(this);

    filterTasks();
});


$("#completedBtn").on("click", function() {

    currentFilter = "completed";

    setActiveFilter(this);

    filterTasks();
});


setActiveFilter("#allBtn");

loadTasks();




