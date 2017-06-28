import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../db';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';

class App extends React.Component{

    state = {
        messages: {}
    }

    componentWillMount() {
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    componentDidUpdate(){
        //Scroll back
        this.messages.scrollTo = this.messages.scrollHeight;
    }

    isUser = (pseudo) => {
      return pseudo === this.props.params.pseudo;
    };

    addMessage = message => {
        //Copier le state
        const messages = {...this.state.messages};
        //On ajoute le message avec une clé
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;

        Object.keys(messages).slice(0, -10).map(key => messages[key] = null);

        //mettre à jour le state
        this.setState( { messages } )
    };

    render() {

        const messages = Object
            .keys(this.state.messages)
            .map(key => <Message
                key={key}
                details={this.state.messages[key]}
                isUser={this.isUser}
            />);

        return(
            <div className="box">
                <div>
                    <div className="message" ref={input => this.messages = input}>
                        <ReactCSSTransitionGroup
                            component="div"
                            className="message"
                            transitionName="message"
                            transitionEnterTimeout={2000}
                            transitionLeaveTimeout={2000}
                        >
                            {messages}
                        </ReactCSSTransitionGroup>
                    </div>
                    <Formulaire addMessage={ this.addMessage }
                                pseudo={ this.props.params.pseudo }
                                length={140}
                    />
                </div>
            </div>
        )
    }

    static propTypes = {
        params: React.PropTypes.object.isRequired
    };
}

export default App;