import React from 'react';
import Layout from './../Layout/LayoutComponent';


export default class App extends React.Component {
    render() {
        return (
            <Layout>
				{this.props.children}
            </Layout>
        );
    }
}