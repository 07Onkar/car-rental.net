import React, { Component } from "react";
import { CarBox } from "./CarBox"; 
import { CAR_DATA } from "./CarData.js";

export class PickCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "SecondCar",
            colorBtn: "btn1",
        };
    }

    btnID = (id) => {
        this.setState((prevState) => ({
            colorBtn: prevState.colorBtn === id ? "" : id,
        }));
    };

    coloringButton = (id) => {
        return this.state.colorBtn === id ? "colored-button" : "";
    };

    setActiveCar = (carName, btnID) => {
        this.setState({
            active: carName,
            colorBtn: btnID,
        });
    };

    render() {
        const { active } = this.state;

        return (
            <>
                <section className="pick-section">
                    <div className="container">
                        <div className="pick-container">
                            <div className="pick-container_title">
                                <h3>Vehicle Models</h3>
                                <h2>Our Rental Fleet</h2>
                                <p>
                                    Choose From a variety Of our amazing vehicles to rent for Your{" "}
                                    <strong> Upcoming </strong>Adventure or Business Trip
                                </p>
                            </div>
                            <div className="pick-container_car-content">
                                <div className="pick-box">
                                    <button
                                        className={`${this.coloringButton("btn1")}`}
                                        onClick={() => this.setActiveCar("SecondCar", "btn1")}
                                    >
                                        Chevrolet Camaro
                                    </button>
                                    <button
                                        className={`${this.coloringButton("btn2")}`}
                                        onClick={() => this.setActiveCar("FirstCar", "btn2")}
                                    >
                                        Audi Q7
                                    </button>
                                    <button
                                        className={`${this.coloringButton("btn3")}`}
                                        onClick={() => this.setActiveCar("ThirdCar", "btn3")}
                                    >
                                        Ferrari LaFerrari
                                    </button>
                                    <button
                                        className={`${this.coloringButton("btn4")}`}
                                        onClick={() => this.setActiveCar("ForthCar", "btn4")}
                                    >
                                        Lamborghini Aventador
                                    </button>
                                    <button
                                        className={`${this.coloringButton("btn5")}`}
                                        onClick={() => this.setActiveCar("FifthCar", "btn5")}
                                    >
                                        McLaren P7
                                    </button>
                                    <button
                                        className={`${this.coloringButton("btn6")}`}
                                        onClick={() => this.setActiveCar("SixthCar", "btn6")}
                                    >
                                        Porsche Panamera Turbo
                                    </button>
                                </div>
                                {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
                                {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
                                {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
                                {active === "ForthCar" && <CarBox data={CAR_DATA} carID={3} />}
                                {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
                                {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}


