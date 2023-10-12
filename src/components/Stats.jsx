export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercent === 100
          ? `You are ready to GO!!`
          : ` Yout have ${numItems} items on your list and you already pack ${numPacked}
          (${numPercent}%)`}
      </em>
    </footer>
  );
}
