
const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/search', async (req, res) => {
    const query = req.body.user_query;
    try {
        const searchResults = await fetchSearchResults(query);
        if (searchResults.length === 0) {
            res.status(404).json({ message: 'No search results found' });
        } else {
            res.json({ searchResults });
        }
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

async function fetchSearchResults(query) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${query}`);
    await page.waitForSelector('div.g');

    const searchResults = await page.evaluate(() => {
        const results = [];
        const elements = document.querySelectorAll('div.g');
        elements.forEach(element => {
            const title = element.querySelector('h3')?.innerText || '';
            const link = element.querySelector('a')?.href || '';
            if (title && link) {
                results.push({ title, link });
            }
        });
        return results;
    });

    await browser.close();
    return searchResults;
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
