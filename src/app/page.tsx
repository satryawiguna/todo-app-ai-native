import { TodoFilter } from '@/components/todos/TodoFilter';
import { TodoList } from '@/components/todos/TodoList';

export default function HomePage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Daftar Todo</h1>
      </div>

      <TodoFilter />
      <TodoList />
    </div>
  );
}
