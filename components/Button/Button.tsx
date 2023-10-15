import React from 'react';
import { ButtonProps } from './Button.type';
import Image from 'next/image';

const Button = ({ type, title, icon, variant }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`flexCenter gap-3 rounded-full border-2 ${variant}`}
		>
			{icon && <Image src={icon} alt={title} width={24} height={24} />}
			<label className='bold-16 whitespace-nowrap cursor-pointer'>
				{title}
			</label>
		</button>
	);
};

export default Button;
