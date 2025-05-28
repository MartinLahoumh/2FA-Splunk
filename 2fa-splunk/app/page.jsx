'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/config/supabaseClient';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleSignupClick = () => {
    router.push('/signup');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleLogoutClick = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 font-sans flex flex-col items-center justify-center gap-4">
      {user ? (
        <button onClick={handleLogoutClick}>
          Log Out
        </button>
      ) : (
        <>
          <button onClick={handleLoginClick}>
            Log In
          </button>
          <button onClick={handleSignupClick}>
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}
