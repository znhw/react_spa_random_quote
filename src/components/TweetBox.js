import React, { Component } from "react"
import '../App.css'
class TweetBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweets: [], 
            loading: false
        }
        this.addTweet = this.addTweet.bind(this);
    }
    addTweet(e) {
        if (this._inputElemet.value !== "") {
            var newTweet = {
                text: this._inputElemet.value,
                key: Date.now()
            };
            this.props.onAddTweet(newTweet)

            this._inputElemet.value = "";        

        };

        console.log(this.state.tweets);

        e.preventDefault();
    }

    render() {
        return(
            <div className="tweetbox">
                <form onSubmit={this.addTweet}> 
                    <input 
                        placeholder="How are you feeling?"
                        ref= { (a) => this._inputElemet = a}
                    />
                    <button 
                        type="submit" 
                    >Tweet</button>
                </form>
            </div>
        )
    }
}



export default TweetBox
