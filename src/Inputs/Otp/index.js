import React, {useEffect, useState} from 'react';
import {Row, Padding} from '../../Layout';
import AnimatedInput from '../Animated';

const InputOtp = (props) => {
    const [focusedElement, setFocusedElement] = useState(props.autoFocus && 'ref_input0');
    const [code, setCode] = useState([false, false, false, false]);

    const textChangeFunc = (text, index, ref) => {
        let newCodes = [...code];
        newCodes[index] = isNaN(text) ? false : text;
        setCode(newCodes);
        !isNaN(text) && setFocusedElement(ref);
    }

    useEffect(() => {
        if(!code.includes(false)){
            props.submitCode && props.submitCode(code);
        }
    }, [code]);

  return (
    <Row style={{alignSelf: 'stretch', alignItems: 'stretch'}}>
        <Padding style={{flex:1}}>
            <AnimatedInput
                {...props}
                keyboardType="number-pad"
                maxLength={1}
                autoFocus={focusedElement === 'ref_input0'}
                textChange={text => textChangeFunc(text, 0, 'ref_input1')}
                style={{textAlign: 'center'}}
            />
        </Padding>
        <Padding style={{flex:1}}>
            <AnimatedInput
                {...props}
                keyboardType="number-pad"
                maxLength={1}
                autoFocus={focusedElement === 'ref_input1'}
                textChange={text => textChangeFunc(text, 1, 'ref_input2')}
                style={{textAlign: 'center'}}
            />
        </Padding>
        <Padding style={{flex:1}}>
            <AnimatedInput
                {...props}
                keyboardType="number-pad"
                maxLength={1}
                autoFocus={focusedElement === 'ref_input2'}
                textChange={text => textChangeFunc(text, 2, 'ref_input3')}
                style={{textAlign: 'center'}}
            />
        </Padding>
        <Padding style={{flex:1}}>
            <AnimatedInput
                {...props}
                keyboardType="number-pad"
                maxLength={1}
                autoFocus={focusedElement === 'ref_input3'}
                textChange={text => textChangeFunc(text, 3, 'ref_input0')}
                style={{textAlign: 'center'}}
            />
        </Padding>
    </Row>
  );
};

export default InputOtp;
