import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography, Button, Card } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        backgroundColor: 'salmon'
    },
    card: {
        background: 'teal',
        width: 600,
        height: 400
    },
    parentGrid: {
        backgroundColor: 'gray',
        flexGrow: 1
    }
});

export const GridPlayground = () => {
    const classes = useStyles();

    return (
        <Container
            className={classes.container}
            xs={12}
        >
            <Grid
                container
                className={classes.parentGrid}
                direction="column"
                // justify="center"
                alignItems="flex-end"
            >

                <Grid
                    item
                    container
                    xs={12}
                // spacing={3}
                >
                    <Card
                        className={classes.card}
                    >
                        <Typography>
                            I am the Title
                </Typography>
                        <Typography>
                            I am happen to be the text that comes after
                            the title. My friends call me subtext but you may call
                            me lil S
                </Typography>

                        <Grid item>
                            <Button variant='contained' color='primary'>
                                Button 1
                    </Button>
                            <Button variant='contained' color='default'>
                                Button 2
                    </Button>
                        </Grid>

                    </Card >
                </Grid>
            </Grid>

        </Container>
    )

}

export default GridPlayground