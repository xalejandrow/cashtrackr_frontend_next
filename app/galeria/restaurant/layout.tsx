export default function GaleriaLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          {children}
          <h1>Segmento Galeria Restaurant</h1>
        </>
    );
  }