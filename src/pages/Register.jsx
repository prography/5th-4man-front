import React from 'react';
import RegisterFormContainer from '../containers/RegisterFormContainer';

const Register = () => {
  return (
    <>
      <section id="content">
        <div className="container">
          <div className="display-flex flex-direction-column align-items-center content-title-aria">
            <RegisterFormContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
