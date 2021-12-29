import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Icon from '../components/Icon'
import TikTok from '../components/TikTok'
import ScrollSnap from '../components/scrollsnap'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="mt-11">
      <div className="border-4 flex flex-col justify-center items-start max-w-5xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8 border-4 border-red-400">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Camila Ramos Garzon
            </h1>
            {/* <p className="text-white text-xs">@camiinthisthang</p> */}
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Developer Advocate // Founder
              {/* <span className="font-semibold">PlanetScale.</span>
              <br></br>Founder at <span className="font-semibold">STEMTank + Calibaba.</span> */}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              I'm a software engineer who loves to teach. I breakdown technical concepts ranging from the basics of programming to the latest technologies into easy-to-understand videos and blog posts.
            </p>
            <div className="flex flex-row">
            <p className="text-teal-400 font-bold pr-2">l</p>
            <Link href="/about">
            <p className="text-white mb-16 hover:bg-teal-400 rounded-lg p-1">About Me</p>
            </Link>
            </div>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Camila Ramos Garzon Headshot"
              height={176}
              width={176}
              src="/public/pngHeadshot.png"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Content
        </h3>
        <div className="flex flex-row flex-wrap space-x-2">
          <div className="border-4 border-rose-500">
          <TikTok vidLink="https://www.tiktok.com/@camiinthisthang/video/6999680054053637382" videoID="6999680054053637382"></TikTok>
          </div>
          <div className="border-4 border-green-500">
          <TikTok vidLink="https://www.tiktok.com/@camiinthisthang/video/7042774240483052846" videoID="7042774240483052846"></TikTok>
          </div>
          <div className="border-4 border-green-500">
          <TikTok vidLink="https://www.tiktok.com/@camiinthisthang/video/7042711433603419439" videoID="7042711433603419439"></TikTok>
          </div>
        </div>
        <div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Upcoming Events
        </h3>
        </div>
      </div>

        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}