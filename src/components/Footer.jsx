import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <ul className="personal-information-area">
            <li>
              <Link to="#">서비스소개</Link>
            </li>
            <li>
              <Link to="#">이용약관</Link>
            </li>
            <li>
              <Link to="#">개인정보처리방침</Link>
            </li>
          </ul>
          <p className="footer-description">
            상호명: (주) 포맨 <span className="dd" /> 대표: 고기훈, 백경준,
            김형선, 정상협
            <br />
            주소: 서울특별시 강남구 역삼동 역삼로 180(마루180) 지하 1층
            <br />
            <br />
            <br />
            2019 &copy; <span className="text-bold">Fourman</span>. All rights
            reserved.
          </p>
        </div>
        {/* Copyright &copy; 개같하 All Rights Reserved */}
      </div>
    </footer>
  );
};

export default Footer;
