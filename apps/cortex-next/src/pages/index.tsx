import Head from "next/head";
import { Button } from "ui";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Docs - Turborepo Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
          <Button intent={"primary"}>Primary</Button>
      </main>
    </div>
  );
}
