import { Head, Html, Main, NextScript } from 'next/document';

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('portfolio-theme');
      var theme = stored ? stored : 'dark';
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (error) {}
  })();
`;

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0066FF" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
