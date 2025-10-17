// ESP32 Web Flasher Script - Matrix/Hacker Edition
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c[SYSTEM] T0p1 Firmware Flasher initialized', 'color: #00ff41; font-family: monospace;');
    console.log('%c[STATUS] All systems operational', 'color: #00ff41; font-family: monospace;');

    // Matrix-style typing effect for headers
    const typeWriter = (element, text, speed = 50) => {
        let i = 0;
        element.textContent = '';
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        type();
    };

    // Apply typing effect to subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 30);
    }

    // Terminal-style console logs
    const terminalLog = (message, type = 'info') => {
        const colors = {
            info: '#00ff41',
            success: '#00ff41',
            error: '#ff003c',
            warning: '#ffaa00'
        };
        console.log(`%c[${type.toUpperCase()}] ${message}`, `color: ${colors[type]}; font-family: monospace;`);
    };

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                terminalLog(`Navigating to ${this.getAttribute('href')}`, 'info');
            }
        });
    });

    // Detect browser compatibility
    const checkBrowserCompatibility = () => {
        if (!('serial' in navigator)) {
            terminalLog('Web Serial API not supported in this browser', 'error');
            return false;
        }
        terminalLog('Web Serial API detected', 'success');
        return true;
    };

    if (checkBrowserCompatibility()) {
        console.log('%c✅ SYSTEM READY', 'color: #00ff41; font-size: 16px; font-weight: bold; font-family: monospace;');
    } else {
        console.log('%c❌ INCOMPATIBLE BROWSER', 'color: #ff003c; font-size: 16px; font-weight: bold; font-family: monospace;');
    }

    // Add installation event listeners
    const installButton = document.querySelector('esp-web-install-button');
    
    if (installButton) {
        installButton.addEventListener('state-changed', (event) => {
            terminalLog(`Installation state: ${event.detail}`, 'info');
        });

        installButton.addEventListener('error', (event) => {
            terminalLog(`Installation error: ${event.detail}`, 'error');
            showNotification('⚠ ERROR: Installation failed. Retry sequence.', 'error');
        });
    }

    // Enhanced notification system with Matrix style
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: ${type === 'error' ? 'rgba(255, 0, 60, 0.9)' : 'rgba(0, 255, 65, 0.9)'};
            color: ${type === 'error' ? '#fff' : '#000'};
            border: 2px solid ${type === 'error' ? '#ff003c' : '#00ff41'};
            border-radius: 0;
            box-shadow: 0 0 20px ${type === 'error' ? 'rgba(255, 0, 60, 0.5)' : 'rgba(0, 255, 65, 0.5)'};
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Matrix rain effect on canvas (optional - lightweight version)
    const createMatrixEffect = () => {
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            opacity: 0.05;
            pointer-events: none;
        `;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const columns = canvas.width / 20;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff41';
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        setInterval(draw, 33);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    };

    // Uncomment to enable Matrix rain effect (may impact performance)
    // createMatrixEffect();

    // Terminal-style loading animation
    terminalLog('Firmware version: 0.0', 'info');
    terminalLog('Target device: ESP32-2432S028R', 'info');
    terminalLog('System status: ONLINE', 'success');
    
    console.log('%c', 'font-size: 1px; padding: 100px 200px; background: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 50\'%3E%3Ctext x=\'10\' y=\'35\' font-family=\'monospace\' font-size=\'30\' fill=\'%2300ff41\'%3ET0p1%3C/text%3E%3C/svg%3E") no-repeat;');
});

