// app/week-3/page.js
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-pink-200 py-10 px-4 ">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-600">Shopping List</h1>
      </header>
      <ItemList />
    </main>
  );
}
