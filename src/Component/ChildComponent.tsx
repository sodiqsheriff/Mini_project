import React from 'react';
import SvgIcon from './Svg_icon';

interface ChildComponentProps {
  icon: string;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ icon }) => {
  return (
    <div className="child-component active:bg-[#5B5AFB]">
      <SvgIcon svgCode={icon} className="svg-icon" />
    </div>
  );
};

export default ChildComponent;
