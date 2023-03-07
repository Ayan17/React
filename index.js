//h1 heading
let h1 = React.createElement('h1', {className: 'heading1'},  'Paragraph Content');
let display = ReactDOM.createRoot(document.getElementById('h1'));
display.render(h1);

// Paragraph text or content
let para = React.createElement('p', {className: 'content'}, 'Most paragraphs in an essay have a three-part structure—introduction, body, and conclusion. You can see this structure in paragraphs whether they are narrating, describing, comparing, contrasting, or analyzing information. Each part of the paragraph plays an important role in communicating your meaning to your reader.');
let display1 = ReactDOM.createRoot(document.getElementById('content'));
display1.render(para);

// button 
let button = React.createElement('button', {className: 'button'}, 'Learn more');
let displaybtn = ReactDOM.createRoot(document.getElementById('btn'));
displaybtn.render(button);

//main div 
let main_div = React.createElement('div', {className: 'main_container'},[h1, para, button] );
let displayAll = ReactDOM.createRoot(document.getElementById('main'));
displayAll.render(main_div);