import logo from '../assets/logo.svg';

const Balance = () => {
  return (
    <article className='bg-primary rounded-lg px-6 py-5 flex flex-row justify-between items-center mb-5 w-full'>
      <div>
        <h3 className='font-extralight text-sm leading-6'> My balance</h3>
        <p className='font-semibold text-2xl'> $921.48</p>
      </div>
      <img src={logo} alt='logo' className='max-w-40 object-cover' />
    </article>
  );
};

export default Balance;
