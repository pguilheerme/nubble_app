import {z} from 'zod';

const userNameRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'Username inválido').toLowerCase(),
  fullname: z
    .string()
    .min(5, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
