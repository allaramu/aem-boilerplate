export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // First cell is image, second cell is text content
    if (cells.length >= 2) {
      cells[0].classList.add('hero-image');
      cells[1].classList.add('hero-content');
    }
  });
}
