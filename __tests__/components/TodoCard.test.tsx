import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TodoCard } from '@/components/todos/TodoCard';
import type { Todo } from '@/types/todo';

const mockTodo: Todo = {
  id: '1',
  title: 'Beli susu',
  description: 'Di supermarket',
  status: 'active',
  priority: 'high',
  createdAt: '2026-06-26T10:00:00.000Z',
  updatedAt: '2026-06-26T10:00:00.000Z',
};

function renderWithProvider(ui: React.ReactElement) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
}

describe('TodoCard', () => {
  it('should display the todo title', () => {
    renderWithProvider(<TodoCard todo={mockTodo} />);
    expect(screen.getByText('Beli susu')).toBeInTheDocument();
  });

  it('should display priority label', () => {
    renderWithProvider(<TodoCard todo={mockTodo} />);
    expect(screen.getByText('Tinggi')).toBeInTheDocument();
  });

  it('should show edit link for active todo', () => {
    renderWithProvider(<TodoCard todo={mockTodo} />);
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });
});
