{
    const tasks = [
        {
            content: "zrobic zadanie",
            done: false,
        },
        {
            content: "zjesc drugie sniadanie",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li
             class="list__item${task.done ? "list__item list__item--done" : "list__item"}"
            >
            <button class="js-done buttonDone">${task.done ? "✔" : ""}</button>
            ${task.content}
            <button class="js-remove buttonRemove"></button>
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const toggleDoneTask = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }


    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleDoneTask(index);    
            });
        });
    }

        const removeTask = (taskIndex) => {
            tasks.splice(taskIndex, 1);

            render();
        }

        const onFormSubmit = (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }

            addNewTask(newTaskContent);
        };

        const init = () => {
            render();

            const form = document.querySelector(".js-form");

            form.addEventListener("submit", onFormSubmit);
        };

        init();
    }