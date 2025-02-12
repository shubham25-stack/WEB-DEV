import { Children, useEffect } from "react";

function CardWrapper() {
    return (
        <div>
            <Card>
                <Card>
                    <Card>
                        <Card>
                            <TextComponent />
                        </Card>
                    </Card>
                </Card>
            </Card>
            <br />
            <Card><h2>
                Wellcome people</h2></Card>
        </div>
    );
}

function TextComponent() {
    return <div><h1>Hii People</h1></div>;
}

function Card({ children }) {
    return (
        <div style={{ border: "2px solid black", justifyContent: "center", padding: "20px" }}>
            {children}
        </div>
    );
}

export default CardWrapper;
