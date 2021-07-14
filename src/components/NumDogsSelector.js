export default function NumDogsSelector({onChange}) {
  return (
    <select id="num_dogs_selector" onChange={e => onChange(e.target.value)}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  );
}