import { DataPoint } from '../../interfaces/DataPoint';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }: { dataPoints: DataPoint[] }) => {
  let maxValue = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={maxValue}
          dataPoint={dataPoint}
        />
      ))}
    </div>
  );
};

export default Chart;
