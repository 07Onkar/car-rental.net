import React, { Component } from "react";
import "./styles/globalStyles.css"
export class Banner extends Component {
    render() {
        return (
            <section className="banner-section">
                <div className="container">
                    <div className="banner-content">
                        <div className="banner-content_text">
                            <h2>
                                Save <strong>Huge</strong> with our Cheap rental..
                            </h2>
                            <p>
                                Top Airports, Local Suppliers. <span>24/7</span> Support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


