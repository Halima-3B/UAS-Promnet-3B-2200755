import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const footerStyle = {
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            backgroundColor: "#9e7676d7",
            color: "#fff",
            textAlign: "center",
            padding: "10px 0",
        };

        const contentStyle = {
            margin: "auto",
        };

        return (
            <div>
                <div style={contentStyle}>
                    {/* Your main content here */}
                </div>
                <nav style={footerStyle} className="footer">
                    <div className="footer-content">
                        <span>&copy; 2024 Hal. All Rights Reserved.</span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default FooterComponent;
