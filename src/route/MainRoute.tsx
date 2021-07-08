import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Project, ProjectChoice, SideBar, Callback } from 'src/components';

function MainRoute() {
    return (
        <>
            <Router>
                <Route path='/' component={SideBar} />
                <Route path='/:repo_id' component={ProjectChoice} exact/>
                <Route path='/:repo_id/:project_id' component={Project} exact/>
                <Route path='/callback' component={Callback} exact />
            </Router>
        </>
    )
}

export default MainRoute;