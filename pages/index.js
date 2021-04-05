import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Post from "../components/post";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const res = await fetch(
        `https://api.buttercms.com/v2/content/products/?auth_token=${process.env.API_TOKEN}`
      );
      const { data } = await res.json();
      const allProducts = data.products;
      setPosts([...allProducts]);
    }
    getPosts();
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to <a href="/">Butter Store!</a>
        </h3>

        <p className={styles.description}>World's best Online store 😎</p>

        <div className={styles.grid}>
          {posts.length > 0
            ? posts.map((p) => {
              return (
                <Post
                  alt={p.alt}
                  image={p.image}
                  description={p.description}
                  name={p.name}
                  price={p.price}
                />
              )
            })
            : null}
                 
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
      />
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="YTFiNzVkZmYtNzE4Ny00N2RmLTgyYzAtNzVjNzQzZWZkMWMxNjM3NTMwODYyMjM1MjgwODQz"
        hidden
      ></div>
    </div>
  );
}
