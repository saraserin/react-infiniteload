import React from 'react';
import { InView } from 'react-intersection-observer';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  Typography,
  Theme
} from '@material-ui/core';

import { SOQuestion } from '../api/questionsApi';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}))(Tooltip);

export type SimpleTableProps = {
  data: SOQuestion[];
  onNearTableEnd?: () => void;
};

const SimpleTable = ({ data, onNearTableEnd }: SimpleTableProps) => {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Author</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Created On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: SOQuestion, i: number) => (
              <React.Fragment key={row.question_id}>
                <HtmlTooltip
                  interactive
                  placement="top"
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{row.title}</Typography>
                      <a
                        href={row.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go to this question
                      </a>
                    </React.Fragment>
                  }
                >
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.owner.display_name}
                    </TableCell>
                    <TableCell>
                      {i === data.length - 5 && (
                        <InView
                          as="div"
                          onChange={
                            onNearTableEnd
                              ? (inView, entry) => {
                                  if (inView) onNearTableEnd();
                                }
                              : () => {}
                          }
                          triggerOnce
                        >
                          <></>
                        </InView>
                      )}
                      {row.title}
                    </TableCell>
                    <TableCell>{row.creation_date}</TableCell>
                  </TableRow>
                </HtmlTooltip>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SimpleTable;
