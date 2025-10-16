
//menu
document.addEventListener("DOMContentLoaded", function () {
    // --- Refatoração do MENU ---
    const menuIcon = document.querySelector("#icon-menu img");
    const menuColuna = document.getElementById("coluna1-menu");
    const links = document.querySelectorAll("#linkSobreMim, #linkpRealizado, #linkskill, #coluna1-menu li");

    const sections = {
        sobreMim: document.getElementById("sobreMim"),
        pRealizado: document.getElementById("pRealizado"),
        skill: document.getElementById("skill")
    };

    if (window.innerWidth <= 768) {
        Object.values(sections).forEach(sec => sec.style.display = "none");
        sections.sobreMim.style.display = "block";
    }
    menuIcon.addEventListener("click", () => {
        menuColuna.classList.toggle("show");
    });


    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = link.getAttribute("data-target");

            // Oculta todas as seções
            Object.values(sections).forEach(sec => sec.style.display = "none");

            // Mostra a seção alvo
            if (sections[target]) {
                sections[target].style.display = "block";
            }
            if (window.innerWidth <= 768) {
                menuColuna.classList.remove("show");
            }
        });
    });
    document.addEventListener("click", function (event) {
        if (
            window.innerWidth <= 768 &&
            !menuColuna.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            menuColuna.classList.remove("show");
        }
    });

    //contato e curriculo
    const contatoLink = document.getElementById("contato");
    const modal = document.getElementById("modalQrContato");
    const closeBtn = modal.querySelector(".close-btn");

    contatoLink.addEventListener("click", function (event) {
        modal.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    // Também fecha o modal se clicar fora do conteúdo (no fundo)
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
    //descrição projetos
    const descricaoTcc = document.getElementById("tccLink");
    const descModalTccLink = document.getElementById("descModalTcc");
    const closeBtnTcc = descModalTccLink.querySelector(".closeTcc-btn");

    descricaoTcc.addEventListener("click", function (event) {
        descModalTccLink.classList.remove("hiddenTcc");
    });

    closeBtnTcc.addEventListener("click", function () {
        descModalTccLink.classList.add("hiddenTcc");
    });

    //descrição app desktop segurança vip
    const descricaoAppDesktop = document.getElementById("appDesktopLink");
    const descModalAppDesktop = document.getElementById("descModalAppDesktop");
    const closeBtnAppDesktop = descModalAppDesktop.querySelector(".closeAppDesktop-btn");
    descricaoAppDesktop.addEventListener("click", function (event) {
        descModalAppDesktop.classList.remove("hiddenAppDesktop");
    });

    closeBtnAppDesktop.addEventListener("click", function () {
        descModalAppDesktop.classList.add("hiddenAppDesktop");
    });

    //descrição site segurança vip
    const descSiteSeguranca = document.getElementById("siteSegurancaLink");
    const descModalSiteSeguranca = document.getElementById("descModalSiteSeguranca");
    const closeBtnSiteSeguranca = descModalSiteSeguranca.querySelector(".closeSiteSeguranca-btn");
    descSiteSeguranca.addEventListener("click", function (event) {
        descModalSiteSeguranca.classList.remove("hiddenSiteSeguranca");
    });

    closeBtnSiteSeguranca.addEventListener("click", function () {
        descModalSiteSeguranca.classList.add("hiddenSiteSeguranca");
    });
    //descrição site To conecta
    const descSiteToConecta = document.getElementById("siteToConectaLink");
    const descModalSiteToConecta = document.getElementById("descModalSiteToConecta");
    const closeBtnSiteToConecta = descModalSiteToConecta.querySelector(".closeSiteToConecta-btn");
    descSiteToConecta.addEventListener("click", function (event) {
        descModalSiteToConecta.classList.remove("hiddenSiteToConecta");
    });

    closeBtnSiteToConecta.addEventListener("click", function () {
        descModalSiteToConecta.classList.add("hiddenSiteToConecta");
    });
});





