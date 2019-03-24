import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 280,
    height: 500,
    zIndex:1000
  },
  media: {
    height: 300,
  },
};

function CharacterStats(props) {

  const { classes } = props;
  const properties = props.stats.stats.map((property) => <Typography component="p">{property.statName + ": " + property.value}</Typography>);

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={ props.stats.icon }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.stats.legendName}
          </Typography>
          {properties}
        </CardContent>
    </Card>
  );
}

CharacterStats.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterStats);