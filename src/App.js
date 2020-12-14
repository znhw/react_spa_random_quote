import './App.css';
import TweetBox from './components/TweetBox'
import { useState } from 'react';
import TweetPosts from './components/TweetPosts'


function App() {

  const [userTweets, setUserTweets] = useState([])

  return (
    <div className="wrapper">
      <h1>Start a conversation with characters from the anime world.</h1>
    
    <br></br>
    <TweetBox onAddTweet={(tweetText) => setUserTweets(userTweets.concat(tweetText)) }/>
      <div className="tweetposts">
        <TweetPosts 
        entries={userTweets}
      />

      </div>
    {/* { userTweets.length > 0 ? <AnimeQuote/> : null } */}


    </div>
  )
}

export default App;
