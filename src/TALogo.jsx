import './TALogo.scss';
import logo from './logo.svg';

function TALogo()
{
	return(
		<div class="TALogo">
			Test 
			<img src={logo} alt="logo" height="50px"/>
			Analytics		
		</div>
	)
}

export default TALogo;