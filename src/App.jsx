import './App.scss';
import Code from './Code';
import TALogo from './TALogo';

const JSCode = `
var x = 1;
for (var i=0; i< x; i++) {
	console.log(x);
}
`

const CSSCode = `
testResult { pass: green; fail: red; }
`
	
function App() {

	return (
		<div className="App">
			
			<header className="App-header">
				<TALogo/>		
				<div> Header </div>
			</header>

		
			<main className="App-main">
				
				<h1>Main</h1>

				<h2>Section 1</h2>
				
				<h3> Details </h3>

				<p>
					Here is some JS code:
				</p>
				<Code code={JSCode} language="javascript" />


				<p>
					Here is some CSS code:
				</p>
				<Code code={CSSCode} language="css" showLineNumbers={false}/>

			</main>
			<footer className="App-footer">

				Footer
			</footer>
		</div>
	);
}

export default App;
