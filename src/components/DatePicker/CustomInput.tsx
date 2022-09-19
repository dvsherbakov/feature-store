import React, {FC, useState} from 'react';

interface ComponentProps {
    value?: Date
}

export const CustomInput: FC<ComponentProps> = ({value = new Date()}) => {
    const [editable, setEditable] = useState<boolean>(false)
    const handleClick = () => {
        if (!editable)
            setEditable(true)
    }
    return (
        <div onClick={handleClick}>
            {!editable && <div>{value.toLocaleDateString()}</div>}
            {editable && <input type="text" value={value.toLocaleDateString()}/>}
        </div>
    );
};

