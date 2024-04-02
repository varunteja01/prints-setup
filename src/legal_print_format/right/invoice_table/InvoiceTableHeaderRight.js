import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { borderColor, legalInvoiceStyleTableLeft } from '../../InvoiceStyles';
import Moment from 'moment';

// Destructure the imported styles
const { tableData } = legalInvoiceStyleTableLeft;

const InvoiceTableHeaderRight = ({ tableColumns, tableStyles }) => {
    const create_style = StyleSheet.create(tableStyles);
    const rows = (
        <View
            style={{
                ...tableData,
                height: 14.5,
                backgroundColor: '#dbdbdb',
            }}
        >
            {tableColumns?.map((element, index) => {
                let cell_style = {
                    ...create_style[`${element.column}`],
                };
                return <Text style={cell_style}>{tableColumns[index].heading}</Text>;
            })}
        </View>
    );
    return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableHeaderRight;
