document.getElementById('convertBtn').addEventListener('click', function() {
    // Get the hex input value
    let hexInput = document.getElementById('hexInput').value;

    // Check if the input is a valid hex color
    if (!/^#[0-9A-F]{6}$/i.test(hexInput)) {
        alert('Invalid hex color. Please enter a valid hex color code.');
        return;
    }

    // Convert hex to RGB
    let rgb = hexToRgb(hexInput);

    // Display the result
    document.getElementById('redInput').value = rgb.r;
    document.getElementById('greenInput').value = rgb.g;
    document.getElementById('blueInput').value = rgb.b;
});

function hexToRgb(hex) {
    // Remove the hash (#) if present
    hex = hex.replace(/^#/, '');

    // Parse the hex value
    let bigint = parseInt(hex, 16);

    // Extract RGB components
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r, g, b };
}