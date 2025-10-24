export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-4 border-b border-gray-300 hover:bg-gray-300">
      <div>
        <h3 className="text-lg font-medium text-red-600">{name}</h3>
        <p className="text-sm text-slate-500">Category: {category}</p>
      </div>
      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
        Qty: {quantity}
      </span>
    </li>
  );
}
