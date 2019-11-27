import React from 'react';
import TeamDetailContainer from 'containers/TeamDetailContainer';

const TeamDetail = ({ match }) => {
  const { teamId } = match.params;

  return (
    <>
      <TeamDetailContainer teamId={teamId} />
    </>
  );
};

export default TeamDetail;
