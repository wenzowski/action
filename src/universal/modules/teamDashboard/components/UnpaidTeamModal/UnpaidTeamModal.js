import React, {PropTypes} from 'react';
import {DashModal} from 'universal/components/Dashboard';
import IconLink from 'universal/components/IconLink/IconLink';
import Type from 'universal/components/Type/Type';

const UnpaidTeamModal = (props) => {
  const {problem, solution, isALeader, handleClick} = props;
  return (
    <DashModal position="absolute" showsOver="main">
      <Type align="center" bold marginBottom="1.5rem" scale="s7" colorPalette="cool">
        Oh dear...
      </Type>
      <Type align="center" bold scale="s4">
        {problem}<br />
        {solution}<br />
      </Type>
      {isALeader &&
        <IconLink
          colorPalette="warm"
          icon="arrow-circle-right"
          iconPlacement="right"
          label="Take me there"
          margin="1.5rem 0 0"
          onClick={handleClick}
          scale="large"
        />
      }
    </DashModal>
  );
};

UnpaidTeamModal.propTypes = {
  router: PropTypes.object,
  orgId: PropTypes.string,
  teamName: PropTypes.string
};

export default UnpaidTeamModal;