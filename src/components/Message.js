import React from 'react';

class Message extends React.Component{

    preRender = (isUser) => {
      if(isUser){
          return(
              <p className="user-message">{this.props.details.message}</p>
          )
      }
      else{
          return(
              <p className="">{ this.props.details.pseudo } : {this.props.details.message}</p>
          )
      }
    };

    render(){
        return this.preRender(this.props.isUser(this.props.details.pseudo));
    }
}

export default Message;