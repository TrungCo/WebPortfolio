const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

app.post('/api/contact', (req, res) => {
    const { name, email, purpose, message } = req.body;
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Purpose: ${purpose}`);
    console.log(`Message:\n${message}`);
    console.log('-----------------------------------');
    
    // In a real application, you would send an email or save to a database here.
    
    // Simulate slight delay
    setTimeout(() => {
        res.json({ success: true, message: 'Message received successfully!' });
    }, 1000);
});

const DATA_FILE = path.join(__dirname, 'data.json');

app.get('/data.json', (req, res) => {
    res.sendFile(DATA_FILE);
});

app.get('/api/content', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });
        res.json(JSON.parse(data));
    });
});

app.post('/api/content', (req, res) => {
    const updatedData = req.body;
    fs.writeFile(DATA_FILE, JSON.stringify(updatedData, null, 2), 'utf8', (err) => {
        if (err) return res.status(500).json({ success: false, error: 'Failed to write data' });
        res.json({ success: true });
    });
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});
