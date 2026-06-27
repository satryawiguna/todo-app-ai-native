import { z } from 'zod';

export const createTodoSchema = z.object({
  title: z
    .string()
    .min(1, 'Judul wajib diisi')
    .max(200, 'Judul maksimal 200 karakter')
    .trim(),
  description: z
    .string()
    .max(1000, 'Deskripsi maksimal 1000 karakter')
    .optional()
    .or(z.literal('')),
  priority: z.enum(['low', 'medium', 'high']).optional(),
});

export const updateTodoSchema = z.object({
  title: z.string().min(1).max(200).trim().optional().or(z.literal('')),
  description: z.string().max(1000).optional().or(z.literal('')),
  status: z.enum(['active', 'completed']).optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
});

export type CreateTodoFormData = z.infer<typeof createTodoSchema>;
export type UpdateTodoFormData = z.infer<typeof updateTodoSchema>;
