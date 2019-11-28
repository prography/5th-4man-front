import React from 'react';
import RegisterContainer from '../containers/RegisterContainer';

const Register = () => {
  return (
    <>
      <section id="register-content">
        <div className="container">
          <div className="display-flex flex-direction-column align-items-center content-title-aria">
            <RegisterContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
