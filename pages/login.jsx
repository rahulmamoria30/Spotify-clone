import { signIn } from "next-auth/react";
import Head from "next/head";
const Login = () => {
  return (
    <>
      <Head>
        <title>Login to your spotify account</title>
      </Head>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">Welcome to MusicApp</h1>
          <p className="text-lg mt-2">Your ultimate music experience</p>
        </header>
        <main className="text-center mb-6">
          <p className="mb-6 max-w-md">
            Connect with Spotify to explore millions of songs, create playlists,
            and share your music taste with the world.
          </p>
          <button
            className="text-white px-8 py-2 rounded-full bg-green-500 font-bold text-lg hover:bg-green-600 transition duration-300"
            onClick={() => signIn("spotify", { callbackUrl: "/" })}
          >
            Login with Spotify
          </button>
        </main>
        <footer className="text-center mt-10">
          <p className="text-sm text-gray-400">
            &copy; 2024 MusicApp. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Login;
