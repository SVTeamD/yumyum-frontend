import { makeStyles } from '@material-ui/styles';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
const useStyles = makeStyles({
  root: {
    borderWidth: '20px',
    borderColor: 'rgba(0,0,0,0.2)',
    borderStyle: 'solid'
  }
});
export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '10vh' }}
      >
        <Grid item xs={2}>
          <Grid container alignItems="center">
            <Grid style={{ padding: '1rem' }}>
              <Button
                href="/order/take-out"
                startIcon={<TakeoutDiningIcon />}
                sx={{
                  weight: '5rem',
                  height: '5rem',
                  color: '#000',
                  border: 'solid 2px #d3d3d3'
                }}
              >
                포장하기
              </Button>
            </Grid>
            <Grid style={{ padding: '1rem' }}>
              <Button
                href="/order/in-store"
                startIcon={<StoreMallDirectoryIcon />}
                sx={{
                  weight: '5rem',
                  height: '5rem',
                  color: '#000',
                  border: 'solid 2px #d3d3d3'
                }}
              >
                먹고가기
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
