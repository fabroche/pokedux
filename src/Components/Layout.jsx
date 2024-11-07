import React from 'react';

function Layout(props) {
    return (
        <div className='baseLayout'>
            {props.children}
        </div>
    );
}

export default Layout;