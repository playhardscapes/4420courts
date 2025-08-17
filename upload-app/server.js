const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Route for the upload tool
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 4420 Courts Upload Tool Server Started!');
    console.log(`📱 Open your browser and go to: http://localhost:${PORT}`);
    console.log('🔧 Press Ctrl+C to stop the server');
    console.log('');
    console.log('🏀 Ready to upload images to Cloudinary!');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server...');
    process.exit(0);
});