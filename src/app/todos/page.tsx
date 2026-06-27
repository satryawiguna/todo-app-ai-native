import { TodoList } from '@/components/todos/TodoList';

export default function TodosPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Semua Todo</h1>
      <TodoList />
    </div>
  );
}
