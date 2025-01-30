import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './App.css';

// Import images directly from the src folder
import gsr18v90fc from './images/gsr_18v_90_fc.webp';
import gsr12v15 from './images/GSR 12V-15.webp';
import gsr18v60c from './images/GSR 18V-60 C.png';
import gsr18v55fc from './images/GSR 18V-55 FC.webp';
import gsr18v28 from './images/GSR 18V-28.webp';
import gsr18v110c from './images/GSR 18V-110 C.webp';
import gbh540d from './images/GBH 5-40 D.webp';
import gbh226dre from './images/GBH 2-26 DRE.webp';
import gbh18v40c from './images/GBH 18V-40 C.webp';
import gbh432dfr from './images/GBH 4-32 DFR.webp';
import gbh18v45c from './images/GBH 18V-45 C.webp';
import gbh220 from './images/GBH 2-20.webp';
import gbh228 from './images/GBH 2-28.webp';
import gbh18v26 from './images/GBH 18V-26.webp';
import gsb18v60fc from './images/GSB 18V-60 FC.webp';
import gws18125 from './images/GWS 18-125.webp';

function App() {
  const productImages = {
    "GSR 18V-90 FC": gsr18v90fc,
    "GSR 12V-15": gsr12v15,
    "GSR 18V-60 C": gsr18v60c,
    "GSR 18V-55 FC": gsr18v55fc,
    "GSR 18V-28": gsr18v28,
    "GSR 18V-110 C": gsr18v110c,
    "GBH 5-40 D": gbh540d,
    "GBH 2-26 DRE": gbh226dre,
    "GBH 18V-40 C": gbh18v40c,
    "GBH 4-32 DFR": gbh432dfr,
    "GBH 18V-45 C": gbh18v45c,
    "GBH 2-20": gbh220,
    "GBH 2-28": gbh228,
    "GBH 18V-26": gbh18v26,
    "GSB 18V-60 FC": gsb18v60fc,
    "GWS 18-125": gws18125
  };
  const productLinks = {
    "GWB 12V-10": "https://www.bosch-professional.com/gb/en/products/gwb-12v-10-0601390909",
    "GWB 10 RE": "https://www.bosch-professional.com/lb/en/products/gwb-10-re-0601132703",
    "GBH 2-26 DRE": "https://www.bosch-professional.com/gb/en/products/gbh-2-26-06112A3060?queryFromSuggest=true&userInput=GBH+2-26+DRE",
    "GBH 18V-40 C": "https://www.bosch-professional.com/gb/en/products/gbh-18v-40-c-0611917100?queryFromSuggest=true&userInput=GBH+18V-40+C",
    "GBH 5-40 D": "https://www.bosch-professional.com/gb/en/products/gbh-5-40-d-0611269060?queryFromSuggest=true&userInput=GBH+5-40+D",
    "GBH 18V-45 C": "https://www.bosch-professional.com/gb/en/products/gbh-18v-45-c-0611913000?queryFromSuggest=true&userInput=GBH+18V-45+C",
    "GBH 4-32 DFR": "https://www.bosch-professional.com/gb/en/products/gbh-4-32-dfr-0611332161",
    "GTB18V-45": "https://www.bosch-professional.com/gb/en/products/gtb-18v-45-06019K7000?queryFromSuggest=true&userInput=GTB18V-45",
    "GTB12V-11": "https://www.bosch-professional.com/gb/en/products/gtb-12v-11-06019E4002?queryFromSuggest=true&userInput=GTB12V-11",
    "GTB185-LI w/ GMA55": "https://www.bosch-professional.com/gb/en/products/gho-18v-li-06015A0300?queryFromSuggest=true&userInput=GTB185-LI+w%2F+GMA55",
    "GSR 18V-90 FC": "https://www.bosch-professional.com/gb/en/products/gsr-18v-90-fc-06019K6202",
    "GSR 18V-90 C": "https://www.bosch-professional.com/gb/en/products/gsr-18v-90-c-06019K6000",
    "GBM 13-2 RE": "https://www.bosch-professional.com/gb/en/products/gbm-13-2-re-06011B2060",
    "GSR 18V-55": "https://www.bosch-professional.com/gb/en/products/gsr-18v-55-06019H5202",
    "GSB 18V-45": "https://www.bosch-professional.com/gb/en/products/gsb-18v-45-06019K3300",
    "GSB 21-2 RE": "https://www.bosch-professional.com/gb/en/products/gsb-21-2-re-060119C560",
    "GSB 18V-21": "https://www.bosch-professional.com/gb/en/products/gsb-18v-21-06019H1108",
    "GSB 18V-55": "https://www.bosch-professional.com/gb/en/products/gsb-18v-55-06019H5302",
    "GSB 18V-28": "https://www.bosch-professional.com/gb/en/products/gsb-18v-28-06019H4000",
    "GSB 162-2 RE": "https://www.bosch-professional.com/gb/en/products/gsb-162-2-re-060118B060",
    "GSB 12V-15": "https://www.bosch-professional.com/gb/en/products/gsb-12v-15-06019B6901",
  };

  
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]); // Array to hold both user and bot messages
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(''); // State to handle error messages

  const generateQuestion = async () => {
    setLoading(true); // Set loading to true when the request starts
    setError(''); // Reset error state before making the request
    try {
        const res = await axios.post(" https://4b69-35-231-176-224.ngrok-free.app/api/generate", 
            { prompt: userInput }
        );
        console.log(res.data);
    
        // Set the bot's response text
        const botResponse = res.data.generated_text;
        
        // Check if botResponse contains any keyword and match the image
        let matchedImages = [];
        for (const key in productImages) {
            if (botResponse.toLowerCase().includes(key.toLowerCase())) {  // case-insensitive match
                matchedImages.push(productImages[key]);
            }
        }

        // Handle product link matching
        let productLink = null;
        for (const key in productLinks) {
            if (botResponse.includes(key)) {
                productLink = productLinks[key];
                break;
            }
        }

        // Add the user message and bot response to messages
        setMessages(prevMessages => [
            ...prevMessages,
            { text: userInput, sender: 'user' }, // Add user message to messages
            { text: botResponse, sender: 'bot' }  // Add bot response to messages
        ]);

        // If product link is found, add it to the bot response
        if (productLink) {
          setMessages(prevMessages => [
              ...prevMessages,
              { 
                  text: (
                      <span>
                          Check out the product here: 
                          <a href={productLink} target="_blank" rel="noopener noreferrer">
                              {productLink}
                          </a>
                      </span>
                  ), 
                  sender: 'bot' 
              } // Add the product link to the bot response
          ]);
      }
      

        // If images are matched, add them to the messages
        if (matchedImages.length > 0) {
            matchedImages.forEach((image) => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    {  text: '', sender: 'bot', image: image } // Add the image to the bot response
                ]);
            });
        }
    } catch (error) {
        console.error("Error generating question:", error);
        setError("An error occurred while generating the question."); // Set error message if request fails
    } finally {
        setLoading(false); // Set loading to false after the request ends
    }
};

  

  return (
    <div>
      <div className="header">
        <img className="headimg" src="Screenshot 2024-05-26 223627.png" alt="" />
        <div className="top">
          <div className="tophead">
            <img src="download-bosch-logo-png-transparent-silver-25.png" alt="" />
            <h2>BOSCH POWER TOOL FINDER</h2>
          </div>
          <div className="topnav">
            <p>Our Products</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Feedback</p>
          </div>
        </div>
      </div>

      <div className="container-middle">
        <div className="container">
          <div className="message-container" id="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}
              >
                {message.text}
                {message.image && <img src={message.image} alt="Product" />} {/* Render the image if present */}
              </div>
            ))}
            {/* Display error message if any */}
            {error && <div className="message-bot">{error}</div>}
          </div>
        </div>

        <div className="input-container">
          <textarea
            id="userInput"
            className="userInput"
            placeholder="Type your question here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)} // Update state when user types
          ></textarea>
          <button onClick={generateQuestion} disabled={loading}>
            {loading ? 'Generating...' : 'Send'}
          </button> {/* Button shows loading state */}
        </div>
        <div id="imagesContainer"></div>
      </div>
    </div>
  );
}

export default App;
