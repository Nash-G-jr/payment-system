import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-[18px] mb-2">This is what I have made</h1>
      <div>
        <Link href="/auth">Authentication</Link>
      </div>
      <div>
        <Link href="/avatarLoad">AvatarLoad</Link>
      </div>
      <div>
        <Link href="/avatarSave">AvatarSave</Link>
      </div>
    </main>
  );
}
