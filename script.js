const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const tabId = tab.dataset.tab;

        // remove active de todas as abas
        tabs.forEach(t => t.classList.remove("active"));

        // remove active de todos os conteúdos
        contents.forEach(content => content.classList.remove("active"));

        // ativa a aba clicada
        tab.classList.add("active");

        // ativa o conteúdo correspondente
        document
            .querySelector(`.content[data-content="${tabId}"]`)
            .classList.add("active");
    });
});
