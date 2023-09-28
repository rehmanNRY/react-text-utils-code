import React from 'react'

export default function About(props) {
  return (
    <div className='container my-3'>
      <h1 className="my-2">About Us:</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={props.aboutStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.aboutHeadStyle}>
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Our Text Utility App empowers you to delve</strong> deep into your text, offering a wide array of analysis tools. From sentiment analysis to readability scores, keyword extraction to grammar checks, we've got you covered. Gain valuable insights into your content effortlessly and enhance its quality with our user-friendly interface.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.aboutStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.aboutHeadStyle}>
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>We believe in making powerful text analysis</strong> accessible to everyone. Our app is completely free to use, ensuring that you can harness its capabilities without breaking the bank. Enjoy unlimited access to text analysis features without any hidden charges or subscriptions. Experience the freedom to analyze your text without constraints.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.aboutStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.aboutHeadStyle}>
              <strong>Browser Capability</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Our Text Utility App seamlessly integrates</strong> with your web browser, offering unparalleled convenience. Whether you're researching online, drafting emails, or browsing social media, our app is there to assist you. Simply install our browser extension and access text analysis tools right from your browser, making it easier than ever to enhance your text while you surf the web.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}