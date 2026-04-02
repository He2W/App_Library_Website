const data = [
    {
        "name": "Lucky Goal",
        "imagePath": "./public/game_images/lucky_goal.png",
        "description": "Score based on luck ?",
        "link": "https://play.google.com/store/apps/details?id=com.hehewinter.luckygoal",
        "backgroundColor": "rgb(204, 221, 252)",
        "textColor": "black"
    },
    {
        "name": "Pac-Cans",
        "imagePath": "./public/game_images/pac_cans.png",
        "description": "Don't let it catch you 😰 !",
        "link": "https://hehewinter.itch.io/pac-can",
        "backgroundColor": "black",
        "textColor": "white"
    },
    {
        "name": "Next SmartBrain",
        "imagePath": "./public/game_images/next_smartbrain.png",
        "description": "Emulate next Faiz movie phone interface - Fan made !",
        "link": "https://hehewinter.itch.io/next-smartbrain",
        "backgroundColor": "black",
        "textColor": "white"
    },
    {
        "name": "Spacekill: OFTM",
        "imagePath": "./public/game_images/spacekill.png",
        "description": "Join the short story of a space soldier. Turn-based shooting game genre",
        "link": "#",
        "backgroundColor": "#FF01FF",
        "textColor": "black"
    },
    {
        "name": "XiSJars",
        "imagePath": "./public/game_images/xisjars.png",
        "description": "The principle of 6 savings jars !",
        "link": "#",
        "backgroundColor": "#FF5858",
        "textColor": "black"
    }
]

const get_data = () => {
    var html = ``
    data.forEach(element => {
        html += `
        <a class="item" href="${element.link}" style="background-color: ${element.backgroundColor};color: ${element.textColor};">
            <h1>${element.name}</h1>
            <img
                class="item_image"
                src=${element.imagePath}
                alt="game image" />
            <p>${element.description}</p>
        </a>
    `
    });

    html += `
        <button id="next">></button>
        <button id="prev"><</button>
    `

    return html;
}