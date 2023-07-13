import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='icon' href='/123.png'/>
      </Head>
      <body>
        <nav>
          <a className='RegAnc' href='/'>Главная</a>
          <a className='RegAnc' href='/registration'>Регистрация нового студента</a>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
