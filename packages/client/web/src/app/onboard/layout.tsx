import Header from './components/Header/Header';

export default function OnBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
