import React from "react";
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from './layout.module.css'

export default function Layout({ children, home }) {
    return (
      <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "TODO APP",
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="TODO APP" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
      <h1 className="text-center text-light mt-4">TODO APP</h1>
      </header>
      <main>{children}</main>
    </div>
    );
  }