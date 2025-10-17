// Translation System for T0p1 Firmware Flasher
const translations = {
    en: {
        // Header
        title: "T0P1 FIRMWARE",
        subtitle: "CYBERSECURITY FIRMWARE FOR ESP32-2432S028R (CYD)",
        githubLink: "GITHUB REPOSITORY",
        
        // Flash Section
        flashTitle: ">> FLASH FIRMWARE",
        flashDescription: "Connect your ESP32 CYD via USB and click the button to install the firmware directly from your browser.",
        flashButton: "CONNECT & FLASH",
        flashUnsupported: "⚠️ Your browser does not support Web Serial API. Use Chrome, Edge or Opera.",
        flashNotAllowed: "⚠️ You don't have permission to access the serial port. Check your browser settings.",
        
        // Requirements
        requirementsTitle: "REQUIREMENTS",
        requirement1: "✅ Compatible browser: Chrome, Edge, Opera (with Web Serial API)",
        requirement2: "✅ ESP32-2432S028R (CYD) connected via USB",
        requirement3: "✅ CH340/CP2102 driver installed (if necessary)",
        
        // Features
        featuresTitle: "FEATURES",
        feature1Title: "WIFI SCANNER",
        feature1Desc: "Complete WiFi network scanning with detailed channel, RSSI and security analysis.",
        feature2Title: "DEAUTH DETECTION",
        feature2Desc: "Real-time deauthentication attack detection to identify threats.",
        feature3Title: "TOUCH INTERFACE",
        feature3Desc: "Intuitive touch interface with complete menu for easy navigation.",
        feature4Title: "BLUETOOTH",
        feature4Desc: "Support for classic Bluetooth and BLE with device scanning.",
        feature5Title: "SD CARD SUPPORT",
        feature5Desc: "Storage of logs and data on integrated SD card.",
        feature6Title: "WEB SERVER",
        feature6Desc: "Integrated web server for remote control and configuration.",
        
        // Specs
        specsTitle: ">> TECHNICAL SPECIFICATIONS",
        specBoard: "BOARD",
        specBoardValue: "ESP32-2432S028R (Cheap Yellow Display)",
        specDisplay: "DISPLAY",
        specDisplayValue: "2.8\" TFT 320x240 ILI9341",
        specTouch: "TOUCH",
        specTouchValue: "XPT2046 Resistive",
        specProcessor: "PROCESSOR",
        specProcessorValue: "ESP32 Dual Core 240MHz",
        specMemory: "MEMORY",
        specMemoryValue: "520KB RAM, 4MB Flash",
        specConnectivity: "CONNECTIVITY",
        specConnectivityValue: "WiFi 802.11 b/g/n, Bluetooth 4.2",
        
        // Instructions
        instructionsTitle: ">> INSTALLATION INSTRUCTIONS",
        instruction1Title: "CONNECT YOUR ESP32 CYD",
        instruction1Desc: "Connect the device to your computer using a USB cable. Make sure the drivers are installed.",
        instruction2Title: "CLICK \"CONNECT & FLASH\"",
        instruction2Desc: "The browser will ask you to select the correct COM port for your ESP32.",
        instruction3Title: "SELECT THE PORT",
        instruction3Desc: "Look for something like \"USB Serial Port\" or \"CP2102\" in the list and select it.",
        instruction4Title: "INSTALL THE FIRMWARE",
        instruction4Desc: "Click \"Install\" and wait for the process to finish (may take 1-2 minutes).",
        instruction5Title: "DONE!",
        instruction5Desc: "Once completed, the ESP32 will automatically restart with the new firmware.",
        
        // FAQ
        faqTitle: ">> FREQUENTLY ASKED QUESTIONS",
        faq1Question: "WHAT BROWSERS ARE COMPATIBLE?",
        faq1Answer: "Chrome, Edge, and Opera in their latest versions. Firefox and Safari do not yet support Web Serial API.",
        faq2Question: "DO I NEED TO INSTALL DRIVERS?",
        faq2Answer: "On Windows, you may need to install CH340 or CP2102 drivers depending on your ESP32's USB chip.",
        faq3Question: "WILL THE PROCESS ERASE MY DATA?",
        faq3Answer: "Yes, flashing will overwrite all content in the ESP32's flash memory.",
        faq4Question: "WHAT DO I DO IF INSTALLATION FAILS?",
        faq4Answer: "Try holding down the BOOT button on the ESP32 while connecting USB, then release and try again.",
        
        // Donate
        donateTitle: ">> SUPPORT THE PROJECT",
        donateDescription: "If you find this project useful, consider supporting its development. Your donations help maintain and improve the firmware!",
        donateBitcoin: "Bitcoin (BTC)",
        donateEthereum: "Ethereum (ETH)",
        donateMonero: "Monero (XMR)",
        donateNote: "⚡ All donations are greatly appreciated and help keep this project alive!",
        
        // Footer
        footerDeveloped: "Developed by",
        footerDisclaimer: "This firmware is for educational purposes only. Use it responsibly."
    },
    es: {
        // Header
        title: "T0P1 FIRMWARE",
        subtitle: "FIRMWARE DE CIBERSEGURIDAD PARA ESP32-2432S028R (CYD)",
        githubLink: "REPOSITORIO GITHUB",
        
        // Flash Section
        flashTitle: ">> FLASHEAR FIRMWARE",
        flashDescription: "Conecta tu ESP32 CYD por USB y haz clic en el botón para instalar el firmware directamente desde tu navegador.",
        flashButton: "CONECTAR Y FLASHEAR",
        flashUnsupported: "⚠️ Tu navegador no soporta Web Serial API. Usa Chrome, Edge o Opera.",
        flashNotAllowed: "⚠️ No tienes permisos para acceder al puerto serial. Verifica la configuración de tu navegador.",
        
        // Requirements
        requirementsTitle: "REQUISITOS",
        requirement1: "✅ Navegador compatible: Chrome, Edge, Opera (con Web Serial API)",
        requirement2: "✅ ESP32-2432S028R (CYD) conectado por USB",
        requirement3: "✅ Driver CH340/CP2102 instalado (si es necesario)",
        
        // Features
        featuresTitle: "CARACTERÍSTICAS",
        feature1Title: "ESCÁNER WIFI",
        feature1Desc: "Escaneo completo de redes WiFi con análisis detallado de canales, RSSI y seguridad.",
        feature2Title: "DETECCIÓN DEAUTH",
        feature2Desc: "Detección de ataques de desautenticación en tiempo real para identificar amenazas.",
        feature3Title: "INTERFAZ TÁCTIL",
        feature3Desc: "Interfaz táctil intuitiva con menú completo para navegación fácil.",
        feature4Title: "BLUETOOTH",
        feature4Desc: "Soporte para Bluetooth clásico y BLE con escaneo de dispositivos.",
        feature5Title: "SOPORTE SD",
        feature5Desc: "Almacenamiento de logs y datos en tarjeta SD integrada.",
        feature6Title: "SERVIDOR WEB",
        feature6Desc: "Servidor web integrado para control remoto y configuración.",
        
        // Specs
        specsTitle: ">> ESPECIFICACIONES TÉCNICAS",
        specBoard: "PLACA",
        specBoardValue: "ESP32-2432S028R (Cheap Yellow Display)",
        specDisplay: "PANTALLA",
        specDisplayValue: "2.8\" TFT 320x240 ILI9341",
        specTouch: "TÁCTIL",
        specTouchValue: "XPT2046 Resistivo",
        specProcessor: "PROCESADOR",
        specProcessorValue: "ESP32 Dual Core 240MHz",
        specMemory: "MEMORIA",
        specMemoryValue: "520KB RAM, 4MB Flash",
        specConnectivity: "CONECTIVIDAD",
        specConnectivityValue: "WiFi 802.11 b/g/n, Bluetooth 4.2",
        
        // Instructions
        instructionsTitle: ">> INSTRUCCIONES DE INSTALACIÓN",
        instruction1Title: "CONECTA TU ESP32 CYD",
        instruction1Desc: "Conecta el dispositivo a tu computadora usando un cable USB. Asegúrate de que los drivers estén instalados.",
        instruction2Title: "HAZ CLIC EN \"CONECTAR Y FLASHEAR\"",
        instruction2Desc: "El navegador te pedirá que selecciones el puerto COM correcto de tu ESP32.",
        instruction3Title: "SELECCIONA EL PUERTO",
        instruction3Desc: "Busca algo como \"USB Serial Port\" o \"CP2102\" en la lista y selecciónalo.",
        instruction4Title: "INSTALA EL FIRMWARE",
        instruction4Desc: "Haz clic en \"Install\" y espera a que el proceso termine (puede tardar 1-2 minutos).",
        instruction5Title: "¡LISTO!",
        instruction5Desc: "Una vez completado, el ESP32 se reiniciará automáticamente con el nuevo firmware.",
        
        // FAQ
        faqTitle: ">> PREGUNTAS FRECUENTES",
        faq1Question: "¿QUÉ NAVEGADORES SON COMPATIBLES?",
        faq1Answer: "Chrome, Edge, y Opera en sus últimas versiones. Firefox y Safari aún no soportan Web Serial API.",
        faq2Question: "¿NECESITO INSTALAR DRIVERS?",
        faq2Answer: "En Windows, es posible que necesites instalar drivers CH340 o CP2102 dependiendo del chip USB de tu ESP32.",
        faq3Question: "¿EL PROCESO BORRARÁ MIS DATOS?",
        faq3Answer: "Sí, el flasheo sobrescribirá todo el contenido de la memoria flash del ESP32.",
        faq4Question: "¿QUÉ HAGO SI FALLA LA INSTALACIÓN?",
        faq4Answer: "Intenta mantener presionado el botón BOOT en el ESP32 mientras conectas el USB, luego suéltalo y vuelve a intentar.",
        
        // Donate
        donateTitle: ">> APOYA EL PROYECTO",
        donateDescription: "Si encuentras útil este proyecto, considera apoyar su desarrollo. ¡Tus donaciones ayudan a mantener y mejorar el firmware!",
        donateBitcoin: "Bitcoin (BTC)",
        donateEthereum: "Ethereum (ETH)",
        donateMonero: "Monero (XMR)",
        donateNote: "⚡ ¡Todas las donaciones son muy apreciadas y ayudan a mantener este proyecto vivo!",
        
        // Footer
        footerDeveloped: "Desarrollado por",
        footerDisclaimer: "Este firmware es solo para propósitos educativos. Úsalo responsablemente."
    }
};

// Language switcher functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.init();
    }

    init() {
        this.createSwitcher();
        this.applyTranslations(this.currentLang);
    }

    createSwitcher() {
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button class="lang-btn ${this.currentLang === 'es' ? 'active' : ''}" data-lang="es">ES</button>
        `;
        
        document.body.appendChild(switcher);

        switcher.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        this.applyTranslations(lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Console log
        console.log(`%c[LANG] Switched to ${lang.toUpperCase()}`, 'color: #00ff41; font-family: monospace;');
    }

    applyTranslations(lang) {
        const t = translations[lang];
        
        // Header
        const titleElement = document.querySelector('.header-content h1');
        if (titleElement) {
            const titleText = titleElement.textContent.replace(/[_\s]/g, '').replace('T0P1FIRMWARE', '');
            titleElement.innerHTML = `${t.title}`;
        }
        
        this.updateElement('.subtitle', t.subtitle);
        this.updateElement('.github-link', `
            <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            ${t.githubLink}
        `);
        
        // Flash section
        this.updateElement('.flasher-section h2', t.flashTitle);
        this.updateElement('.flasher-section .card.highlight > p', t.flashDescription);
        this.updateElement('.flash-button span:last-child', t.flashButton);
        
        // Requirements
        this.updateElement('.requirements h3', t.requirementsTitle);
        const reqList = document.querySelectorAll('.requirements li');
        if (reqList.length >= 3) {
            reqList[0].textContent = t.requirement1;
            reqList[1].textContent = t.requirement2;
            reqList[2].textContent = t.requirement3;
        }
        
        // Features
        this.updateElement('.features-section h2', t.featuresTitle);
        const features = document.querySelectorAll('.feature-card');
        const featureData = [
            { title: t.feature1Title, desc: t.feature1Desc },
            { title: t.feature2Title, desc: t.feature2Desc },
            { title: t.feature3Title, desc: t.feature3Desc },
            { title: t.feature4Title, desc: t.feature4Desc },
            { title: t.feature5Title, desc: t.feature5Desc },
            { title: t.feature6Title, desc: t.feature6Desc }
        ];
        features.forEach((feature, i) => {
            if (featureData[i]) {
                const h3 = feature.querySelector('h3');
                const p = feature.querySelector('p');
                if (h3) h3.textContent = featureData[i].title;
                if (p) p.textContent = featureData[i].desc;
            }
        });
        
        // Specs
        this.updateElement('.specs-section h2', t.specsTitle);
        const specs = document.querySelectorAll('.spec-item');
        const specsData = [
            { title: t.specBoard, value: t.specBoardValue },
            { title: t.specDisplay, value: t.specDisplayValue },
            { title: t.specTouch, value: t.specTouchValue },
            { title: t.specProcessor, value: t.specProcessorValue },
            { title: t.specMemory, value: t.specMemoryValue },
            { title: t.specConnectivity, value: t.specConnectivityValue }
        ];
        specs.forEach((spec, i) => {
            if (specsData[i]) {
                const strong = spec.querySelector('strong');
                const span = spec.querySelector('span');
                if (strong) strong.textContent = specsData[i].title;
                if (span) span.textContent = specsData[i].value;
            }
        });
        
        // Instructions
        this.updateElement('.instructions-section h2', t.instructionsTitle);
        const instructions = document.querySelectorAll('.instructions-list li');
        const instructionsData = [
            { title: t.instruction1Title, desc: t.instruction1Desc },
            { title: t.instruction2Title, desc: t.instruction2Desc },
            { title: t.instruction3Title, desc: t.instruction3Desc },
            { title: t.instruction4Title, desc: t.instruction4Desc },
            { title: t.instruction5Title, desc: t.instruction5Desc }
        ];
        instructions.forEach((instruction, i) => {
            if (instructionsData[i]) {
                const strong = instruction.querySelector('strong');
                const p = instruction.querySelector('p');
                if (strong) strong.textContent = instructionsData[i].title;
                if (p) p.textContent = instructionsData[i].desc;
            }
        });
        
        // FAQ
        this.updateElement('.faq-section h2', t.faqTitle);
        const faqs = document.querySelectorAll('.faq-section details');
        const faqData = [
            { question: t.faq1Question, answer: t.faq1Answer },
            { question: t.faq2Question, answer: t.faq2Answer },
            { question: t.faq3Question, answer: t.faq3Answer },
            { question: t.faq4Question, answer: t.faq4Answer }
        ];
        faqs.forEach((faq, i) => {
            if (faqData[i]) {
                const summary = faq.querySelector('summary');
                const p = faq.querySelector('p');
                if (summary) summary.textContent = faqData[i].question;
                if (p) p.textContent = faqData[i].answer;
            }
        });
        
        // Donate Section
        this.updateElement('.donate-section h2', t.donateTitle);
        const donateDesc = document.querySelector('.donate-section > .card > p:first-of-type');
        if (donateDesc) donateDesc.textContent = t.donateDescription;
        
        const cryptoCards = document.querySelectorAll('.crypto-card h3');
        if (cryptoCards[0]) cryptoCards[0].textContent = t.donateBitcoin;
        if (cryptoCards[1]) cryptoCards[1].textContent = t.donateEthereum;
        if (cryptoCards[2]) cryptoCards[2].textContent = t.donateMonero;
        
        const donateNote = document.querySelector('.donate-note');
        if (donateNote) donateNote.textContent = t.donateNote;
        
        // Footer
        const footerP = document.querySelectorAll('footer p');
        if (footerP[0]) {
            footerP[0].innerHTML = `${t.footerDeveloped} <strong>T0p1</strong> | 
               <a href="https://github.com/x-T0p1/Firmware-T0p1-Esp32" target="_blank">GitHub</a>`;
        }
        if (footerP[1]) {
            footerP[1].textContent = t.footerDisclaimer;
        }
    }

    updateElement(selector, content) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = content;
        }
    }
}

// Initialize language switcher when DOM is ready
let languageSwitcherInstance = null;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        languageSwitcherInstance = new LanguageSwitcher();
    });
} else {
    languageSwitcherInstance = new LanguageSwitcher();
}

// Global function for language selector dropdown
function changeLanguage(lang) {
    if (languageSwitcherInstance) {
        languageSwitcherInstance.switchLanguage(lang);
    } else {
        languageSwitcherInstance = new LanguageSwitcher();
        languageSwitcherInstance.switchLanguage(lang);
    }
}
