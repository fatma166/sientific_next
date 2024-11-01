import type { FC } from 'react';
import type { PhoneInputProps } from 'react-phone-input-2';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

interface PhoneSelectProps extends PhoneInputProps {
  className?: string;
}

const PhoneSelect: FC<PhoneSelectProps> = ({
  className = '',
  ...props
}) => {
  return (
    <div className={`country__select  [&_input]:!h-12 [&_input]:!rounded-lg ${className}`} dir="ltr">
      <PhoneInput {...props} />
    </div>
  );
};

export default PhoneSelect;
