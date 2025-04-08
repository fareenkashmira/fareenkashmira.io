document.addEventListener("DOMContentLoaded", () => {
  const entries = [
    {
      title: "Designing Calm",
      date: "April 8, 2025",
      summary: "Exploring how design can bring peace and simplicity into digital experiences.",
    },
    {
      title: "Mapping Emotions",
      date: "March 20, 2025",
      summary: "A dive into emotional journey mapping for more intuitive user experiences.",
    },
    {
      title: "Listening to Users",
      date: "February 15, 2025",
      summary: "What I learned from 20 user interviews about empathy in UX research.",
    }
  ];

  const container = document.getElementById("ink-entries");

  entries.forEach(entry => {
    const card = document.createElement("div");
    card.className = "entry-card";

    card.innerHTML = `
      <h3 class="entry-title">${entry.title}</h3>
      <div class="entry-meta">${entry.date}</div>
      <p class="entry-content">${entry.summary}</p>
    `;

    container.appendChild(card);
  });
});
