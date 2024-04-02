import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { legalInvoiceStyleFooterLeft } from '../InvoiceStyles';

// Destructure the imported styles
const {
  footerContainer,
  footerAmountNames,
  footerAmountSplitter,
  footerAmountValues,
  footerAmountValuesDiscAmt,
  footerAmountValuesDiscAmtMargin,
  footerAmountValuesNetAmt,
  footerAuthorisedAgencySign,
} = legalInvoiceStyleFooterLeft;

const InvoiceFooter = ({
  footer,
  items,
  products,
  invoice,
  show_total,
  qr_code,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 130,
        borderTopWidth: 0.5,
        borderTopColor: '#100c08',
      }}
    >
      <View style={footerContainer}>
        <View style={footerAmountNames}>
          <Text>Gross Amt</Text>
          <Text>Disc Amt</Text>
          <Text>GST Amt</Text>
          <Text>Credit Amt</Text>
          <Text>Adjust Amt</Text>
          <Text>NET AMT</Text>
        </View>
        <View style={footerAmountSplitter}>
          {Array(6)
            .fill(':')
            .map((each) => (
              <Text>{each}</Text>
            ))}
        </View>
        <View style={footerAmountValues}>
          <Text>{footer?.gross_total}</Text>
          <Text>{footer?.total_disc}</Text>
          <Text>{footer?.total_gst_value}</Text>
          <Text>{parseFloat(footer?.credit_note_amount)?.toFixed(2)}</Text>
          <Text>0.00</Text>
          <Text style={footerAmountValuesNetAmt}>
            {parseFloat(footer?.net_amount)?.toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={footerAuthorisedAgencySign}>
        <Text>For {invoice?.firm_name}</Text>
      </View>
    </View>
  );
};

export default InvoiceFooter;
