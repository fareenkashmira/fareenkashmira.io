async function fetchBlogPosts() {
    const response = await fetch('https://fareenkashmira.blogspot.com/feeds/posts/default?alt=rss');
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'application/xml');
    const items = xml.querySelectorAll('item');
    let html = '';
    items.forEach((item, index) => {
        if (index < 5) { // Limit to 5 posts
            const title = item.querySelector('title').textContent;
            const link = item.querySelector('link').textContent;
            const pubDate = new Date(item.querySelector('pubDate').textContent).toLocaleDateString();
            html += `<li><a href="${link}" target="_blank">${title}</a> <small>(${pubDate})</small></li>`;
        }
    });
    document.getElementById('blog-posts').innerHTML = html;
}

// Call the function to fetch and display the posts
fetchBlogPosts();
