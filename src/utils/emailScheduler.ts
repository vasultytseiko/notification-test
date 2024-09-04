import type { NextApiRequest, NextApiResponse } from 'next';
// import cron from 'node-cron';

// // Використовуємо глобальну змінну для перевірки, чи вже налаштовано cron-завдання
//   cron.schedule('*/5 * * * *', () => {
//     console.log('Це повідомлення буде виводитись кожні 5 хвилин на сервері');
//   });


// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json({ message: 'Cron job set up successfully' });
// }

export function GET() {
  console.log('dfsddsfsdfd')
  return new Response(`Hello from`);
}

