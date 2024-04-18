export const metadata = {
  title: 'Yasmine\'s Portfolio',
  description: 'Yasmine Subbagh\'s personal portfolio website, built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
