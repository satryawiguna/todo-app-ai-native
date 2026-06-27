export function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateTime(isoString: string): string {
  return new Date(isoString).toLocaleString('id-ID');
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'high': return 'text-red-600 bg-red-50';
    case 'medium': return 'text-yellow-600 bg-yellow-50';
    case 'low': return 'text-green-600 bg-green-50';
    default: return 'text-gray-600 bg-gray-50';
  }
}

export function getPriorityLabel(priority: string): string {
  switch (priority) {
    case 'high': return 'Tinggi';
    case 'medium': return 'Sedang';
    case 'low': return 'Rendah';
    default: return priority;
  }
}

export function getStatusLabel(status: string): string {
  switch (status) {
    case 'active': return 'Aktif';
    case 'completed': return 'Selesai';
    default: return status;
  }
}
