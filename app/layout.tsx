import Providers from "../lib/providers"
import Footer from "../ui/navigation/Footer"
import NavBar from "../ui/navigation/NavBar"
export const metadata = {
  title: 'STL FEST 2023',
  description: 'STL FEST 2023',
  openGraph: {
    title: "RandalHerndon.com",
    description:
      "STL FEST 2023",
    url: "https:/stlfest.live",
    siteName: "STL FEST",
    images: [
      {
        url: "https://i.imgur.com/o8CKJ0e.jpeg",
        width: 800,
        height: 800,
      },
      {
        url: "https://i.imgur.com/o8CKJ0e.jpeg",
        width: 1800,
        height: 1800,
        alt: "STLFEST",
      },
    ],
    locale: "en-US",
    type: "website",

  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xvl5aez.css" />
      </head>
      <Providers>
        <body>
          <NavBar />{children}
          <Footer />
        </body></Providers>
    </html>
  )
}
