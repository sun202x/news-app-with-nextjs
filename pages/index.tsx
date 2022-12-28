import Head from 'next/head';

type HomeProps = {
  data: any[];
};

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Index main
        <div>{data}</div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const result = await fetch('');
  const data = result.json();

  return {
    props: { data },
  };
}
