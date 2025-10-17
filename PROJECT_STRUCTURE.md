# 📁 Estructura del Proyecto

```
WebFlasher/
│
├── 📄 index.html              # Página principal del Web Flasher
├── 📄 index.php               # Redirección PHP y API (opcional)
├── 🎨 style.css               # Estilos CSS modernos
├── ⚡ script.js               # JavaScript interactivo
├── ⚙️ manifest.json           # Configuración ESP Web Tools
├── ⚙️ config.json             # Configuración del proyecto
│
├── 📖 README.md               # Documentación principal
├── 📖 INSTRUCTIONS.md         # Guía de compilación detallada
├── 📖 QUICKSTART.md           # Guía rápida de inicio
├── 📖 PROJECT_STRUCTURE.md    # Este archivo
│
├── 🚫 .gitignore              # Archivos ignorados por Git
│
└── 📁 firmware/               # Carpeta de firmware
    ├── 📝 T0p1_firmware0.0.ino    # Código fuente Arduino
    │
    ├── 🔧 compile.bat             # Script de compilación (Windows)
    ├── 🔧 compile.ps1             # Script PowerShell de compilación
    │
    └── 💾 Archivos binarios (generados después de compilar):
        ├── T0p1_firmware.bin      # Firmware compilado
        ├── bootloader.bin         # Bootloader ESP32
        ├── partitions.bin         # Tabla de particiones
        └── boot_app0.bin          # Archivo de boot
```

## 🎯 Función de Cada Archivo

### 🌐 Archivos Web

| Archivo | Descripción | Editable |
|---------|-------------|----------|
| `index.html` | Interfaz principal del flasher con diseño moderno | ✅ |
| `index.php` | Redirección y API opcional para verificar estado | ✅ |
| `style.css` | Estilos dark mode con gradientes y animaciones | ✅ |
| `script.js` | Lógica JavaScript, notificaciones y eventos | ✅ |
| `manifest.json` | Configuración de ESP Web Tools (rutas de .bin) | ⚠️ Cuidado |
| `config.json` | Configuración general del proyecto | ✅ |

### 📚 Documentación

| Archivo | Para Quién | Contenido |
|---------|------------|-----------|
| `README.md` | Todos | Visión general, instalación, características |
| `QUICKSTART.md` | Usuarios finales | Guía rápida en 3 pasos |
| `INSTRUCTIONS.md` | Desarrolladores | Compilación detallada y troubleshooting |
| `PROJECT_STRUCTURE.md` | Desarrolladores | Este archivo - estructura del proyecto |

### ⚙️ Firmware

| Archivo | Descripción | Cuándo Usarlo |
|---------|-------------|---------------|
| `T0p1_firmware0.0.ino` | Código fuente del firmware | Para editar funcionalidades |
| `compile.bat` | Script de compilación automática | Cada vez que edites el .ino |
| `compile.ps1` | Script PowerShell interno | Llamado por compile.bat |
| `*.bin` | Archivos binarios compilados | Generados automáticamente |

## 🔄 Flujo de Trabajo

### 1️⃣ Desarrollo del Firmware
```
T0p1_firmware0.0.ino
         ↓
   [Editar código]
         ↓
    compile.bat
         ↓
   *.bin generados
```

### 2️⃣ Actualización Web
```
index.html / style.css / script.js
         ↓
   [Editar diseño]
         ↓
   Refrescar navegador
         ↓
   Ver cambios
```

### 3️⃣ Flasheo
```
Usuario abre index.html
         ↓
ESP Web Tools lee manifest.json
         ↓
Carga archivos .bin
         ↓
Flashea ESP32 por Web Serial
```

## 📊 Dependencias

### Frontend
- **ESP Web Tools** (CDN): `https://unpkg.com/esp-web-tools@10`
- **Web Serial API**: Integrada en navegadores Chrome/Edge/Opera

### Backend (Opcional)
- **XAMPP/Apache**: Para servir archivos localmente
- **PHP**: Para index.php (opcional)

### Compilación
- **Arduino CLI** o **Arduino IDE**: Para compilar el firmware
- **ESP32 Core**: Instalado vía Arduino
- **Librerías**:
  - TFT_eSPI
  - XPT2046_Touchscreen
  - WiFi (integrada)
  - BluetoothSerial (integrada)

## 🎨 Personalización

### Cambiar Colores
Edita variables CSS en `style.css`:
```css
:root {
    --primary-color: #667eea;    /* Color principal */
    --secondary-color: #764ba2;   /* Color secundario */
    --bg-color: #0f0f1e;         /* Fondo */
}
```

### Cambiar Contenido
Edita `config.json` para cambiar:
- Nombre del proyecto
- Características
- Enlaces sociales
- Información del dispositivo

### Agregar Analytics
En `config.json`:
```json
"analytics": {
    "enabled": true,
    "googleAnalyticsId": "G-XXXXXXXXXX"
}
```

## 🚀 Deploy

### Local (XAMPP)
1. Copia todo a `C:\xampp\htdocs\WebFlasher\`
2. Inicia Apache en XAMPP
3. Accede a `http://localhost/WebFlasher/`

### Web Hosting
1. Sube todos los archivos excepto:
   - `compile.bat`
   - `compile.ps1`
   - Documentación `.md` (opcional)
2. Asegúrate de que los archivos `.bin` estén en `firmware/`
3. Accede a tu dominio

### GitHub Pages
1. Crea un repositorio
2. Sube todos los archivos
3. Activa GitHub Pages en Settings
4. Accede a `https://usuario.github.io/WebFlasher/`

## 🔐 Seguridad

### Archivos Sensibles
- ❌ NO subas archivos `.bin` a repositorios públicos si contienen código propietario
- ✅ Usa `.gitignore` para excluir binarios
- ✅ Proporciona instrucciones de compilación en su lugar

### HTTPS
- ⚠️ Web Serial API requiere HTTPS en producción
- ✅ En local funciona con HTTP (localhost)
- ✅ GitHub Pages proporciona HTTPS automáticamente

## 📈 Métricas de Tamaño

| Tipo | Tamaño Aproximado |
|------|-------------------|
| HTML | ~15 KB |
| CSS | ~8 KB |
| JavaScript | ~3 KB |
| Firmware .bin | ~1-2 MB |
| Total (sin .bin) | ~26 KB |
| Total (con .bin) | ~2 MB |

## 🛠️ Mantenimiento

### Actualizar Firmware
1. Edita `T0p1_firmware0.0.ino`
2. Ejecuta `compile.bat`
3. Los nuevos `.bin` sobrescriben los anteriores
4. Los usuarios verán la nueva versión

### Actualizar Web
1. Edita archivos HTML/CSS/JS
2. Los cambios son inmediatos
3. Los usuarios deben refrescar la página

### Actualizar Versión
1. Cambia versión en `config.json`
2. Cambia versión en `manifest.json`
3. Actualiza `README.md`

## 🆘 Solución de Problemas

### El flasheo no funciona
✅ Verifica rutas en `manifest.json`
✅ Confirma que existan todos los `.bin`
✅ Usa navegador compatible

### Estilos no cargan
✅ Verifica que `style.css` esté en la raíz
✅ Revisa la ruta en `<link>` de `index.html`
✅ Limpia caché del navegador

### Compilación falla
✅ Instala Arduino CLI
✅ Instala ESP32 Core
✅ Instala librerías necesarias

## 📞 Soporte

- 🐛 Issues: [GitHub Issues](https://github.com/x-T0p1/Firmware-T0p1-Esp32/issues)
- 📧 Email: (Agregar tu email)
- 💬 Discord: (Agregar tu servidor)

---

**Última actualización:** Octubre 2025
**Versión del documento:** 1.0
