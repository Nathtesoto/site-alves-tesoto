// WhatsApp number
const WHATSAPP_NUMBER = '5511972721266';
const WHATSAPP_MESSAGE_DIAGNOSTIC = 'Olá! Gostaria de um diagnóstico personalizado para minha empresa.';
const WHATSAPP_MESSAGE_CONTACT = 'Olá! Gostaria de mais informações sobre os serviços da Alves & Tesoto Consultoria.';

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button interactions
document.querySelector('.btn-diagnostico').addEventListener('click', function() {
    const message = encodeURIComponent(WHATSAPP_MESSAGE_DIAGNOSTIC);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
});

document.querySelector('.btn-whatsapp').addEventListener('click', function() {
    const message = encodeURIComponent(WHATSAPP_MESSAGE_DIAGNOSTIC);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
});

document.querySelector('.btn-contato').addEventListener('click', function() {
    const message = encodeURIComponent(WHATSAPP_MESSAGE_CONTACT);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
});

// TEA Chatbox functionality
const suggestionBtns = document.querySelectorAll('.suggestion-btn');
const chatboxInput = document.querySelector('.chatbox-input input');
const sendBtn = document.querySelector('.chatbox-input button');
const messagesContainer = document.querySelector('.chatbox-messages');

const teaResponses = {
    'Analisar turnover': 'Analisando dados de turnover da sua empresa... Identificamos que a retenção de talentos é essencial. Posso ajudar com estratégias específicas!',
    'Estratégia de marketing': 'Sua estratégia de marketing pode incluir: Planejamento Estratégico, PDI & PDL, e Métricas & Performance. Qual área você quer focar?',
    'Diagnóstico geral': 'Realizando diagnóstico completo... Vejo potencial significativo em RH e Marketing. Quer detalhes?',
    'Outros': 'Em que mais posso ajudar? Conte-me mais sobre suas necessidades!'
};

function addMessage(text, isBot = true) {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${isBot ? 'bot' : 'user'}`;
    messageEl.innerHTML = `<p>${text}</p>`;
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const message = chatboxInput.value.trim();
    if (message) {
        addMessage(message, false);
        chatboxInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const response = 'Obrigado! Vou processar essa informação. Deseja continuar conversando?';
            addMessage(response, true);
        }, 500);
    }
}

sendBtn.addEventListener('click', sendMessage);
chatboxInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

suggestionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const text = this.textContent;
        addMessage(text, false);
        
        setTimeout(() => {
            const response = teaResponses[text] || 'Que interesse! Pode me explicar melhor?';
            addMessage(response, true);
        }, 500);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, rgba(10, 14, 39, 0.98) 0%, rgba(26, 31, 58, 0.98) 100%)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(26, 31, 58, 0.95) 100%)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .servico-card, .cliente-logo').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

console.log('Site Alves & Tesoto carregado com sucesso! 🚀');