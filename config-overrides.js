/**
 * 앤트 디자인은 많은 컴포넌트를 제공하는 만큼 번들링 결과도 크기 때문에
 * 필요한 코드만 라이브러리에서 가져와 번들링 시킴
 * 참고링크: https://ant.design/docs/react/use-with-create-react-app#Advanced-Guides
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#5f76f3' },
  }),
);
