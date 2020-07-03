import Head from 'next/head';
// import Navbar from '../Common/Navbar/Navbar';
// import Footer from '../Common/Footer';
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>TopWebDeveloperCompanies</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        {/* <Navbar /> */}
      </header>
      <main>{children}</main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}
