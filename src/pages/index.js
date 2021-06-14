import React from 'react';
import { Link } from 'gatsby';
const IndexPage = () => (
    <div>
        <h1>Cartoons</h1>

        <div>Cartoons are great!</div>
        <ul>
            <li>        <h2>
                <Link
                    to="/cartoons/jetsons"
                    activeStyle={{ color: "red" }}
                >
                    Jetsons
    </Link>
            </h2></li>
            <li>        <h2>
                <Link
                    to="/cartoons/stooges"
                    activeStyle={{ color: "red" }}
                >
                    Stooges
    </Link>
            </h2></li>
            <li>        <h2>
                <Link
                    to="/cartoons/flintstones"
                    activeStyle={{ color: "red" }}
                >
                    Flintstones
    </Link>
            </h2></li>

            <li>        <h2>
                <Link
                    to="/cartoons/warnerbros"
                    activeStyle={{ color: "red" }}
                >
                    Warner Brothers
    </Link>
            </h2></li>
        </ul>


        <h1>Technology</h1>
        <ul>
            <li>        <h2>
                <Link
                    to="/technology/mimik/"
                    activeStyle={{ color: "red" }}
                >
                    mimik
    </Link>
            </h2></li>
        </ul>

    </div>


);

export default IndexPage;