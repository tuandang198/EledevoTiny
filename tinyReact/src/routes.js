import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as page from './pages'

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component = {page.HomePage}/>
		</Switch>
	</BrowserRouter>
);
export default Routes;