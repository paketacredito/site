import React from 'react'
export default class BasePage extends React.Component{
  openContact = () =>{
    var robbu = window.chatRobbu;
    if(robbu){
      var active = robbu.elements.activeBlock();
      if(!active)
        robbu.transitions.fadeIn(robbu.elements.firstBlock())
    }
  }

  render(){
    return (null);
  }
}