import { Dialog, DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Dialog from '@mui/material/Dialog';
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
    <div className="App">
      <Dialog open PaperProps={{ classes: { root: classes.root } }}>
        <DialogContent>Some Content</DialogContent>
      </Dialog>
    </div>
  );
}
