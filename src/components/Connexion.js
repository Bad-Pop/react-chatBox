import React from 'react';

class Connexion extends React.Component{

    static contextTypes = {
        router: React.PropTypes.object
    }

    goToChat = event => {
        event.preventDefault();
        const pseudo = this.pseudoInput.value;
        this.context.router.transitionTo(`/pseudo/${pseudo}`);
    };

    render(){
        return(
            <div className="connexionBox">
                <form className="connexion" onSubmit={ (e) => this.goToChat(e) } >

                    <input ref={ input =>  this.pseudoInput = input }
                           type="text" placeholder="Pseudonyme" required/>

                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

export default Connexion;