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

// Copy to clipboard function for crypto addresses
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyFeedback(element, '✓ Copied!');
            console.log('%c[CLIPBOARD] Address copied successfully', 'color: #00ff41; font-family: monospace;');
        }).catch(err => {
            console.error('%c[ERROR] Failed to copy:', err, 'color: #ff003c; font-family: monospace;');
            fallbackCopy(text, element);
        });
    } else {
        // Fallback for older browsers
        fallbackCopy(text, element);
    }
}

// Fallback copy method
function fallbackCopy(text, element) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedback(element, '✓ Copied!');
        console.log('%c[CLIPBOARD] Address copied (fallback)', 'color: #00ff41; font-family: monospace;');
    } catch (err) {
        console.error('%c[ERROR] Copy failed:', err, 'color: #ff003c; font-family: monospace;');
        showCopyFeedback(element, '✗ Failed', true);
    }
    
    document.body.removeChild(textArea);
}

// Show visual feedback when copying
function showCopyFeedback(element, message, isError = false) {
    const originalText = element.textContent;
    const originalColor = element.style.color;
    
    element.textContent = message;
    element.style.color = isError ? '#ff003c' : '#39ff14';
    element.style.fontWeight = 'bold';
    
    setTimeout(() => {
        element.textContent = originalText;
        element.style.color = originalColor;
        element.style.fontWeight = '';
    }, 2000);
}

// Generate QR Codes for crypto donations - DISABLED (using static images instead)
/*
function generateQRCodes() {
    // Check if QRCode library is loaded
    if (typeof QRCode === 'undefined') {
        console.error('%c[QR] QRCode library not loaded', 'color: #ff003c; font-family: monospace;');
        return;
    }

    // Crypto addresses
    const cryptoData = {
        btc: {
            address: 'bc1qepjcrvlxqunmnzjtrckf623v26zuv629e5v0lj',
            uri: 'bitcoin:bc1qepjcrvlxqunmnzjtrckf623v26zuv629e5v0lj',
            color: '#00ff41'
        },
        eth: {
            address: '0xc4991fb99d6d0cd126a173b9e7156b57f994ce2f',
            uri: 'ethereum:0xc4991fb99d6d0cd126a173b9e7156b57f994ce2f',
            color: '#00d9ff'
        },
        xmr: {
            address: '4AaD8rqFPwBhKSbApUFLuY9cy8ii9gYZRAxTFCnii7Sieb1zibacTKqJJY4CAvt18PMjyiy8LgAhuc4LKjUk68mp2BBsCy7',
            uri: 'monero:4AaD8rqFPwBhKSbApUFLuY9cy8ii9gYZRAxTFCnii7Sieb1zibacTKqJJY4CAvt18PMjyiy8LgAhuc4LKjUk68mp2BBsCy7',
            color: '#ff6600'
        }
    };

    // Generate each QR code
    Object.keys(cryptoData).forEach(crypto => {
        const container = document.getElementById(`qr-${crypto}`);
        if (container && container.innerHTML === '') {
            try {
                new QRCode(container, {
                    text: cryptoData[crypto].uri,
                    width: 200,
                    height: 200,
                    colorDark: cryptoData[crypto].color,
                    colorLight: '#000000',
                    correctLevel: QRCode.CorrectLevel.H
                });
                console.log(`%c[QR] Generated ${crypto.toUpperCase()} QR code`, 'color: #00ff41; font-family: monospace;');
            } catch (error) {
                console.error(`%c[QR] Error generating ${crypto.toUpperCase()} QR:`, error, 'color: #ff003c; font-family: monospace;');
            }
        }
    });
}

// Initialize QR codes when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for QRCode library to be fully loaded
    setTimeout(generateQRCodes, 500);
});
*/

// === CAROUSEL FUNCTIONALITY ===

let currentSlide = 0;
let autoPlayInterval = null;
const autoPlayDelay = 5000; // 5 seconds

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});

function initCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Create indicators
    createIndicators(totalSlides);

    // Show first slide
    updateCarousel();

    // Start auto-play
    startAutoPlay();

    // Pause auto-play on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            carouselPrev();
        } else if (e.key === 'ArrowRight') {
            carouselNext();
        }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    });

    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchStartX - touchEndX > swipeThreshold) {
            carouselNext(); // Swipe left
        } else if (touchEndX - touchStartX > swipeThreshold) {
            carouselPrev(); // Swipe right
        }
    }

    console.log('%c[CAROUSEL] Initialized with ' + totalSlides + ' slides', 'color: #00ff41; font-family: monospace;');
}

function createIndicators(totalSlides) {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (!indicatorsContainer) return;

    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'carousel-indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Wrap around if needed
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;

    // Move track
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function carouselNext() {
    currentSlide++;
    updateCarousel();
    resetAutoPlay();
}

function carouselPrev() {
    currentSlide--;
    updateCarousel();
    resetAutoPlay();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoPlay();
}

function startAutoPlay() {
    if (autoPlayInterval) return; // Already playing
    
    autoPlayInterval = setInterval(() => {
        carouselNext();
    }, autoPlayDelay);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}
