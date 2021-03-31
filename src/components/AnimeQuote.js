import React, { Component } from "react";
import '../App.css'
class AnimeQuote extends Component {

    state = {
        reply: null,
        loading: true
    }

    async componentDidMount() {
        const url = "https://animechan.vercel.app/api/random";
        const response = await fetch(url);
        const result = await response.json();
        // this.setState({reply: response[0], loading: false})
        this.setState({reply: result.response, loading: false})

        console.log(result)
        
        this.setState({reply: result, loading: false})
    }
    
    // }
    render() {
        return <div className="reply">
        {this.state.loading || !this.state.reply ? 
            (<div id="italic">typing...</div> 
            ): ( 
                <div >
                    <div className="reply-header">
                        <span id="italic">{this.state.reply.character} @{this.state.reply.anime}</span>
                    </div>
                    <div className="reply-message">{this.state.reply.quote}</div>
                </div> )}
        </div>
    }
}

export default AnimeQuote;