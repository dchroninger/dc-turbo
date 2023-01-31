import Head from "next/head";
import {Typography, Button, Link} from "ui";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Docs - Turborepo Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        {/*<Typography intent={"primary"}>Test Text</Typography>*/}
        <Link intent={"primary"}>Primary</Link>
      </main>
    </div>
  );
}
