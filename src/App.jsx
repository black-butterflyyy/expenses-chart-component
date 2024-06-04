import Balance from './components/Balance';
import Chart from './components/Chart';

function App() {
  return (
    <section className='font-sans h-screen bg-cream flex flex-col justify-center items-center px-5 text-lg text-very-pale-orange  lg:px-0'>
      <Balance />
      <Chart />
    </section>
  );
}

export default App;
