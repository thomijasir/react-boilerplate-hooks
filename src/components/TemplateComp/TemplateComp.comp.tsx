import React, { FC } from 'react';
import './TemplateComp.scss';

export type ITemplateCompProps = {
  title: string;
};

export const TemplateCompDefaultProps = {
  title: 'Component',
};

export const TemplateCompNamespace = 'TemplateComp';

const TemplateComp: FC<ITemplateCompProps> = ({ title }) => (
  <div className="template-comp">{title}</div>
);

TemplateComp.displayName = TemplateCompNamespace;
TemplateComp.defaultProps = TemplateCompDefaultProps;
export default TemplateComp;
