<?php
/**
 * T0p1 Firmware Web Flasher
 * Página de redirección PHP
 */

// Configuración
define('PROJECT_NAME', 'T0p1 Firmware Web Flasher');
define('VERSION', '0.0.1');
define('AUTHOR', 'T0p1');

// Si se accede directamente a index.php, redirigir a index.html
if (basename($_SERVER['PHP_SELF']) === 'index.php') {
    header('Location: index.html');
    exit;
}

// Función para verificar si los archivos binarios existen
function checkBinaryFiles() {
    $requiredFiles = [
        'firmware/T0p1_firmware.bin',
        'firmware/bootloader.bin',
        'firmware/partitions.bin',
        'firmware/boot_app0.bin'
    ];
    
    $status = [
        'allPresent' => true,
        'files' => []
    ];
    
    foreach ($requiredFiles as $file) {
        $exists = file_exists($file);
        $status['files'][$file] = [
            'exists' => $exists,
            'size' => $exists ? filesize($file) : 0
        ];
        if (!$exists) {
            $status['allPresent'] = false;
        }
    }
    
    return $status;
}

// API endpoint para verificar estado (opcional)
if (isset($_GET['api']) && $_GET['api'] === 'status') {
    header('Content-Type: application/json');
    $status = checkBinaryFiles();
    echo json_encode([
        'project' => PROJECT_NAME,
        'version' => VERSION,
        'author' => AUTHOR,
        'binaries' => $status
    ]);
    exit;
}

// Si no hay parámetros API, mostrar la página HTML
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo PROJECT_NAME; ?></title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        .redirect-msg {
            font-size: 1.2rem;
            margin-bottom: 30px;
        }
        .loader {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .manual-link {
            margin-top: 20px;
        }
        .manual-link a {
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 25px;
            transition: all 0.3s;
        }
        .manual-link a:hover {
            background: rgba(255, 255, 255, 0.3);
        }
    </style>
    <script>
        // Redirigir automáticamente después de 2 segundos
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2000);
    </script>
</head>
<body>
    <div class="container">
        <h1>🛡️ <?php echo PROJECT_NAME; ?></h1>
        <div class="redirect-msg">
            Redirigiendo al Web Flasher...
        </div>
        <div class="loader"></div>
        <div class="manual-link">
            <p>¿No te redirige automáticamente?</p>
            <a href="index.html">Haz clic aquí</a>
        </div>
    </div>
</body>
</html>
