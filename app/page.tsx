import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <center className=" text-2xl text-white my-12">
        Write in search input to search in wikipedia platform
      </center>
    </main>
  );
}
