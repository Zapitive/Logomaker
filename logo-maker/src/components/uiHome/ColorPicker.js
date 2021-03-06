import React, { useState } from "react";
import { SketchPicker } from 'react-color'
import reactCSS from 'reactcss'

export default function ColorPicker({ParentCallback}) {
  const[color,setColor]=useState({r: '225',
    g: '155',
    b: '99',
    a: '2'})
    const[g,setG]=useState('255')
    const[b,setB]=useState('152')
    const[a,setA]=useState('80')
    const[showPicker,setShowPicker]=useState(false)

    const onClick = () => {
        setShowPicker(!showPicker )
    };
 
    const onClose = () => {
      setShowPicker(false )
    };

    const onChange = (colors) => {
        setColor(colors.rgb)
        ParentCallback(color)
      };
    

    const styles = reactCSS({
        'default': {
          color: {
            width: '40px',
            height: '40px',
            borderRadius: '3px',
            background: `rgba(${ color.r }, ${color.g }, ${ color.b }, ${ color.a })`,
          },
          popover: {
            position: 'absolute',
            zIndex: '3',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
          swatch: {
            padding: '6px',
            background: '#ffffff',
            borderRadius: '2px',
            cursor: 'pointer',
            display: 'inline-block',
            boxShadow: '0 0 0 1px rgba(0,0,0,.2)',
          },          
        },
      });
    
    return(
            <div>
            <div style={ styles.swatch } onClick={onClick}>
            <div style={ styles.color } />
          </div>
          { showPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={onClose}/>
            <SketchPicker color={color} onChange={onChange}/>
          </div> : null }
 
        </div>

    )
}
