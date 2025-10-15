import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-white py-10 px-4 ">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold mb-4">Add New Item</h1>
      </header>
      <NewItem />
    </main>
  );
}