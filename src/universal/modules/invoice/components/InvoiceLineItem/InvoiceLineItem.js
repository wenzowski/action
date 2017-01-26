import React, {PropTypes} from 'react';
import withStyles from 'universal/styles/withStyles';
import {css} from 'aphrodite-local-styles/no-important';
import ui from 'universal/styles/ui';
import appTheme from 'universal/styles/theme/appTheme';

const InvoiceLineItem = (props) => {
  const {
    detailsOpen,
    detailsToggle,
    item,
    styles
  } = props;

  const detailsContentStyles = css(
    styles.detailsContent,
    detailsOpen && styles.detailsOpen
  );

  const makeToggle = () => {
    const label = detailsOpen ? 'Hide Details' : 'View Details';
    return (
      <div className={css(styles.detailsToggle)} onClick={detailsToggle}>{label}</div>
    );
  };

  const makeDetails = (arr) => {
    const details = [];
    arr.map((d, i) => details.push(
      <div className={css(styles.detailContent)} key={i}>
        <div className={css(styles.fill)}>{d.desc}</div>
        <div>{d.amount}</div>
      </div>
    ));
    return details;
  };

  return (
    <div className={css(styles.item)}>
      <div className={css(styles.itemContent)}>
        <div className={css(styles.fill)}>{item.desc}</div>
        <div>{item.amount}</div>
      </div>
      {item.details &&
        <div className={`${css(styles.details)} hide-print`}>
          {makeToggle()}
          <div className={detailsContentStyles}>
            {makeDetails(item.details)}
          </div>
        </div>
      }
    </div>
  );
};

InvoiceLineItem.propTypes = {
  detailsOpen: PropTypes.bool,
  detailsToggle: PropTypes.func,
  item: PropTypes.object,
  styles: PropTypes.object
};

const breakpoint = ui.invoiceBreakpoint;
const styleThunk = () => ({
  item: {
    borderBottom: `1px solid ${ui.invoiceBorderColorLighter}`,
    display: 'block',
    paddingBottom: '.625rem',
    paddingTop: '.625rem'
  },

  itemContent: {
    ...ui.invoiceItemBaseStyles,
    fontSize: appTheme.typography.sBase,
    lineHeight: '1.5',

    [breakpoint]: {
      fontSize: appTheme.typography.s5
    }
  },

  fill: {
    flex: 1,
    paddingRight: '1em'
  },

  details: {
    display: 'block'
  },

  detailsToggle: {
    color: appTheme.palette.cool,
    cursor: 'pointer',
    fontSize: appTheme.typography.s2,
    fontWeight: 700,
    lineHeight: appTheme.typography.s5,
    textTransform: 'uppercase'
  },

  detailsContent: {
    display: 'none'
  },

  detailsOpen: {
    display: 'block'
  },

  detailContent: {
    ...ui.invoiceItemBaseStyles,
    fontSize: appTheme.typography.s2,
    lineHeight: '1.375rem'
  }
});

export default withStyles(styleThunk)(InvoiceLineItem);