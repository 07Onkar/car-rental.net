import React, { Component } from "react";

export class CarBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carLoad: true,
        };
    }

    handleImageLoad = () => {
        this.setState({
            carLoad: false,
        });
    };

    render() {
        const { data, carID } = this.props;
        const { carLoad } = this.state;

        return (
            <>
                {data[carID].map((car, id) => (
                    <div className="box-cars" id={id} key={id}>
                        {/* car */}
                        <div className="pick-car">
                            {carLoad && <span className="loader"></span>}
                            <img
                                src={car.img}
                                alt="car_img"
                                style={{ display: carLoad ? "none" : "block" }}
                                onLoad={this.handleImageLoad}
                            />
                        </div>

                        {/* description */}
                        <div className="pick-description">
                            <div className="pick-description_price">
                                <span>₹&nbsp;{car.price}</span>/ rent per day
                            </div>
                            <div className="pick-description_table">
                                <div className="pick-description_table_col">
                                    <span>Model</span>
                                    <span>{car.model}</span>
                                </div>

                                <div className="pick-description_table_col">
                                    <span>Mark</span>
                                    <span>{car.mark}</span>
                                </div>

                                <div className="pick-description_table_col">
                                    <span>Year</span>
                                    <span>{car.year}</span>
                                </div>

                                <div className="pick-description_table_col">
                                    <span>Doors</span>
                                    <span>{car.doors}</span>
                                </div>

                                <div className="pick-description_table_col">
                                    <span>AC</span>
                                    <span>{car.air}</span>
                                </div>

                                <div className="pick-description_table_col">
                                    <span>Transmission</span>
                                    <span>{car.transmission}</span>
                                </div>

                                <div className="pick-description_table_col">
                                    <span>Fuel</span>
                                    <span>{car.fuel}</span>
                                </div>
                            </div>

                            <a href="#booking-section" className="cta-btn">
                                Reserve Now
                            </a>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}


