import './Menu.scss';
import Code from './Code';

function Menu({ code, language }) 
{	
	return (
		<div className="Menu">

			<header>
				Menu
			</header>

			<main>
				
			<p>
					Here is some JS code:
				</p>

				<Code className="lineNumbers" language="javascript" code={JSCode}/>

				
				<p>
					Here is some Java code:
				</p>

				<Code className="lineNumbers" language="java" code={JavaCode}/>


				</main>
		</div>
	);
}

export default Menu;


const JSCode = `
var a = 1 + 1;  
console.log("a", a);

for (var i=0;i<10;io++) {
	i += 2;
}
`;

const JavaCode = `
class TestReport extends ConfigurableApp {
	public TestReport(TestReportConfig settings)
	{
		this.configure(settings);
	}

	public void load(TestResults results)
	{
		for(var result : results)
		{
			process(result);
		}
	}

	public void publish()
	{

	}
}
`;