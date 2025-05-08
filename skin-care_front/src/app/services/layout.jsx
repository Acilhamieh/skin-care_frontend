import Header from '../../components/Header';

export const metadata = {
  title: 'Services',
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
