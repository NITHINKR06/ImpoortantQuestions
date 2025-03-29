// app/page.jsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      gap: '1rem', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh'
    }}>
      <Link href={'/mse2'}>Mse 2 fcn notes</Link>
    </div>
  );
}
