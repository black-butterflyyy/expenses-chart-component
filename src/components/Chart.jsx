import ChartBar from './ChartBar';
import { calcHeight } from '../utils/util';

const data = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

const Chart = () => {
  const amounts = data.map((item) => item.amount);
  const max = Math.max(...amounts);

  return (
    <article className='bg-very-pale-orange rounded-[1rem] py-5 pb-10 px-8 w-full md:max-w-md'>
      <h3 className='text-dark-brown font-extrabold text-2xl'>
        Spending - Last 7 days
      </h3>
      <div className='bars flex justify-center items-end pt-16 gap-x-3'>
        {data.map((value) => (
          <ChartBar
            value={value}
            height={calcHeight(value.amount)}
            key={value.day}
            isMax={value.amount === max}
          />
        ))}
      </div>
      <div className='line bg-cream h-[3px] mt-4'></div>
      <div className='flex justify-between items-center'>
        <div className='this-month '>
          <h4 className='text-medium-brown text-[1rem] mt-6 font-medium'>
            Total this month
          </h4>
          <p className='text-dark-brown text-3xl font-bold mt-1'>$478.33</p>
        </div>
        <div className='last-month self-end'>
          <p className='text-dark-brown text-md font-bold leading-none text-right'>
            +2.4%
          </p>
          <p className='text-medium-brown text-[1rem] font-medium'>
            from last month
          </p>
        </div>
      </div>
    </article>
  );
};

export default Chart;
