import React, {PropTypes} from 'react';
import withStyles from 'universal/styles/withStyles';
import {css} from 'aphrodite-local-styles/no-important';
import ui from 'universal/styles/ui';
import appTheme from 'universal/styles/theme/appTheme';
import Row from 'universal/components/Row/Row';
import UserTag from 'universal/components/UserTag/UserTag';
import FontAwesome from 'react-fontawesome';
import makeDateString from 'universal/utils/makeDateString';

const InvoiceRow = (props) => {
  const {
    invoice: {
      invoiceDate,
      isEstimate,
      amount
    },
    styles
  } = props;
  const invoiceAvatarStyles = css(
    styles.invoiceAvatar,
    isEstimate && styles.invoiceAvatarEstimate
  );
  return (
    <Row>
      <div className={invoiceAvatarStyles}>
        <div className={css(styles.icon)}>
          <FontAwesome name="file-text" className={css(styles.fileIcon)}/>
        </div>
      </div>
      <div className={css(styles.invoiceInfo)}>
        <div className={css(styles.infoRow)}>
          <div className={css(styles.infoRowLeft)}>
            <div className={css(styles.invoiceTitle)}>
              {makeDateString(invoiceDate, false)}
            </div>
            {isEstimate &&
              <UserTag colorPalette="light" label="Current Estimate"/>
            }
          </div>
          <div className={css(styles.infoRowRight)}>
            <span className={css(styles.invoiceAmount)}>
              ${amount.toFixed(2)}
            </span>
          </div>
        </div>
        <div className={css(styles.infoRow)}>
          <div className={css(styles.infoRowLeft)}>
            <div className={css(styles.subHeader)}>
              See Details
            </div>
          </div>
          <div className={css(styles.infoRowRight)}>
            {isEstimate ?
              <span className={css(styles.date, styles.toPay)}>
                Your card will be charged on {makeDateString(invoiceDate, false)}
              </span> :
              <span className={css(styles.date, styles.paid)}>
                Paid on {makeDateString(invoiceDate, false)}
              </span>
            }
          </div>
        </div>
      </div>
    </Row>
  );
};

InvoiceRow.propTypes = {
  styles: PropTypes.object
};

const lineHeightLarge = '1.625rem';
const lineHeightSmall = '1.125rem';

const styleThunk = () => ({
  fileIcon: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    fontSize: ui.iconSize2x,
    height: 50,
    justifyContent: 'center',
    width: 50
  },

  invoiceAmount: {
    fontSize: appTheme.typography.s6,
    color: appTheme.palette.cool,
  },

  invoiceAvatar: {
    backgroundColor: appTheme.palette.mid40l,
    borderRadius: '.5rem'
  },

  invoiceAvatarEstimate: {
    backgroundColor: appTheme.palette.mid
  },

  invoiceInfo: {
    paddingLeft: ui.rowGutter,
    width: '100%'
  },

  amountAndDueDate: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    textAlign: 'right'
  },

  nameAndTags: {
    // Define
  },

  date: {
    fontSize: appTheme.typography.s2
  },

  toPay: {
    color: appTheme.palette.cool,
    fontWeight: 700
  },

  paid: {
    color: appTheme.palette.mid,
    fontWeight: 700
  },

  invoiceTitle: {
    color: ui.rowHeadingColor,
    display: 'inline-block',
    fontSize: ui.rowHeadingFontSize,
    lineHeight: lineHeightLarge,
    verticalAlign: 'middle'
  },

  subHeader: {
    color: appTheme.palette.mid,
    fontSize: appTheme.typography.s2,
    fontWeight: 700,
    lineHeight: appTheme.typography.s4,
  },

  infoRow: {
    alignItems: 'center',
    display: 'flex',
    width: '100%'
  },

  infoRowLeft: {
    // Define
  },

  infoRowRight: {
    flex: 1,
    justifyContent: 'flex-end',
    textAlign: 'right',
  },

  infoLink: {
    color: appTheme.palette.mid,
    fontSize: appTheme.typography.s2,
    fontWeight: 700,
    lineHeight: appTheme.typography.s4,

    ':hover': {
      color: appTheme.palette.mid,
      textDecoration: 'underline'
    },
    ':focus': {
      color: appTheme.palette.mid,
      textDecoration: 'underline'
    }
  }
});

export default withStyles(styleThunk)(InvoiceRow);