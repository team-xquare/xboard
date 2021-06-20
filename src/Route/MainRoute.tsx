import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Project, ProjectChoice, SideBar } from 'src/components';

function MainRoute() {
    return (
        <>
            <Router>
                <Route path='/' component={SideBar} />
                <Route path='/:repo_id' component={ProjectChoice} exact/>
                <Route path='/:repo_id/:project_id' component={Project} exact/>
            </Router>
        </>
    )
}

export default MainRoute;