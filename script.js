document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMAÇÃO DE REVELAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
    const elementosParaAnimar = document.querySelectorAll('.card-produto, .item-gelo, .info-contato, .mapa-container, #sobre p');
    
    elementosParaAnimar.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    const checarScroll = () => {
        const gatilhoAtivacao = window.innerHeight * 0.85;

        elementosParaAnimar.forEach(el => {
            const topoDoElemento = el.getBoundingClientRect().top;
            if (topoDoElemento < gatilhoAtivacao) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    checarScroll();
    window.addEventListener('scroll', checarScroll);

    // 2. NAVBAR DINÂMICA (MUDANÇA DE COR AO ROLAR)
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
            navbar.style.padding = "12px 40px";
        } else {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
            navbar.style.padding = "20px 40px";
        }
    });

    // 3. SURPRESA INTERATIVA: EFEITO DE CONFEITOS AO CLICAR NO BOTÃO
    const botaoHero = document.querySelector('.hero .btn');
    
    if (botaoHero) {
        botaoHero.addEventListener('click', (e) => {
            for (let i = 0; i < 15; i++) {
                const confeito = document.createElement('div');
                const cores = ['#ff769f', '#1e5494', '#ffe17d', '#7dffb6'];
                
                confeito.style.position = 'fixed';
                confeito.style.left = `${e.clientX}px`;
                confeito.style.top = `${e.clientY}px`;
                confeito.style.width = '8px';
                confeito.style.height = '8px';
                confeito.style.borderRadius = '50%';
                confeito.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
                confeito.style.pointerEvents = 'none';
                confeito.style.zIndex = '9999';
                confeito.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
                
                document.body.appendChild(confeito);
                
                const ângulo = Math.random() * Math.PI * 2;
                const velocidade = Math.random() * 80 + 40;
                const destinoX = Math.cos(ângulo) * velocidade;
                const destinoY = Math.sin(ângulo) * velocidade;
                
                setTimeout(() => {
                    confeito.style.transform = `translate(${destinoX}px, ${destinoY}px)`;
                    confeito.style.opacity = '0';
                }, 10);
                
                setTimeout(() => confeito.remove(), 600);
            }
        });
    }
});
