import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useStyles } from "./style";
import { TablePaginationActions } from '../../Table';


export default function (props: { data: any; title: any; fabAction: any; keys: any; customCellRow: any; }) {
    const { data, title, fabAction, keys, customCellRow } = props
    const classes = useStyles();
    const theme = useTheme();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows = data ? (rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)) : 1

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} style={{ minWidth: "100%" }}>
            <Typography className={classes.title}>{title}</Typography>
            <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="custom pagination table">
                    <TableBody>
                        <TableRow  >
                            {keys.map((key: string) => (<TableCell key={key + 'head'} component="th" scope="row" style={{ width: theme.spacing(0) }}>
                                {key !== 'customCell' ? key.toUpperCase() : ""}
                            </TableCell>))}
                        </TableRow>
                        {(data && (rowsPerPage > 0 ? data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : data
                        ).map((row: any) => (
                            <TableRow key={row.id}>

                                {keys.map((key: string) =>
                                    (key !== 'customCell') ? (<TableCell key={key + 'cell'} component="th" scope="row" style={{ width: theme.spacing(0) }}>
                                        {row[key]}
                                    </TableCell>) : (<TableCell key={key + 'cell'} component="th" scope="row" style={{ width: theme.spacing(0) }}>
                                        {customCellRow(row)}
                                    </TableCell>))}

                            </TableRow>
                        ))
                        )}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}

                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={data ? data.length : 0}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            {!!fabAction && <Fab color="primary" aria-label="add" className={classes.addbtn} onClick={fabAction}>
                <AddIcon />
            </Fab>}
        </Grid>
    );
}
