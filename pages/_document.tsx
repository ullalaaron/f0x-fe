import Document, { Html, Head, Main, NextScript } from "next/document";

class F0XDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Manrope:200,300,regular,500,600,700,800%7CPermanent+Marker:regular&display=optional"
            media="all"
          />
          <link
            href="https://uploads-ssl.webflow.com/62cda31…/62d03ba…_favicon32.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link
            href="https://uploads-ssl.webflow.com/62cda31…/62d03b8…_favicon.png"
            rel="apple-touch-icon"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default F0XDocument;
