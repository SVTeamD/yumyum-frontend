import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

interface Props {
  takeOut: boolean;
}

export default function OrderChoice({ takeOut }: Props) {
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
                onClick={() => {
                  takeOut = true;
                }}
                variant="contained"
                color="success"
                href="/order/details"
                startIcon={<TakeoutDiningIcon />}
                sx={{
                  fontSize: '1rem',
                  weight: '5rem',
                  height: '5rem',
                  color: '#000',
                  borderRadius: '1rem'
                }}
              >
                포장하기
              </Button>
            </Grid>
            <Grid style={{ padding: '1rem' }}>
              <Button
                onClick={() => {
                  takeOut = false;
                }}
                variant="contained"
                color="primary"
                href="/order/details"
                startIcon={<StoreMallDirectoryIcon />}
                sx={{
                  fontSize: '1rem',
                  weight: '5rem',
                  height: '5rem',
                  color: '#000',
                  borderRadius: '1rem'
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
