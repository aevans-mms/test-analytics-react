import React, {useEffect} from "react";

import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.min.css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-gherkin';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
import 'prismjs/plugins/remove-initial-line-feed/prism-remove-initial-line-feed.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import "./Code.scss";


function Code({ code, language, showLineNumbers=true}) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);


	return (

		<div className="Code">
			<div className="language nocopy"> {language} </div>
			<pre className={showLineNumbers ? 'line-numbers' : 'no-line-numbers'}><code className={`language-${language}`}>{code}</code></pre>
		</div>
	);
}

export default Code;