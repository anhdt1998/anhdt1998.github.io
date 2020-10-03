import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
class TaskItem extends Component {
  render() {
      const {classes,task,status} = this.props;
        const{id,title} = task;
    return (
        <Card key={id} className={classes.card}>
        <CardContent>
            <Grid container justify="space-between">
                <Grid item md={8}>
                    <Typography component="h2">{title}</Typography>
                </Grid>
                <Grid item md={4}>
                    {status.label}
                </Grid>
            </Grid>
            <p>{task.discription}</p>
        </CardContent>
        <CardActions className={classes.cardAction}>
             <Fab color="primary" aria-label="add" className={classes.fab} size="small">
                 <AddIcon fontSize="small" />
            </Fab>
            <Fab color="secondary" aria-label="edit" className={classes.fab} size="small">
                <EditIcon fontSize="small" />
            </Fab>
        </CardActions>
    </Card>
    );
  }
}
export default withStyles(styles)(TaskItem);