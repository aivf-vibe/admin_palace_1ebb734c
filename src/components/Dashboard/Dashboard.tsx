import { Grid, Container, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PeopleIcon from '@mui/icons-material/People';
import StatCard from './StatCard';
import PerformanceChart from './PerformanceChart';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Hedge Fund Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Assets Under Management"
            value="$1.5B"
            icon={<AccountBalanceIcon fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="YTD Return"
            value="+15.2%"
            icon={<TrendingUpIcon fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Sharpe Ratio"
            value="2.1"
            icon={<ShowChartIcon fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Investors"
            value="142"
            icon={<PeopleIcon fontSize="large" />}
          />
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Fund Performance
          </Typography>
          <PerformanceChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;