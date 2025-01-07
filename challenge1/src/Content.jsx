import './style.css';

function Content(){

  return(
    <content className = 'content'>
      <h1 className =  'list-name'>Fun Facts about React</h1>
      <ul className='list-items'>
        <li>React was developed by Jordan Walke, a software engineer at Facebook, in 2011.</li>
        <li>React is a JavaScript library, not a framework.</li>
        <li>React uses a Virtual DOM to efficiently update the UI.</li>
        <li>React is the backbone of apps like Instagram, Netflix, WhatsApp Web, Airbnb, and Uber Eats.</li>
        <li>React introduced JSX (JavaScript XML), which combines JavaScript and HTML in the same file. This initially sparked debate because it broke traditional separation of concerns.</li>
      </ul>
    </content>
  );
}
export default Content;