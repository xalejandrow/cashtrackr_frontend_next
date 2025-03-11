export default function NosotrosLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <h1>Segmento Nosotros</h1>
          {children}
        </>
    );
  }