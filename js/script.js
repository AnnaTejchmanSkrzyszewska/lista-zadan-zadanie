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

        for (const task of tasks){
            htmlString += `
            <li>
            ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init ();
}