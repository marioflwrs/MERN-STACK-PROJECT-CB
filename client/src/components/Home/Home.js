import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="news-container">
                <div className="news-card">
                    <h1>Title</h1>
                    <img src="https://www.fillmurray.com/300/300" alt="news cover" />
                    <p>Cillum consequat aliqua exceptexceptexcepteur est.</p>
                </div>
                <div className="news-card">
                    <h1>Title</h1> 
                    <img src="https://www.fillmurray.com/300/300" alt="news cover" />
                    <p>Ut voluptate fugiat eu amet duis consectetur occaecat mollit.</p>
                </div>
                <div className="news-card">
                    <h1>Title</h1>
                    <img src="https://www.fillmurray.com/300/300" alt="news cover" />
                    <p>Ullamco sunt ad esse aliquip dolor exercitation exercitation sit.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;