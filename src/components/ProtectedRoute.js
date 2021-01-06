import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = (props) => {
    const Component = props.component;
    const path = props.path;
    return (
        <Route
            {...props}
            render={
                props => (
                    props.isAuthenticated ?
                        <Component {...props}/> :
                        <Redirect to="/auth"/>
                )
            }
        />
    )
}

export default ProtectedRoute;