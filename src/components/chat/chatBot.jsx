import React from 'react';

export class ChatBot extends React.Component{
  constructor(props){
    super(props);
    this.loadScript('https://inveniochatapi.azurewebsites.net/chat.js', function(){
      try{
        if (typeof window !== `undefined`) {
          window.chatRobbu.init('3573CC6178E86034', {
            theme: 'Default',
            delay: 500,
            open: true,
            call: 'Simule seu empréstimo'
          });
        }
      }catch(e)
      {
        console.log(e);
      }
    });
  }

  loadScript( url, callback ) {
    try{
      if (typeof window !== `undefined`) {
        if(!window.chatRobbu){
          var script = document.createElement( "script" )
          script.type = "text/javascript";
      
          if(script.readyState) {  // only required for IE <9
            script.onreadystatechange = function() {
              if ( script.readyState === "loaded" || script.readyState === "complete" ) {
                script.onreadystatechange = null;
                callback();
              }
            };
          } else {  //Others
            script.onload = function() {
              callback();
            };
          }
        
          script.src = url;
          window.document.getElementsByTagName( "head" )[0].appendChild( script );
        }
      }
    }catch(error){
      console.log(error);
    }
  }

  render(){
    return "";
  }
}

export default ChatBot