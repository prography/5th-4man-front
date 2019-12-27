import React from 'react';
import TeamDetailContainer from 'containers/TeamDetailContainer';

const TeamDetail = ({ match }) => {
  const { team_id } = match.params;

  return (
    <>
      <TeamDetailContainer team_id={team_id} />
    </>
  );
};

export default TeamDetail;
