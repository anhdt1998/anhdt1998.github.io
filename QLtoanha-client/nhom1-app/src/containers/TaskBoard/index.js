import React, { Component } from 'react';
import {withStyles, ThemeProvider} from '@material-ui/styles';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../constants';
import TaskList from './../../components/TaskList';
const listTask = [
    {
        id: 1,
        title: "Read book",
        description: "hdakjhdsjhd",
        status: 0
    },
    {
        id: 2,
        title: "Play game",
        description: "hdakjhdsjhd",
        status: 2
    },
    {
        id: 3,
        title: "Slepp asjdj",
        description: "hdakjhdsjhd",
        status: 1
    }
]

class TaskBoard extends Component {
    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status) => { // duyệt từng phần tử theo index của STATUSES
                        const taskFilered = listTask.filter(task => task.status === status.value); //filter cacs task id giống nhau và trùng với value trong STATUSES
                        return (
                            <TaskList task={taskFilered} status={status} key={status.value} />
                        );  
                    })
                }
            </Grid>
        );
        return xhtml;
    }
  render() {
      const {classes} = this.props;
    return (
      <div className={classes.taskBoard}>
          <Button variant="contained" color="primary" className={classes.button}>
            <AddIcon /> Add new job
          </Button>
          {this.renderBoard()}
      </div>
    );
  }
}
export default withStyles(styles)(TaskBoard);