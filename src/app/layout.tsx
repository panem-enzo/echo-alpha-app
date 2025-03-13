export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/x-icon" href="./public/echo_w.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta name="theme-color" content="#000000"/>

          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
          <meta name="apple-mobile-web-app-title" content="ECHO"/>

          <link rel="apple-touch-icon" href="./public/echo.png"/>
          
          <title>ECHO</title>
        </head>
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }