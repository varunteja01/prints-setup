import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { borderColor, legalInvoicePromoContentStyles } from '../InvoiceStyles';

// Destructure the imported styles
const { container, sno, hsn } = legalInvoicePromoContentStyles;

const Promo = ({ footer, side }) => {
    const text1 = 'Powered by Smartpharma360™ ';
    const text2 = '|| +91 7337441325 ';
    const text3 = '|| www.smartpharma360.in';

    return (
        <View style={side === 'right' ? { ...container, marginTop: '3px' } : container}>
            <Text style={hsn}>{`${text1} ${side === 'right' ? text2 : ''} ${text3} `}</Text>
            <Text style={sno}>{footer?.temp_invoice_number}</Text>
        </View>
    );
};

export default Promo;
