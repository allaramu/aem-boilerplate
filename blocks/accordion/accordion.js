export default async function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const cell = row.querySelector(':scope > div');
    if (!cell) return;

    // Extract the heading (question) and remaining content (answer)
    const heading = cell.querySelector('h3');
    if (!heading) return;

    // Collect all content after the heading as the answer
    const answerDiv = document.createElement('div');
    answerDiv.className = 'accordion-answer';

    // Move all siblings after h3 into answer div
    let sibling = heading.nextElementSibling;
    while (sibling) {
      const next = sibling.nextElementSibling;
      answerDiv.appendChild(sibling);
      sibling = next;
    }

    cell.appendChild(answerDiv);

    // Open first item by default
    if (row === rows[0]) {
      row.classList.add('open');
    }

    // Toggle on heading click
    heading.addEventListener('click', () => {
      // Close all other items
      rows.forEach((r) => {
        if (r !== row) r.classList.remove('open');
      });
      // Toggle current
      row.classList.toggle('open');
    });
  });
}
