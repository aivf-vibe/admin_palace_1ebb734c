import { useTheme } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2025-01', value: 1000000 },
  { date: '2025-02', value: 1150000 },
  { date: '2025-03', value: 1080000 },
  { date: '2025-04', value: 1250000 },
  { date: '2025-05', value: 1400000 },
  { date: '2025-06', value: 1320000 },
  { date: '2025-07', value: 1500000 },
];

const PerformanceChart = () => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip 
          formatter={(value: number) => `$${value.toLocaleString()}`}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke={theme.palette.primary.main} 
          name="Fund Value"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;