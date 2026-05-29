export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    cells.forEach((cell) => {
      // No special restructuring needed — content is simple link lists
    });
  });
}
