import { HTMLProps } from 'react';
import './Email.css';

const Email = ({ children }: HTMLProps<HTMLDivElement>) => (
  <div className="email">{children}</div>
);

export default Email;
