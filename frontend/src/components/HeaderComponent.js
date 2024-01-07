import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar-center">
                        <span className="navbar-text1"><a href='/'>H5 Library</a></span>
                        {/* <span className="navbar-text2">Mau Pinjam Buku? </span>
                        <a className="navbarLink" href="/">Klik disini</a> */}
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;
