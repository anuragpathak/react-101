import React from 'react';
import ReactDOM from 'react-dom';
import CommnetDetail from './CommnetDetail'
import faker from 'faker';

const APP = () => {
    return (
        <div className="ui container comments">
           <CommnetDetail author="Sam" timeAgo="Today at 4:45 PM" comment="Nice Blog Post 0 !--" avatar={faker.image.avatar()} />
           <CommnetDetail author="You" timeAgo="Today at 5:45 PM" comment="Nice Blog Post 1 !--" avatar={faker.image.avatar()}/>
           <CommnetDetail author="me" timeAgo="Today at 6:45 AM" comment="Nice Blog Post 2 !--" avatar={faker.image.avatar()}/>
        </div>
    );
};


ReactDOM.render(<APP />, document.querySelector('#root'));