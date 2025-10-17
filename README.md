# 🛡️ T0p1 Firmware - ESP32 CYD Web Flasher

![ESP32 CYD](https://img.shields.io/badge/ESP32-2432S028R-blue)
![Version](https://img.shields.io/badge/version-0.0-green)
![License](https://img.shields.io/badge/license-MIT-yellow)

## 📖 Descripción

Web Flasher para instalar el firmware T0p1 en ESP32-2432S028R (Cheap Yellow Display) directamente desde el navegador usando Web Serial API.

## ✨ Características

- 🌐 **Flasheo desde navegador** - No necesitas Arduino IDE
- 🎨 **Interfaz moderna** - Diseño dark mode profesional
- 📱 **Responsive** - Funciona en desktop y móvil
- ⚡ **Rápido** - Instalación en menos de 2 minutos
- 🔒 **Seguro** - Usa Web Serial API oficial

## 🚀 Instalación Rápida

### Para Usuarios

1. Visita: `http://localhost/WebFlasher/` (o tu URL)
2. Conecta tu ESP32 CYD por USB
3. Haz clic en "Conectar y Flashear"
4. Selecciona el puerto COM
5. ¡Listo!

### Para Desarrolladores

```bash
# Clonar el repositorio
git clone https://github.com/x-T0p1/WebFlasher.git

# Navegar a la carpeta
cd WebFlasher

# Configurar en XAMPP/Apache
# Copiar a: C:\xampp\htdocs\WebFlasher

# Abrir en navegador
http://localhost/WebFlasher/
```

## 📦 Estructura del Proyecto

```
WebFlasher/
├── index.html          # Página principal
├── style.css           # Estilos
├── script.js           # JavaScript
├── manifest.json       # Configuración ESP Web Tools
├── README.md           # Este archivo
├── INSTRUCTIONS.md     # Guía de compilación
└── firmware/
    ├── T0p1_firmware0.0.ino
    ├── bootloader.bin
    ├── partitions.bin
    ├── boot_app0.bin
    └── T0p1_firmware.bin
```

## 🔧 Compilar el Firmware

Ver el archivo [INSTRUCTIONS.md](INSTRUCTIONS.md) para instrucciones detalladas.

### Resumen Rápido:

1. Abre Arduino IDE
2. Selecciona placa: ESP32 Dev Module
3. Sketch > Export compiled Binary
4. Copia los archivos .bin a la carpeta `firmware/`

## 🌐 Navegadores Compatibles

- ✅ Google Chrome 89+
- ✅ Microsoft Edge 89+
- ✅ Opera 75+
- ❌ Firefox (no soporta Web Serial API aún)
- ❌ Safari (no soporta Web Serial API aún)

## 📱 Características del Firmware

- 📡 **WiFi Scanner** - Escaneo completo de redes
- 🛡️ **Deauth Detection** - Detecta ataques
- 📱 **Touch Interface** - Interfaz táctil intuitiva
- 🔵 **Bluetooth/BLE** - Soporte completo
- 💾 **SD Card** - Almacenamiento de logs
- 🌐 **Web Server** - Control remoto

## 🎯 Especificaciones Técnicas

- **Placa:** ESP32-2432S028R (CYD)
- **Display:** 2.8" TFT 320x240 ILI9341
- **Touch:** XPT2046 Resistivo
- **Procesador:** ESP32 Dual Core 240MHz
- **Memoria:** 520KB RAM, 4MB Flash
- **WiFi:** 802.11 b/g/n
- **Bluetooth:** 4.2 BLE

## 🐛 Solución de Problemas

### No detecta el ESP32
- Instala drivers CH340/CP2102
- Prueba otro cable USB
- Reinicia el dispositivo

### Error al flashear
- Mantén BOOT presionado al conectar
- Cierra Arduino IDE si está abierto
- Verifica permisos del navegador

### No se ve el puerto COM
- Verifica Device Manager (Windows)
- Actualiza drivers USB
- Prueba otro puerto USB

## 📚 Recursos

- [Repositorio del Firmware](https://github.com/x-T0p1/Firmware-T0p1-Esp32)
- [ESP32 Arduino Core](https://github.com/espressif/arduino-esp32)
- [ESP Web Tools](https://esphome.github.io/esp-web-tools/)
- [Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API)

## 👨‍💻 Autor

**T0p1**
- GitHub: [@x-T0p1](https://github.com/x-T0p1)
- Repositorio: [Firmware-T0p1-Esp32](https://github.com/x-T0p1/Firmware-T0p1-Esp32)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## ⚠️ Disclaimer

Este firmware es solo para propósitos educativos y de investigación. Úsalo responsablemente y respetando las leyes locales.

## 🙏 Agradecimientos

- Comunidad ESP32
- TFT_eSPI by Bodmer
- ESP Web Tools by ESPHome

---

**⭐ Si te gusta este proyecto, dale una estrella en GitHub!**

