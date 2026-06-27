import "./globals.css";

export const metadata = {
  title: "Unique Minds | Child Development Services",
  description: "Providing premium occupational therapy, speech therapy, and psychological services for children.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
