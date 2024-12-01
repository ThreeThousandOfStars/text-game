// 游戏状态
let gameState = {};

// 游戏故事情节
const storyNodes = {
    start: {
        text: "你站在一片森林中。你可以选择前进或返回。",
        options: [
            { text: "前进", nextNode: "forestPath" },
            { text: "返回", nextNode: "village" }
        ]
    },
    forestPath: {
        text: "你沿着小路前进，发现了一只睡着的巨龙。你要做什么？",
        options: [
            { text: "悄悄绕过它", nextNode: "treasure" },
            { text: "攻击巨龙", nextNode: "dragonFight" }
        ]
    },
    village: {
        text: "你回到了村庄。这里一切都很平静。",
        options: [
            { text: "重新进入森林", nextNode: "start" }
        ]
    },
    treasure: {
        text: "你成功绕过了巨龙，发现了一堆宝藏！游戏结束。",
        options: []
    },
    dragonFight: {
        text: "巨龙被惊醒了，它一口气将你喷成了灰烬。游戏结束。",
        options: []
    }
};

// 初始化游戏
function startGame() {
    gameState.currentNode = "start";
    showNode(gameState.currentNode);
}

// 显示当前节点内容
function showNode(nodeKey) {
    const node = storyNodes[nodeKey];
    const textElement = document.getElementById("game-text");
    const optionsElement = document.getElementById("options");

    textElement.textContent = node.text;
    optionsElement.innerHTML = ""; // 清空旧选项

    node.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.className = "option";
        button.onclick = () => showNode(option.nextNode);
        optionsElement.appendChild(button);
    });
}

// 启动游戏
startGame();
