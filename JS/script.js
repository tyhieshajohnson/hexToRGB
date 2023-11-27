document.getElementById('convertBtn').addEventListener('click', function() {
    // Get the hex input value
    var hexInput = document.getElementById('hexInput').value;

    // Check if the input is a valid hex color
    if (!/^#[0-9A-F]{6}$/i.test(hexInput)) {
        alert('Invalid hex color. Please enter a valid hex color code.');
        return;
    }

    // Convert hex to RGB
    var rgb = hexToRgb(hexInput);

    // Display the result
    document.getElementById('redInput').value = rgb.r;
    document.getElementById('greenInput').value = rgb.g;
    document.getElementById('blueInput').value = rgb.b;
});

function hexToRgb(hex) {
    // Remove the hash (#) if present
    hex = hex.replace(/^#/, '');

    // Parse the hex value
    var bigint = parseInt(hex, 16);

    // Extract RGB components
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return { r, g, b };
}