import { Metadata } from "next";

export const metadata: Metadata = {
    "title": "ECHO",
    "description": "Search and Rescue Robot",
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }