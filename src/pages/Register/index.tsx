import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import LoginBlock from './components/LoginBlock';

const { Cell } = ResponsiveGrid;
// 提示组件类型报错解决是升级 types/react@18.0.15
const Register = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <LoginBlock />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Register;
