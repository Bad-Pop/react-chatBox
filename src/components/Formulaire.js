import React from 'react';

class Formulaire extends React.Component{


    state = {
        length: this.props.length
    }

    createMessage = event => {
      event.preventDefault();
      const message = {
          message: this.message.value,
          pseudo: this.props.pseudo
      };
      this.props.addMessage(message);
      this.messageForm.reset();
      const length = this.props.length;
      this.setState( { length } )
    };

    compteur = event => {
        const length = this.props.length - this.message.value.length;
        this.setState( {length} );
    };

    render(){
        return(
            <form className="form"
                  onSubmit={ e => this.createMessage(e)}
                  ref={ input => this.messageForm = input }>
                <textarea ref={input => this.message = input} required maxLength={this.props.length}
                    onChange={e => this.compteur(e)}/>
                <div className="info">
                    { this.state.length }
                </div>
                <button type="submit">Envoyer</button>
            </form>
        )
    }

    static propTypes = {
      addMessage: React.PropTypes.func.isRequired,
      pseudo: React.PropTypes.string.isRequired,
      length: React.PropTypes.number.isRequired
    };
}

export default Formulaire;